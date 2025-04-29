---
title: Collateralization
---

<!-- Collateralization Icon -->
![Collateralization Icon](/img/collateralization-icon.svg)

# Understanding Collateralization in Compound v3

Compound v3 (also called “Comet”) requires you to over-collateralize your loans to protect the protocol and other users. Here’s how it works:

---

## Collateral Factors

**Definition**  
Each asset you supply as collateral has a **Collateral Factor** (CF).

**Meaning**  
A CF of **75 %** means you can borrow up to 75 % of your collateral’s USD value.

**Calculation Example**  
- You supply **1 ETH** valued at **$2,000**  
- ETH’s CF is **75 %**  
- **Max borrowable** = $2,000 × 75 % = **$1,500**

---

## Loan-to-Value (LTV) Ratio

**Definition**  
The ratio of your outstanding debt to your collateral value.

**Formula**
```text
LTV = Borrowed Amount / Collateral Value
```

**Safety Buffer**  
Aim to borrow only part of the maximum. If CF is 75 %, consider using **50 – 60 % LTV**.

**Example**  
- Collateral Value: **$2,000**  
- Borrowed: **$1,000**  
- LTV = $1,000 / $2,000 = **50 %**  
- Since 50 % < 75 % CF, this position is safe.

---

## Health Factor & Liquidation Threshold

**Health Factor (HF)**  
A metric showing position safety.

**Formula**
```text
HF = (Collateral Value × CF) / Debt
```
- **HF > 1** → Position is safe  
- **HF ≤ 1** → At risk of liquidation  

**Liquidation Threshold**  
Usually equal to the CF. If your debt reaches the maximum allowed, liquidators can repay part of your debt and seize your collateral at a penalty.

**Example**  
- Collateral: **$2,000**  
- CF: **75 %**  
- Allowed Borrow: **$1,500**  
- Debt: **$1,500**  
- HF = (2000 × 0.75) / 1500 = **1.0** → At risk of liquidation.

---

## Practical Tips

1. **Borrow Conservatively** – target **50 – 60 % LTV**, not the full CF.  
2. **Account for Volatility** – more-volatile assets → use a lower LTV.  
3. **Monitor Regularly** – check daily or set alerts when **LTV > 65 %**.  
4. **Use Alert Tools** – portfolio trackers (e.g., DeBank, Zapper) can notify you when your LTV approaches danger.

---

## Next Steps

Proceed to **[Module 1.2: Over-Leveraging](/docs/module-1-safe-borrowing-practices/over-leveraging)** to learn how borrowing loops amplify risk and how to avoid them.
