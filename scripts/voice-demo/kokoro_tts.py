"""Kokoro text-to-speech helper for generate.mjs (--provider kokoro).
Usage: python kokoro_tts.py <model_dir> <voice> <lang> <speed> <out.wav>  (text on stdin)
Kokoro-82M is Apache-2.0. It runs locally; no account or key."""
import sys
import soundfile as sf
from kokoro_onnx import Kokoro

model_dir, voice, lang, speed, out = sys.argv[1:6]
k = Kokoro(f"{model_dir}/kokoro-v1.0.onnx", f"{model_dir}/voices-v1.0.bin")
samples, rate = k.create(sys.stdin.read().strip(), voice=voice, speed=float(speed), lang=lang)
sf.write(out, samples, rate)
