---
title: "Borrow Limits & Self-Liquidation"
---

<!-- Borrow Limits & Self-Liquidation Icon -->
![Borrow Limits & Self-Liquidation Icon](/img/borrow-limits-and-self-liquidation-icon.svg)

# Borrow Limits & Self-Liquidation

In Compound v3, the **Borrow Limit** shows the maximum amount you can safely borrow against your collateral. Staying well below this limit—and proactively reducing your position—is key to avoiding forced liquidations.

---

## Borrow Limits

- **Definition:**  
  Borrow Limit = Collateral Value × Collateral Factor  
- **Usage Indicator:** In the UI, this appears as a percentage meter (e.g., “60% used”).  
- **Best Practice:** Treat the protocol’s maximum as an absolute cap. Maintain a personal cap (e.g., **75% of the limit**) to give yourself breathing room.

---

## Self-Liquidation

**Self-liquidation** means taking proactive steps to reduce your borrow usage before reaching the liquidation threshold. This often involves repaying part of your debt or adding collateral.

### Why Self-Liquidate?

- **Avoid Penalties:** Liquidators seize collateral at a discount, costing you extra.  
- **Maintain Control:** You choose the timing and amount—rather than being forced.  
- **Preserve Value:** Selling collateral at better market prices than liquidators’ fire-sale rates.

---

## How to Self-Liquidate

1. **Monitor Usage:** Set alerts for when borrow usage exceeds your personal cap (e.g., 60%).  
2. **Add Collateral:** Deposit more of your existing collateral asset to increase your borrow limit.  
3. **Repay Debt:**  
   - Swap a portion of collateral for the borrowed asset (e.g., ETH → USDC).  
   - Repay that amount on Compound to lower your usage.  
4. **Use “Repay with Collateral” (if available):** Some UIs/third-party tools let you repay directly from collateral in one transaction.

---

## Practical Example

- **Position:** 1 ETH collateral ($2 000), CF = 75 % → limit $1 500  
- **Borrowed:** $1 000 USDC → 67 % usage  
- **Alert Trigger:** Usage hits 70 %  
- **Self-Liquidation Action:**  
  - Withdraw 0.1 ETH (~$200) → swap to USDC → repay $200  
  - New usage = (800 / 2000) = 40 %

---

## Next Steps

You’ve now learned how to manage your borrow limit and self-liquidate proactively. Next, move on to [Module 2: Liquidation Risk Management](/docs/module-2-liquidation-risk-management/how-liquidations-work) to deepen your understanding of Compound’s liquidation mechanics and risk tools.