# AI Dental Assistant and Patient Data Security: A HIPAA Checklist for US Practices

URL: https://zunkireelabs.com/blog/ai-dental-assistant-patient-data-security-hipaa-checklist-for-us-practices/
Published: 2026-10-12
Summary: Thinking of an AI dental assistant? A plain-English HIPAA checklist for US practices: business associate agreements, access controls, audit logs and questions for vendors.

**In short:** If an AI dental assistant will see patient information, HIPAA treats the vendor as a business associate. Before you share anything, you need written assurances that it will safeguard the data, and the vendor's system needs the technical controls the Security Rule describes. This is a checklist of what to ask, not legal advice. Have your compliance lead or counsel confirm your own situation.

## Key Takeaways

- An AI vendor that creates, receives, maintains or transmits protected health information (PHI) for your practice is generally a business associate. Confirm this with your counsel.
- Before PHI is shared, 45 CFR 164.502(e) requires satisfactory assurance that the business associate will appropriately safeguard it, recorded in a written contract.
- The Security Rule's technical safeguards cover access control, audit controls, integrity, authentication and transmission security.
- Some safeguards are labelled "addressable", which means you must assess them and document your decision, not that you can ignore them.
- Ask where the data is stored, whether it is used to train models, who can see conversations and how a breach would be reported.

## Why Does Patient Data Make AI Assistants Different?

A dental AI assistant is useful because it handles patient conversations: booking, rescheduling, insurance questions and reminders. Every one of those conversations can contain a name, a phone number, a treatment or a payment detail. That is the information HIPAA protects, so choosing the assistant is partly a data-protection decision.

## Do You Need a Business Associate Agreement?

If the vendor will create, receive, maintain or transmit PHI for you, HIPAA generally treats it as a business associate. Under [45 CFR 164.502(e)](https://www.law.cornell.edu/cfr/text/45/164.502), a covered entity must obtain "satisfactory assurance that the business associate will appropriately safeguard the information" before disclosing PHI, and those assurances must be documented in a written contract that meets 45 CFR 164.504(e). In practice that contract is the business associate agreement (BAA).

Whether a specific tool counts is a legal question about how it handles data. If a vendor will not sign a BAA but wants access to patient data, treat that as a stop sign.

## What Technical Controls Should the System Have?

The Security Rule's technical safeguards, in [45 CFR 164.312](https://www.law.cornell.edu/cfr/text/45/164.312), name five standards. Here is what to ask for each:

| Standard | What to ask the vendor |
|---|---|
| Access control | Does every user have a unique ID? Can access be limited by role? Is there an automatic logoff? |
| Audit controls | Are actions on patient data recorded, and can you review the log? |
| Integrity | How is patient data protected from improper change or deletion? |
| Person or entity authentication | How does the system confirm that a user or connected system is who it claims to be? |
| Transmission security | Is data encrypted as it moves between the patient, the assistant and your systems? |

Under the rule, unique user identification and an emergency access procedure are required. Others, such as encryption and automatic logoff, are "addressable". Addressable means you assess whether the measure is reasonable for your practice and document the decision. It does not mean optional.

## What Else Should You Ask Before You Sign?

- **Where is the data stored,** and in which country?
- **Is patient data used to train the vendor's models?** Get the answer in writing.
- **Who at the vendor can read conversations,** and is that access logged?
- **How long is data kept,** and can it be deleted when you leave?
- **What happens in a breach?** Ask how fast you would be told and who is responsible for what.
- **Can the assistant hand off to a human?** Clinical or sensitive questions should never be answered by guesswork.

## How Should a Practice Start Safely?

1. Begin with tasks that need little PHI, such as opening hours, directions and general service questions.
2. Add scheduling only once the BAA is signed and the controls above are confirmed.
3. Test the assistant with fictional patients before real ones.
4. Review the logs weekly for the first month.
5. Write down who owns compliance for the tool, and review it at least yearly.

## The Takeaway

An AI assistant can take routine calls off your front desk, but only if the data side is handled first. Get the BAA signed, ask for the controls in the table, and start small. If a vendor cannot answer these questions plainly, keep looking.

For one example of a dental assistant in development, see [how Zunkiree Labs is building Dental AI Assistant](/resources/dental-ai-case-study/). It is a private beta, and this checklist applies to it as it would to any vendor.

## Frequently Asked Questions

### Does an AI dental assistant have to be HIPAA compliant?

If it creates, receives, maintains or transmits protected health information for a US practice, HIPAA generally applies to the vendor as a business associate, and the practice needs a written agreement and appropriate safeguards. Confirm your own situation with counsel.

### What is a business associate agreement (BAA)?

A BAA is the written contract through which a vendor gives a covered entity satisfactory assurance that it will appropriately safeguard protected health information, as required by 45 CFR 164.502(e) and 164.504(e).

### Can an AI assistant be used without sharing patient data?

Yes. A first version can answer general questions such as opening hours and services without touching PHI. Add scheduling only after the agreement and controls are in place.

### What does addressable mean in the HIPAA Security Rule?

Addressable does not mean optional. You assess whether the measure is reasonable and appropriate for your practice, implement it or an equivalent alternative, and document the decision.

### What should I ask an AI vendor about patient data?

Ask where data is stored, whether it trains the vendor's models, who can read conversations, how long data is kept, how breaches are reported and whether a human can take over.

## Related Insights

- [What Is a Dental AI Virtual Assistant?](/blog/what-is-a-dental-ai-virtual-assistant/)
- [How to Choose a Virtual Assistant for Healthcare](/blog/how-to-choose-a-virtual-assistant-for-healthcare/)

## Sources

- Legal Information Institute, [45 CFR 164.502, Uses and disclosures of protected health information: general rules](https://www.law.cornell.edu/cfr/text/45/164.502).
- Legal Information Institute, [45 CFR 164.312, Technical safeguards](https://www.law.cornell.edu/cfr/text/45/164.312).

<script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Does an AI dental assistant have to be HIPAA compliant?", "acceptedAnswer": {"@type": "Answer", "text": "If it creates, receives, maintains or transmits protected health information for a US practice, HIPAA generally applies to the vendor as a business associate, and the practice needs a written agreement and appropriate safeguards. Confirm your own situation with counsel."}}, {"@type": "Question", "name": "What is a business associate agreement (BAA)?", "acceptedAnswer": {"@type": "Answer", "text": "A BAA is the written contract through which a vendor gives a covered entity satisfactory assurance that it will appropriately safeguard protected health information, as required by 45 CFR 164.502(e) and 164.504(e)."}}, {"@type": "Question", "name": "Can an AI assistant be used without sharing patient data?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. A first version can answer general questions such as opening hours and services without touching PHI. Add scheduling only after the agreement and controls are in place."}}, {"@type": "Question", "name": "What does addressable mean in the HIPAA Security Rule?", "acceptedAnswer": {"@type": "Answer", "text": "Addressable does not mean optional. You assess whether the measure is reasonable and appropriate for your practice, implement it or an equivalent alternative, and document the decision."}}, {"@type": "Question", "name": "What should I ask an AI vendor about patient data?", "acceptedAnswer": {"@type": "Answer", "text": "Ask where data is stored, whether it trains the vendor's models, who can read conversations, how long data is kept, how breaches are reported and whether a human can take over."}}]}</script>
