---
title: "Tenderly – Simulating DeFi Transactions"
---

![Tenderly Simulator Onboarding](/img/gifs/tenderly-signup.gif)

# Tenderly – Simulating DeFi Transactions

**Tenderly** allows users to simulate Ethereum transactions off-chain before signing, ensuring full visibility into gas usage, state changes, and potential risk — without touching real funds.

---

## Step 1: Sign Up and Access the Simulator

Start by visiting [Tenderly.co](https://tenderly.co) and signing up. After logging in:

- Head to your **project dashboard**.
- On the sidebar, select **Simulator** to access the transaction simulator interface.

---

![Running Simulation](/img/gifs/tenderly-transactionsimulation.gif)

## Step 2: Run a Transaction Simulation

- Paste a contract address into the **Simulation** panel.
- Select the network (e.g., Ethereum Mainnet).
- Enter or select a function and input parameters.
- Optionally modify gas settings and block number.
- Click **Simulate** to preview internal call trees, gas usage, emitted events, and storage diffs.

**Why this matters:** You’ll see what your transaction will actually do — before spending gas or exposing assets.

---

## Use Cases

- Previewing DeFi actions like borrowing, supplying, or governance voting.
- Debugging contract interactions in production-like conditions.
- Detecting unexpected balance changes before finalizing a transaction.

**Best for:** Developers, power users, DAO participants.
