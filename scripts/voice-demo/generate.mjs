#!/usr/bin/env node
/**
 * Voice demo clips for /solutions/voice-agent/.
 *
 * The key never ships: it is read from the shell and used once, here, to make
 * MP3 files. The site only plays the saved files.
 *
 *   node scripts/voice-demo/generate.mjs --verify            text matches the page?
 *   node scripts/voice-demo/generate.mjs --dry-run           print SSML, no network
 *   AZURE_SPEECH_KEY=... AZURE_SPEECH_REGION=eastus \
 *     node scripts/voice-demo/generate.mjs                   make missing clips + review sheet
 *       [--lang en|ne] [--only booking-2] [--force]
 *   PIPER_BIN=/path/to/piper PIPER_VOICES=/path/to/voices \
 *     node scripts/voice-demo/generate.mjs --provider piper   free, offline, no account (see PIPER below)
 *   KOKORO_PY=/path/to/venv/python KOKORO_DIR=/path/to/kokoro \
 *     node scripts/voice-demo/generate.mjs --provider kokoro  free, offline, more natural (see KOKORO below)
 *   node scripts/voice-demo/generate.mjs --apply approved.json   mark clips approved + publish
 *   node scripts/voice-demo/generate.mjs --publish           rebuild src/_data/voiceClips.json
 *
 * Only clips with approved=true reach the site (src/_data/voiceClips.json).
 */
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const MANIFEST = path.join(root, 'scripts/voice-demo/clips.json');
const PAGE = path.join(root, 'src/pages/solutions/voice-agent.njk');
const AUDIO_DIR = path.join(root, 'public/assets/audio/voice-demo');
const PUBLIC_DATA = path.join(root, 'src/_data/voiceClips.json');
const REVIEW_DIR = path.join(root, 'docs/voice-review');
const BITRATE = 48000; // audio-24khz-48kbitrate-mono-mp3

/**
 * PIPER: open-source voices that run on this machine. Licences were read from
 * each voice's MODEL_CARD: kristin = public domain, joe = CC0, chitwan = CC0.
 * ne caller = google speaker 0 (CC-BY-SA 4.0: needs a credit line on the page and share-alike review).
 * (Other Piper voices such as ryan and hfc_* are non-commercial; do not use them.)
 * Piper has no emotion styles. Delivery comes from pace, pitch and the wording.
 */
const PIPER = {
  en: { agent: { model: 'en_US-kristin-medium', semitones: 0, length: 1.0 }, caller: { model: 'en_US-joe-medium', semitones: 0, length: 1.04 } },
  ne: { agent: { model: 'ne_NP-chitwan-medium', semitones: 0, length: 1.18 }, caller: { model: 'ne_NP-google-medium', speaker: 0, semitones: 0, length: 1.2 } },
};

function piperClip(c, out) {
  const bin = process.env.PIPER_BIN, dir = process.env.PIPER_VOICES;
  if (!bin || !dir) { console.error('Set PIPER_BIN and PIPER_VOICES (folder with the .onnx voices).'); process.exit(1); }
  const v = PIPER[c.lang][c.speaker];
  const tmp = path.join(os.tmpdir(), `piper-${c.lang}-${c.id}.wav`);
  const lengthScale = v.length * (/Done|Booked|Moved|भयो|बुक भयो/.test(c.text) ? 0.96 : 1);
  const synth = (text, outWav) => spawnSync(bin, ['-m', path.join(dir, `${v.model}.onnx`), ...(v.speaker != null ? ['-s', String(v.speaker)] : []), '-f', outWav, '--length-scale', String(lengthScale), '--noise-scale', c.lang === 'ne' ? '0.5' : '0.8', '--noise-w-scale', c.lang === 'ne' ? '0.7' : '0.9', '--sentence-silence', c.lang === 'ne' ? '0.45' : '0.25'], { input: spoken(text, c.lang), encoding: 'utf8' });
  // "||" in the text is a natural pause: speak each part, join with silence.
  const parts = c.text.split('||').map((t) => t.trim()).filter(Boolean);
  let r;
  if (parts.length === 1) { r = synth(parts[0], tmp); }
  else {
    const wavs = parts.map((t, i) => { const w = tmp.replace(/\.wav$/, `-p${i}.wav`); const rr = synth(t, w); if (rr.status !== 0) r = rr; return w; });
    if (!r) {
      const rate = JSON.parse(fs.readFileSync(path.join(dir, `${PIPER[c.lang][c.speaker].model}.onnx.json`), 'utf8')).audio.sample_rate;
      const sil = tmp.replace(/\.wav$/, '-sil.wav');
      spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'lavfi', '-i', `anullsrc=r=${rate}:cl=mono`, '-t', '0.7', '-c:a', 'pcm_s16le', sil]);
      const list = tmp.replace(/\.wav$/, '-list.txt');
      fs.writeFileSync(list, wavs.map((w) => `file '${w}'`).join(`\nfile '${sil}'\n`) + '\n');
      r = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list, '-c:a', 'pcm_s16le', tmp]);
      [...wavs, sil, list].forEach((f) => fs.rmSync(f, { force: true }));
    }
  }
  if (r.status !== 0 || !fs.existsSync(tmp)) { console.error(`piper failed for ${c.id}:`, r.stderr); process.exit(1); }
  const src = isQuestion(c) ? questionRise(tmp) : tmp;
  const rate = JSON.parse(fs.readFileSync(path.join(dir, `${v.model}.onnx.json`), 'utf8')).audio.sample_rate;
  const f = v.semitones ? `asetrate=${Math.round(rate * 2 ** (v.semitones / 12))},aresample=${rate},atempo=${(1 / 2 ** (v.semitones / 12)).toFixed(5)},` : '';
  const ff = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-af', `${f}highpass=f=90,lowpass=f=9000,afftdn=nr=14:nf=-45,loudnorm=I=-18:TP=-2`, '-ac', '1', '-ar', '24000', '-b:a', '48k', out]);
  fs.rmSync(tmp, { force: true }); fs.rmSync(src, { force: true });
  if (ff.status !== 0) { console.error(`ffmpeg failed for ${c.id}:`, String(ff.stderr)); process.exit(1); }
}

/**
 * KOKORO: Kokoro-82M (Apache-2.0), local. English uses its US voices.
 * Kokoro has no Nepali voice: Nepali lines are read by its Hindi voices from
 * the Devanagari text, so expect a Hindi accent. Listen before approving;
 * `--provider piper --lang ne --force` brings back the Piper Nepali voice.
 */
const KOKORO = {
  en: { agent: { voice: 'af_heart', lang: 'en-us', speed: 1.0 }, caller: { voice: 'am_michael', lang: 'en-us', speed: 0.97 } },
  ne: { agent: { voice: 'hf_alpha', lang: 'hi', speed: 0.95 }, caller: { voice: 'hm_omega', lang: 'hi', speed: 0.93 } },
};

function kokoroClip(c, out) {
  const py = process.env.KOKORO_PY, dir = process.env.KOKORO_DIR;
  if (!py || !dir) { console.error('Set KOKORO_PY (python with kokoro-onnx) and KOKORO_DIR (model folder).'); process.exit(1); }
  const v = KOKORO[c.lang][c.speaker];
  const tmp = path.join(os.tmpdir(), `kokoro-${c.lang}-${c.id}.wav`);
  const r = spawnSync(py, [path.join(root, 'scripts/voice-demo/kokoro_tts.py'), dir, v.voice, v.lang, String(v.speed), tmp], { input: say(c), encoding: 'utf8' });
  if (r.status !== 0 || !fs.existsSync(tmp)) { console.error(`kokoro failed for ${c.id}:`, r.stderr); process.exit(1); }
  const src = isQuestion(c) ? questionRise(tmp) : tmp;
  const ff = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-af', 'loudnorm=I=-18:TP=-2', '-ac', '1', '-ar', '24000', '-b:a', '48k', out]);
  fs.rmSync(tmp, { force: true }); fs.rmSync(src, { force: true });
  if (ff.status !== 0) { console.error(`ffmpeg failed for ${c.id}:`, String(ff.stderr)); process.exit(1); }
}

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
const save = () => fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1) + '\n');
const clipPath = (c) => path.join(AUDIO_DIR, c.lang, `${c.id}.mp3`);
// Say clock times the way a person does: "11:00" -> "eleven o'clock", "10:30" -> "ten thirty", "14:00" -> "two o'clock".
const NUM = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
const MIN = { 5: 'oh five', 10: 'ten', 15: 'fifteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 45: 'forty-five', 50: 'fifty' };
function spoken(text, lang) {
  if (lang !== 'en') return text;
  return text.replace(/\b(\d{1,2}):(\d{2})\b/g, (_, h, m) => {
    const hh = NUM[Number(h) % 12], mm = Number(m);
    return mm === 0 ? `${hh} o'clock` : `${hh} ${MIN[mm] ?? String(mm)}`;
  });
}
// Open Nepali voices read questions flat. Lift the pitch over the last ~0.6 s of a question,
// in two steps (+2 then +4 semitones), so it sounds asked, not read.
function questionRise(wav) {
  const probe = (k) => spawnSync('ffprobe', ['-v', 'error', '-show_entries', `${k === 'd' ? 'format=duration' : 'stream=sample_rate'}`, '-of', 'default=nw=1:nk=1', wav], { encoding: 'utf8' }).stdout.trim();
  const d = parseFloat(probe('d')), sr = parseInt(probe('r'), 10);
  if (!(d > 1.2) || !sr) return wav;
  const t1 = d - 0.6, t2 = d - 0.3, up = (st) => 2 ** (st / 12);
  const seg = (a, b, st) => `[0:a]atrim=${a}:${b},asetpts=PTS-STARTPTS,asetrate=${Math.round(sr * up(st))},aresample=${sr},atempo=${(1 / up(st)).toFixed(5)}`;
  const fc = `[0:a]atrim=0:${t1.toFixed(3)},asetpts=PTS-STARTPTS[a];${seg(t1.toFixed(3), t2.toFixed(3), 2)}[b];${seg(t2.toFixed(3), d.toFixed(3), 4)}[c];[a][b]acrossfade=d=0.03[ab];[ab][c]acrossfade=d=0.03`;
  const out = wav.replace(/\.wav$/, '-q.wav');
  const r = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', wav, '-filter_complex', fc, out]);
  return r.status === 0 && fs.existsSync(out) ? out : wav;
}
// Off by default: the pitch lift shifts the voice's timbre, so the end of a question sounds like a second speaker.
const isQuestion = (c) => process.argv.includes('--rise') && c.lang === 'ne' && /[?？]\s*$/.test(c.text);
const say = (c) => spoken(c.text.replace(/\|\|/g, ' '), c.lang);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function ssml(c, styles) {
  const locale = c.voice.split('-').slice(0, 2).join('-');
  let inner = `<prosody rate="${c.rate || '+0%'}" pitch="${c.pitch || '+0%'}">${esc(say(c))}</prosody>`;
  if (c.style && (!styles || styles.includes(c.style))) {
    inner = `<mstts:express-as style="${c.style}" styledegree="${c.styleDegree ?? 1}">${inner}</mstts:express-as>`;
  }
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="${locale}"><voice name="${c.voice}">${inner}</voice></speak>`;
}

function publish() {
  const out = { en: {}, ne: {} };
  for (const c of manifest.clips) {
    if (!c.approved || !c.duration || !fs.existsSync(clipPath(c))) continue;
    out[c.lang][c.id] = c.lang === 'ne' ? { d: c.duration, text: c.text.replace(/\|\|/g, ' '), gloss: c.gloss } : { d: c.duration };
  }
  fs.writeFileSync(PUBLIC_DATA, JSON.stringify(out) + '\n');
  console.log(`published ${Object.keys(out.en).length} English and ${Object.keys(out.ne).length} Nepali clips to src/_data/voiceClips.json`);
}

function verify() {
  const page = fs.readFileSync(PAGE, 'utf8');
  const bad = manifest.clips.filter((c) => c.lang === 'en').filter((c) => {
    const t = c.text;
    return !(page.includes(`text: "${t}"`) || page.includes(`text: '${t.replace(/'/g, "\\'")}'`));
  });
  if (bad.length) { console.error('Text differs from the page for:', bad.map((c) => c.id).join(', ')); process.exit(1); }
  console.log(`OK: ${manifest.clips.filter((c) => c.lang === 'en').length} English lines match the page.`);
}

// What actually made the clip (the manifest's azure fields are only used for --provider azure).
function voiceLabel(c) {
  if (c.provider === 'kokoro') { const v = KOKORO[c.lang][c.speaker]; return `Kokoro ${v.voice}${c.lang === 'ne' ? ' (Hindi voice)' : ''}`; }
  if (c.provider === 'piper') { const v = PIPER[c.lang][c.speaker]; return `Piper ${v.model}${isQuestion(c) ? ' + question rise' : ''}`; }
  return `${c.voice}${c.style ? ' · ' + c.style : ''}`;
}

function reviewSheet() {
  fs.mkdirSync(REVIEW_DIR, { recursive: true });
  const seen = new Set();
  const rows = manifest.clips.filter((c) => fs.existsSync(clipPath(c))).map((c) => {
    const anchor = seen.has(c.lang) ? '' : ` id="${c.lang}"`; seen.add(c.lang);
    const rel = path.relative(REVIEW_DIR, clipPath(c));
    return `<tr${anchor} data-id="${c.id}" data-lang="${c.lang}"><td>${c.lang}</td><td>${c.id}</td><td>${c.speaker}</td><td lang="${c.lang}">${esc(c.text.replace(/\|\|/g, ' '))}${c.gloss ? `<br><small>${esc(c.gloss)}</small>` : ''}</td><td><small>${voiceLabel(c)}</small></td><td><audio controls preload="none" src="${rel}"></audio></td><td><label><input type="radio" name="r-${c.lang}-${c.id}" value="ok"${c.approved ? ' checked' : ''}> OK</label> <label><input type="radio" name="r-${c.lang}-${c.id}" value="flag"> Flag</label> <input placeholder="what to change" size="22"></td></tr>`;
  });
  fs.writeFileSync(path.join(REVIEW_DIR, 'index.html'), `<!doctype html><meta charset="utf-8"><title>Voice clip review</title><style>body{font:14px system-ui;margin:24px}table{border-collapse:collapse}td,th{border:1px solid #ccc;padding:6px 8px;vertical-align:top}th{background:#f3f4f6}</style><h1>Voice clip review</h1><p><a href="#en">English (${manifest.clips.filter((c) => c.lang === 'en').length})</a> &middot; <a href="#ne">नेपाली / Nepali (${manifest.clips.filter((c) => c.lang === 'ne').length})</a></p><p>Listen to each clip, mark OK or Flag. Export saves approved.json (ok ids) and flags.json (what to change). Unreviewed Nepali never ships.</p><table><tr id="top"><th>Lang</th><th>Id</th><th>Who</th><th>Text</th><th>Voice</th><th>Play</th><th>Verdict</th></tr>${rows.join('')}</table><p><button onclick="exp()">Export approved.json and flags.json</button></p><script>function exp(){var ok={en:[],ne:[]},fl=[];document.querySelectorAll('tr[data-id]').forEach(function(r){var v=r.querySelector('input[type=radio]:checked');if(!v)return;var l=r.dataset.lang,id=r.dataset.id;if(v.value==='ok')ok[l].push(id);else fl.push({lang:l,id:id,change:r.querySelector('input[placeholder]').value})});function dl(n,o){var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(o,null,1)],{type:'application/json'}));a.download=n;a.click()}dl('approved.json',ok);dl('flags.json',fl)}</script>`);
  console.log('review sheet: docs/voice-review/index.html');
}

async function main() {
  if (flag('--verify')) return verify();
  if (flag('--publish')) return publish();
  if (flag('--review')) return reviewSheet();
  const applyFile = opt('--apply');
  if (applyFile) {
    const ok = JSON.parse(fs.readFileSync(applyFile, 'utf8'));
    for (const c of manifest.clips) c.approved = (ok[c.lang] || []).includes(c.id);
    save(); return publish();
  }

  let todo = manifest.clips.filter((c) => !opt('--lang') || c.lang === opt('--lang')).filter((c) => !opt('--only') || opt('--only').split(',').includes(c.id));
  const dry = flag('--dry-run');
  if (dry) { todo.forEach((c) => console.log(`# ${c.lang} ${c.id}\n${ssml(c)}\n`)); return; }

  if (opt('--provider') === 'piper' || opt('--provider') === 'kokoro') {
    const make = opt('--provider') === 'piper' ? piperClip : kokoroClip;
    todo = todo.filter((c) => flag('--force') || !fs.existsSync(clipPath(c)));
    for (const c of todo) {
      fs.mkdirSync(path.dirname(clipPath(c)), { recursive: true });
      make(c, clipPath(c));
      const buf = fs.statSync(clipPath(c)).size;
      c.duration = Math.round(((buf * 8) / BITRATE) * 10) / 10;
      c.approved = false; c.provider = opt('--provider');
      console.log(`${c.lang} ${c.id}  ${c.duration}s  ${(buf / 1024).toFixed(0)} KB`);
    }
    for (const c of manifest.clips) if (!c.duration && fs.existsSync(clipPath(c))) c.duration = Math.round(((fs.statSync(clipPath(c)).size * 8) / BITRATE) * 10) / 10;
    save(); reviewSheet(); publish(); return;
  }
  const key = process.env.AZURE_SPEECH_KEY, region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) { console.error('Set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION in this shell first.'); process.exit(1); }
  const host = `https://${region}.tts.speech.microsoft.com/cognitiveservices`;

  const vr = await fetch(`${host}/voices/list`, { headers: { 'Ocp-Apim-Subscription-Key': key } });
  if (!vr.ok) { console.error('Could not list voices:', vr.status, await vr.text()); process.exit(1); }
  const voices = Object.fromEntries((await vr.json()).map((v) => [v.ShortName, v.StyleList || []]));
  for (const name of new Set(todo.map((c) => c.voice))) {
    if (!(name in voices)) { console.error(`Voice not available in this region: ${name}`); process.exit(1); }
  }
  for (const c of todo) if (c.style && !voices[c.voice].includes(c.style)) console.warn(`note: ${c.voice} has no "${c.style}" style, ${c.id} is generated without it`);

  todo = todo.filter((c) => flag('--force') || !fs.existsSync(clipPath(c)));
  for (const c of todo) {
    const r = await fetch(`${host}/v1`, { method: 'POST', headers: { 'Ocp-Apim-Subscription-Key': key, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3', 'User-Agent': 'zunkiree-voice-demo' }, body: ssml(c, voices[c.voice]) });
    if (!r.ok) { console.error(`${c.lang} ${c.id} failed: ${r.status} ${await r.text()}`); process.exit(1); }
    const buf = Buffer.from(await r.arrayBuffer());
    fs.mkdirSync(path.dirname(clipPath(c)), { recursive: true });
    fs.writeFileSync(clipPath(c), buf);
    c.duration = Math.round(((buf.length * 8) / BITRATE) * 10) / 10;
    c.approved = false; // a regenerated clip needs listening again
    console.log(`${c.lang} ${c.id}  ${c.duration}s  ${(buf.length / 1024).toFixed(0)} KB`);
  }
  // Backfill durations for clips generated earlier.
  for (const c of manifest.clips) if (!c.duration && fs.existsSync(clipPath(c))) c.duration = Math.round(((fs.statSync(clipPath(c)).size * 8) / BITRATE) * 10) / 10;
  save(); reviewSheet(); publish();
}
main().catch((e) => { console.error(e); process.exit(1); });
