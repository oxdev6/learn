---
title: "Quiz: Safe Borrowing Practices"
---

# Quiz: Safe Borrowing Practices

Test your understanding of safe borrowing on Compound v3.

---

<details>
<summary>1. If ETH has a collateral factor of 80% and you supply 1 ETH worth $2,000, what’s the maximum amount of USDC you could borrow?</summary>

**Answer:** You could borrow up to 80% of \$2,000, which is **\$1,600**.
</details>

---

<details>
<summary>2. Why is it recommended to borrow significantly less than the protocol’s maximum allowed amount?</summary>

**Answer:** Borrowing below the maximum creates a **safety buffer** that protects against market volatility. If asset prices drop, a buffer reduces the risk of hitting the liquidation threshold, avoiding penalties and potential loss of collateral.
</details>

---

<details>
<summary>3. Describe what happens when a user repeatedly borrows and redeposits in a recursive borrowing loop, and why it’s risky.</summary>

**Answer:** A recursive loop amplifies both potential gains and losses. Each cycle increases debt and collateral, reducing the safety buffer. A modest price drop can push the position past liquidation, causing penalties and collateral loss.
</details>

---

<details>
<summary>4. If your Compound dashboard shows you’ve used 90% of your borrow limit, what two actions can you take to reduce your liquidation risk?</summary>

**Answer:**  
1. **Add more collateral** to raise your borrow limit.  
2. **Repay part of your debt** to lower your borrow usage.
</details>

---

<details>
<summary>5. What does “self-liquidation” mean, and how does it differ from a forced liquidation?</summary>

**Answer:** Self-liquidation is proactively repaying debt or adding collateral to reduce borrow usage before hitting the liquidation threshold. It differs from forced liquidation in that you choose the timing and amount, avoiding penalties and fire-sale prices imposed by liquidators.
</details>
