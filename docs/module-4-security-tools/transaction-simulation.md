
---
title: "Transaction Simulation & Pre-Transaction Inspection"
---

<!-- Transaction Simulation Icon -->
![Transaction Simulation Icon](/img/transaction-simulation-icon.svg)

# Transaction Simulation & Pre-Transaction Inspection

Before signing any on-chain transaction, it’s vital to **simulate and inspect** exactly what will happen. Transaction previews are your last line of defense against scams, drainers, and accidental mistakes.

---

## Why Simulate Transactions?

- **Hidden Functionality:** Malicious contracts can mask draining actions inside harmless-looking UI screens.
- **Accidental Risk:** Even legitimate apps might send unexpected calls without clear warning.
- **Gas and Fees Visibility:** See true gas costs and side effects before committing funds.

---

## Core Simulation Methods

### 1. Wallet Previews

- **MetaMask Simulation:** MetaMask displays a summary of balance changes and function names.
- **Limitations:**  
  - Only shows superficial details.  
  - Complex internal calls (multicalls, delegatecalls) may not be fully visible.

---

### 2. Advanced Simulation Tools

Use dedicated simulators to inspect complete transaction flows:

- **Tenderly Simulation:**  
  - Paste transaction hex and simulate state changes.  
  - Shows contract storage diffs, emitted events, and internal call trees.
- **Rabby Wallet:**  
  - Transaction simulation built into the wallet UI.  
  - Detects if an approval also triggers hidden `transferFrom()` calls.
- **DeBank Simulation:**  
  - Preview expected token balance changes post-transaction.

---

### 3. Manual Dry-Run on Forked Network

For high-value transactions, simulate manually on a mainnet fork:

```bash
npx hardhat node --fork https://mainnet.infura.io/v3/YOUR_INFURA_KEY
```

- Impersonate your address:
  ```javascript
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: ["0xYourAddress"]
  });
  ```
- Send the transaction manually and review resulting changes:
  - Token balances
  - Smart contract storage
  - Emitted events

This is the closest method to a real-world “testnet” for your personal transaction.

---

## Red Flags During Simulation

| Red Flag | What It Means |
|:---|:---|
| Unauthorized Token Transfers | Contract could steal your tokens after approval |
| Unexpected State Changes | Contract modifies storage beyond what you intended |
| Selfdestruct Call | Contract destroys itself, seizing attached funds |
| Approve & Transfer in Same Tx | Classic drainer exploit |

Always investigate unexpected behavior before proceeding.

---

## Tools Summary

- **Tenderly** — Full transaction simulation with internal call tree.
- **Rabby Wallet** — Inline simulation and risk alerting.
- **DeBank** — Basic post-tx balance prediction.
- **Hardhat / Foundry** — Local fork simulation for technical users.

---

## Conclusion

Transaction simulation transforms signing from **guesswork** into **knowledge**.  
When every transaction is simulated beforehand, your odds of getting phished, drained, or rug-pulled drop dramatically.

Even one saved transaction justifies the effort.

---

## Next Steps

After mastering simulation, move to **[Module 4.4: Revoke.cash Guide & Managing Approvals](/docs/module-4-security-tools/revoke-cash-guide)** to clean up risky allowances and harden your wallet even further.

---

