---
title: "Smart Contract Scanning & Analysis"
---

<!-- Contract Scanning Icon -->
![Contract Scanning Icon](/img/contract-scanning-icon.svg)

# Smart Contract Scanning & Analysis

Before interacting with any DeFi contract, it’s critical to understand **what** you’re signing and **how** the code behaves. Many hacks exploit trust assumptions, not user mistakes. This section explains **practical methods** to vet smart contracts confidently.

---

## Why Smart Contract Scanning Matters

- **Transparency ≠ Safety:** Even verified source code can hide vulnerabilities.
- **Immutable Risk:** Deployed contracts are nearly impossible to patch.
- **Permissionless Risk:** Anyone, including attackers, can interact with DeFi contracts.

---

## Practical Contract Review Checklist

### 1. Source Code Verification

- **Check Etherscan:** Confirm the “Contract Source Code Verified” badge.
- **Official Confirmation:** Verify contract addresses against Compound’s website or GitHub.
- **Proxy Check:** If the contract uses a proxy pattern, review both the proxy and its implementation address.

---

### 2. Static Analysis

Run lightweight security scans before interacting:

```bash
slither .
```

- Look for high-risk patterns:
  - Unchecked external calls
  - Reentrancy vulnerabilities
  - Unprotected admin functions

For cloud-based scanning, use **MythX** through Remix IDE or API tools.

---

### 3. Code Audit Review

- **Audit Existence:** Confirm whether a reputable firm audited the contract.
- **Changelog Scrutiny:** If any post-audit changes exist, treat them as **unaudited** risk areas.

---

### 4. Deploy Simulation (Mainnet Fork)

Use Hardhat to simulate live contract interactions safely:

```bash
npx hardhat node --fork https://mainnet.infura.io/v3/YOUR_INFURA_KEY
```

- Deploy the contract on a fork.
- Run transactions like `borrow()`, `repay()`, and `withdraw()`.
- Verify all state changes match expectations without surprises.

---

### 5. Critical Functions to Inspect

| Function | Why It's Critical | What to Check |
|:---|:---|:---|
| `delegatecall()` | Arbitrary code execution | Properly scoped and protected |
| `upgradeTo()` | Proxy manipulation | Restricted to multisig or timelock |
| `mint()` / `burn()` | Token supply control | Hardcoded rules or governance gated |
| `selfdestruct()` | Contract destruction | Disabled in production |

---

## Tools for Smart Contract Security

- **Slither** — CLI static analysis tool
- **MythX** — Automated cloud vulnerability scanner
- **Tenderly** — Transaction simulation and debugging platform
- **Forta** — Realtime smart contract event monitoring
- **Foundry** — Local chain forking and fuzz-testing suite

---

## Common Red Flags

- Upgradeable proxies with missing access control
- Use of `tx.origin` instead of `msg.sender`
- Sparse documentation and minimal testing coverage

These are signals of rushed deployments or hidden risks.

---

## Example: Verifying a New Compound v3 Market

1. Confirm contract source is verified on Etherscan.
2. Check if the contract matches addresses listed on official Compound repositories.
3. Run `slither` locally and review findings.
4. Fork mainnet and simulate basic user flows.
5. Subscribe to Forta alerts for proxy upgrades or suspicious events.

---

## Conclusion

Smart contract scanning isn’t reserved for experts.  
Spending just **30–60 minutes** running basic verifications dramatically improves your security posture and keeps your DeFi activity safe from 90% of opportunistic exploits.

---

## Next Steps

Move forward to **[Module 4.3: Transaction Simulation & Pre-Transaction Inspection](/docs/module-4-security-tools/transaction-simulation)** to learn how to predict exactly what your transactions will do before signing them.

---


