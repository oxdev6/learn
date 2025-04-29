
---
title: "Quiz: Security Tools"
---

# Quiz: Security Tools

Test your understanding of DeFi defense tools, from hardware wallets to transaction simulation.

---

<details>
<summary>1. Why are hardware wallets considered a critical defense layer in DeFi?</summary>

**Answer:**  
Hardware wallets store private keys offline, isolating them from malware, phishing sites, and browser attacks. They ensure transactions are signed within the device itself, preventing key leaks even if your connected computer is compromised.
</details>

---

<details>
<summary>2. What is one major limitation of simply trusting that a smart contract’s source code is verified on Etherscan?</summary>

**Answer:**  
Verification only confirms the source matches the deployed bytecode — it doesn’t guarantee the code is safe. Hidden vulnerabilities, backdoors, and risky upgrade patterns can still exist even if a contract is verified.
</details>

---

<details>
<summary>3. How can Tenderly simulations help prevent interaction with malicious contracts?</summary>

**Answer:**  
Tenderly simulates the entire transaction execution path, revealing internal calls, storage changes, and emitted events. This allows users to catch hidden fund transfers, unexpected approvals, or selfdestruct calls before signing a transaction on-chain.
</details>

---

<details>
<summary>4. Why is it risky to leave unlimited token approvals for DeFi protocols?</summary>

**Answer:**  
If a contract you approved becomes malicious (or gets hacked), it can instantly drain your entire token balance without requiring further permissions. Unlimited approvals leave a permanent attack vector open.
</details>

---

<details>
<summary>5. What advantage does batch revoking on Revoke.cash offer to DeFi power users?</summary>

**Answer:**  
Batch revoking lets users clear multiple token allowances in a **single transaction**, saving gas and time. This is especially useful after participating in DeFi farming, airdrops, or interacting with multiple protocols.
</details>

---

