
title: "How Liquidations Work"

<!-- Liquidation Icon -->
![Liquidation Icon](/img/how-liquidations-work-icon.svg)

# How Liquidations Work in Compound v3

Compound v3 uses an automated liquidation mechanism to protect the protocol from under-collateralized loans. When a borrower’s collateral value falls too low relative to their debt, liquidators can repay part of the loan and seize collateral at a bonus.

---

## Liquidation Threshold

- **Definition:** The collateral value / debt ratio at which liquidation becomes possible.  
- **Trigger:** If `Debt > Collateral Value × Collateral Factor`, the position is liquidatable.

---

## Liquidation Process

1. **Detection:** Price oracles update market prices; under-collateralized positions are flagged.  
2. **Liquidator Action:** A liquidator transaction repays a portion of the debt (up to the close factor).  
3. **Collateral Seizure:** Liquidator receives collateral at a discount (liquidation incentive).  
4. **Partial vs. Full Liquidation:** Typically partial; multiple repayments may occur until the position is healthy or collateral is exhausted.

---

## Liquidation Incentive & Close Factor

- **Liquidation Incentive:** Bonus paid to liquidators for seizing collateral (e.g., 5-10% extra).  
- **Close Factor:** Maximum percentage of outstanding debt a liquidator can repay in a single transaction (protects borrowers).

---

## Example Workflow

- **Before Decline:** Collateral = $10,000, Debt = $7,000 (70% LTV), CF = 75% → safe.  
- **After Decline:** Collateral drops to $9,000 → max borrowable = $9,000 × 75% = $6,750 → Debt ($7,000) > Limit.  
- **Liquidation:**  
  - Liquidator repays $2,000 debt.  
  - Liquidator receives $2,100 collateral (5% incentive).  
  - Borrower’s new position: Collateral = $6,900, Debt = $5,000, now under threshold.

---

## Next Steps

Proceed to **[Module 2.2: Impact of Market Volatility](/docs/module-2-liquidation-risk-management/impact-of-volatility)** to understand how price swings affect your position and strategies to manage that risk.  

Let me know once this page renders correctly, and we’ll continue with Module 2.2!