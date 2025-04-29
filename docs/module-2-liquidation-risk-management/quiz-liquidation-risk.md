---
title: "Quiz: Liquidation Risk Management"
---

# Quiz: Liquidation Risk Management

Test your understanding of Compound v3’s liquidation mechanics and risk tools.

---

<details>
<summary>1. What condition triggers a liquidation in Compound v3?</summary>

**Answer:** When **Debt > Collateral Value × Collateral Factor** (i.e., LTV reaches or exceeds the liquidation threshold), the position becomes eligible for liquidation.
</details>

---

<details>
<summary>2. In the liquidation process, what incentive does a liquidator receive?</summary>

**Answer:** The liquidator repays part of the borrower’s debt and receives an equivalent value of collateral **plus a liquidation bonus** (e.g., 5–10% extra collateral) as an incentive.
</details>

---

<details>
<summary>3. How does market volatility affect your liquidation risk?</summary>

**Answer:** If your collateral’s price drops, your **LTV increases** (debt stays constant for stablecoin debt), moving you closer to or above the liquidation threshold; rapid crashes can trigger liquidations before you can react.
</details>

---

<details>
<summary>4. Name two early-warning tools you can use to monitor your Compound v3 position.</summary>

**Answer:**  
1. **Portfolio trackers** (e.g., DeBank, Zapper) for dashboard alerts.  
2. **Automation platforms** (e.g., DeFi Saver) or **on-chain monitors** (e.g., Forta) to send notifications or automatically execute self-liquidation.
</details>

---

<details>
<summary>5. What is “close factor,” and how does it protect borrowers?</summary>

**Answer:** The **close factor** caps the **maximum percentage** of outstanding debt a liquidator can repay in a single transaction (e.g., 50%), preventing a single liquidation from seizing all collateral at once and giving borrowers partial recovery opportunities.
</details>
