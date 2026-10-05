# How AI and Transaction Data Are Changing Fraud Detection

URL: https://zunkireelabs.com/blog/how-ai-and-transaction-data-are-changing-fraud-detection/
Published: 2026-10-05
Summary: AI now scores payments for fraud. The US Treasury and a BIS pilot report gains, but false declines and deepfakes limit it. What the evidence shows.

**In short:** Payment fraud detection works by scoring each transaction for risk with a machine-learning model, then blocking, challenging or flagging the risky ones. The evidence is encouraging but mixed. The US Treasury reports that its risk-based screening and machine-learning tools helped prevent or recover over $4 billion in fiscal 2024, and a BIS and Bank of England experiment found 12% more illicit accounts on simulated data. Yet wrongly declined customers, deepfake-enabled identity fraud and explainability rules show why AI works best as one layer alongside rules and human review.

## Key Takeaways

- The US Treasury announced prevention and recovery of over $4 billion in fraud and improper payments in fiscal 2024, up from $652.7 million the year before. Only part of that, $1 billion in recovered check fraud, is attributed to machine learning.
- Project Hertha, from the BIS Innovation Hub and the Bank of England (June 2025), found 12% more illicit accounts and a 26% improvement on novel patterns, using a synthetic dataset.
- Blocking genuine customers is costly. Older analyst estimates cited in a 2022 paper put wrongly declined US sales far above actual card fraud losses.
- Criminals use AI too: FinCEN warned in November 2024 about deepfake media used to defeat identity checks.
- In Nepal, digital payments have grown quickly, and the central bank has flagged weaknesses in customer verification and cyber controls at payment firms.

## The Evidence: What Do the Reports Show?

Two official sources anchor this article. The first is [Project Hertha](https://www.bis.org/publ/othp96.htm), published on June 5, 2025 by the BIS Innovation Hub's London Centre with the Bank of England. The project applied modern AI techniques to payment system data to spot complex, coordinated criminal activity that spans several institutions. It reports that payment system analytics helped banks and payment service providers find 12% more illicit accounts than they would otherwise have found, and delivered a 26% improvement when spotting novel crime patterns. The experiment used a synthetic dataset of 1.8 million bank accounts and 308 million transactions, generated with AI models so that no real customer data was used.

The second is a [US Treasury press release of October 17, 2024](https://home.treasury.gov/news/press-releases/jy2650). Treasury said it had prevented and recovered over $4 billion in fraud and improper payments in fiscal year 2024, against $652.7 million in fiscal 2023. Its Office of Payment Integrity attributed this to several measures: $500 million from expanded risk-based screening, $2.5 billion from identifying high-risk transactions, $1 billion in recovery tied to machine-learning detection of Treasury check fraud, and $180 million from payment processing efficiencies. These are Treasury's own figures, and the machine-learning share is the $1 billion recovery, not the whole total.

## What Does the Technology Do?

The chain from data to alert is easy to describe:

1. **Transactions in.** Each payment arrives with its amount, merchant, device, location, timing and the customer's history.
2. **Model.** A machine-learning classifier, trained on examples of genuine and fraudulent transactions, assigns a suspiciousness score. Network methods like those in Project Hertha also look at how accounts connect across a payment system.
3. **Decision out.** Transactions above a threshold are declined, challenged for extra verification, or sent to a human analyst. In practice a model usually sits alongside a set of blocking rules.

Where the threshold is set decides the trade-off: lower it and more fraud is caught, but more genuine customers are stopped.

## What Changed?

Fixed rule lists can miss fraud that changes shape. The Project Hertha result is that looking across a whole payment system, rather than one bank's view, helped surface accounts that conventional methods missed, and it did best on previously unseen patterns. The Treasury case shows the same shift in a very large payment system, where, by its own account, risk-based screening and high-risk transaction identification now decide which payments get a closer look.

## Who Benefits?

Banks and payment firms gain earlier detection and fewer losses. Public bodies protect public money, as in the Treasury example. Customers benefit when genuine payments go through and fraudulent ones are stopped before money leaves, though the sources above do not measure customer outcomes directly.

## Limitations and Open Questions

**False positives are expensive.** A 2022 paper by Florian Wallny, [False Positives in Credit Card Fraud Detection: Measurement and Mitigation](https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/d58f6516-cd87-4048-ab46-6cbb0ca8c325/content), notes that analysts reported false positive rates of 30-70% in e-commerce fraud prediction. It cites an analyst estimate that US card fraud cost about $9 billion in 2014 while about $118 billion of sales, 3% of US retail, were wrongly declined, and that 26% of surveyed customers reduced card use and 32% abandoned the card after a false decline. These are older, analyst-sourced figures, not current measurements. The paper's own result is that an ensemble of classifiers cut fraud cost by almost 30% in its cost-based evaluation, which shows model choice matters.

**Attackers adapt.** [FinCEN's alert FIN-2024-Alert004](https://www.fincen.gov/system/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf), issued November 13, 2024, says it has observed an increase in suspicious activity reports describing suspected use of deepfake media, created with generative AI, in fraud schemes. Criminals use it to alter or create fraudulent identity documents and circumvent verification and authentication methods.

**It is not a standalone solution.** Project Hertha's authors say payment system analytics could be a valuable supplementary tool and that success requires labelled training data, a robust model feedback loop and explainable AI algorithms. They add that real implementation raises complex practical, legal and regulatory issues. Hertha's data was also synthetic, so real-world performance is untested.

**Explainability and rules.** Under the EU AI Act, [Annex III](https://artificialintelligenceact.eu/annex/3/) classes AI used to evaluate the creditworthiness of people as high-risk but excludes AI used for detecting financial fraud. That does not remove other obligations, such as data protection law or financial-sector rules, and a customer wrongly blocked still needs a clear explanation and a way to appeal.

## Does This Matter in Nepal?

Digital payments in Nepal have grown quickly. An analysis by Dipesh Ghimire, citing Nepal Rastra Bank data, reports about 26.76 million mobile-wallet users and 27.74 million mobile banking customers as of mid-July 2025, and a 92.5% rise in QR-based transactions in fiscal 2024/25. The same article reports that the central bank's inspections of 16 licensed payment institutions in 2024/25 found customers whose identity verification had not been completed, plus cybersecurity and settlement-account gaps. The article is a secondary summary, so read the central bank's own report for specifics. The practical point is that detection models depend on solid customer verification and clean data. For background on the local landscape see [AI adoption trends in Nepal for 2026](/blog/state-of-ai-nepal-2026/).

## What Happens Next?

Expect more cross-institution analysis, if privacy and legal questions can be solved, as Project Hertha suggests. Expect attackers to keep using generative AI, so identity checks will keep changing. For any organisation using fraud models, the sensible questions are: how many genuine customers are blocked, how are decisions explained and appealed, how often is the model retrained on new fraud, and who reviews borderline cases. Agentic AI that acts on payments raises the same control questions, covered in our piece on [AI agents and their infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/) and in [what businesses should do about rogue agents](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/).

## The Short Version

AI helps find fraud that fixed rules miss, and official reports show real gains. But the strongest numbers come from a simulation and from a government's own reporting, false declines carry a real cost, and criminals now use AI too. Treat fraud models as one layer in a system with human review, clear explanations and constant retraining.

## FAQ

**Can AI really detect payment fraud better than rules?**
In tests and official reports, it can add to rules. A BIS Innovation Hub and Bank of England experiment on a synthetic dataset of 1.8 million accounts and 308 million transactions found 12% more illicit accounts, and a 26% improvement on previously unseen crime patterns. The authors call it a supplementary tool, not a standalone solution, and the data was simulated.

**What is a false positive in fraud detection and why does it matter?**
A false positive is a genuine transaction wrongly flagged or declined. A 2022 academic paper cites analyst estimates that US card fraud losses in 2014 were about $9 billion, while about $118 billion of sales were wrongly declined, and that 26% of surveyed customers used a card less after a false decline. Those are older, analyst-sourced figures, but they show why blocking too much has a real cost.

**Does AI also help criminals commit fraud?**
Yes. In November 2024 the US Financial Crimes Enforcement Network (FinCEN) reported an increase in suspicious activity reports describing suspected use of deepfake media, created with generative AI, to defeat identity verification. Fraud detection therefore has to keep adapting as attackers use the same technology.

**Is AI fraud detection treated as high-risk under the EU AI Act?**
Not for fraud detection itself. Annex III of the EU AI Act lists AI systems that evaluate the creditworthiness of people as high-risk, but it excludes systems used for the purpose of detecting financial fraud. Other rules, such as data protection and sector regulation, can still apply, so check with a legal adviser.

## Related Insights

- [AI Adoption Trends in Nepal for 2026: Key Insights](/blog/state-of-ai-nepal-2026/)
- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [EU AI Act: What Applies Now and What Was Delayed](/blog/eu-ai-act-what-applies-now-and-what-was-delayed/)
- [Why AI Matters for Nepal: What the Evidence Shows](/blog/why-ai-matters-for-nepal-what-the-evidence-shows/)

## Sources

- BIS Innovation Hub and Bank of England, [Project Hertha: Identifying Financial Crime Patterns in Real-Time Retail Payment Systems](https://www.bis.org/publ/othp96.htm), June 5, 2025
- U.S. Department of the Treasury, [Treasury press release on fraud prevention and recovery in fiscal year 2024 (jy2650)](https://home.treasury.gov/news/press-releases/jy2650), October 17, 2024
- F. Wallny, [False Positives in Credit Card Fraud Detection: Measurement and Mitigation](https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/d58f6516-cd87-4048-ab46-6cbb0ca8c325/content), Proceedings of the 55th Hawaii International Conference on System Sciences, 2022
- FinCEN, [FinCEN Alert on Fraud Schemes Involving Deepfake Media (FIN-2024-Alert004)](https://www.fincen.gov/system/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf), November 13, 2024
- EU Artificial Intelligence Act, [Annex III, point 5(b)](https://artificialintelligenceact.eu/annex/3/)
- D. Ghimire, [Nepal's digital payments surge but weak KYC and cyber controls raise risks](https://nepsetrading.com/blog/nepals-digital-payments-surge-but-weak-kyc-and-cyber-controls-raise-risks), 2025 (secondary summary of Nepal Rastra Bank inspection findings)
