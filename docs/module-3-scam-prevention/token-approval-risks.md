---
title: "Token Approval Risks"
---

<!-- Token Approval Risks Icon -->
![Token Approval Risks Icon](/img/token-approval-risks-icon.svg)

# Token Approval & Allowance Risks

Granting token approvals gives contracts permission to move your ERC-20 tokens. Unlimited allowances pose major security risks.

---

## Unlimited Approvals

Wallets often default to **“infinite” token approvals** (2^256-1).  
If a malicious or compromised contract holds an unlimited allowance, it can drain your entire token balance at any time.

---

## How Scams Exploit Allowances

1. **Ice Phishing**  
   Scammers send a fake token and trick you into approving it; the malicious contract then drains your real tokens.  
2. **Fake Airdrops**  
   You “claim” free tokens and unknowingly grant a scam contract infinite approval, enabling fund theft.

---

## Best Practices

1. **Limit Allowance**  
   Approve only the exact amount needed for your transaction, not unlimited.  
2. **Review & Revoke**  
   Regularly audit and revoke old allowances using tools like [Revoke.cash](/resources) or Etherscan’s Token Approval Checker.  
3. **Use Separate Wallets**  
   Keep a hot wallet with minimal funds for DeFi interactions; store larger balances in a separate, more secure wallet.

---

## Tools for Managing Approvals

- **Revoke.cash** — Easily review and revoke token allowances.  
- **Etherscan Approval Checker** — Built-in feature to manage your ERC-20 approvals.  
- **Rabby Wallet** — Shows detailed allowance info before you sign a transaction.

---

## Next Steps

Now that you understand token approval risks, test your knowledge in the **[Quiz: Scam Prevention](/docs/module-3-scam-prevention/quiz-scam-prevention)**.
