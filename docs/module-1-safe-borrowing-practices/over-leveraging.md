---
title: "Over-Leveraging"
---

<!-- Over-Leveraging Icon -->
![Over-Leveraging Icon](/img/over-leveraging-icon.png)

# Over-Leveraging in Compound v3

While borrowing can amplify your returns, **over-leveraging** can quickly lead to liquidation if markets turn against you. Over-leveraging occurs when you borrow too close to your maximum allowed limit or use borrowed funds to mint more collateral in a recursive loop.

---

## What Is Over-Leveraging?

- **Definition:** Taking on more debt relative to your collateral than is prudent, often by repeatedly borrowing and swapping into new collateral deposits.
- **Risk Amplification:** Each cycle of borrowing and redepositing magnifies both potential gains and potential losses.

---

## Example: Recursive Borrowing Loop

1. **Initial Supply:**  
   - Supply 1 ETH at \$2,000; CF = 75% → max borrowable = \$1,500.
2. **First Borrow:**  
   - Borrow \$1,000 USDC (≃67% of max → somewhat safe).
3. **Swap & Redeploy:**  
   - Swap \$1,000 USDC for 0.5 ETH (at \$2,000/ETH).  
   - Deposit additional 0.5 ETH as collateral.
4. **Second Borrow:**  
   - New collateral = 1.5 ETH (\$3,000), max borrowable = \$2,250.  
   - Borrow another \$1,200 USDC.
5. **Cycle Continues:**  
   - Each iteration increases debt and collateral but reduces your safety buffer.  
   - Even a small price drop can push you past the liquidation threshold.

---

## Why It’s Dangerous

- **No Cushion:** Borrowing near your CF leaves little room for price swings.  
- **Interest Costs:** Accrued interest increases your debt over time.  
- **Rapid Liquidation:** A sudden price drop of 10–20% can trigger liquidation across all leveraged layers, causing fire-sale penalties.

---

## How to Avoid Over-Leveraging

1. **Set Internal Limits:** Never exceed **60% of your CF** as a personal cap.  
2. **Avoid Recursive Loops:** Unless you’re an expert, do not borrow and redeposit repeatedly.  
3. **Monitor Borrow Rates:** High pool utilization increases interest rates, raising your HF risk.  
4. **Plan Exits:** Keep some unborrowed collateral or stablecoins handy to unwind positions quickly.

---

## Next Steps

After mastering over-leveraging risks, proceed to **[Module 1.3: Borrow Limits & Self-Liquidation](/docs/module-1-safe-borrowing-practices/borrow-limits-and-self-liquidation)** to learn proactive techniques for avoiding forced liquidations.  
