---
title: "Case Study: Alice vs Bob"
---

<!-- Case Study Illustration -->
![Alice vs Bob Case Study](/img/case-study-alice-bob.svg)

# Case Study: Alice vs Bob

To illustrate the importance of conservative borrowing, let’s compare two users:

---

## Alice (Over-Leveraged)

- **Collateral:** 2 ETH (worth \$4,000)  
- **Collateral Factor (CF):** 75% → Max Borrow = \$3,000  
- **Borrowed:** \$2,800 USDC (≈ 70% LTV)  
- **Market Drop:** ETH price falls 20% → Collateral value drops to \$3,200  
- **Outcome:**  
  - Allowed Borrow now = \$3,200 × 75% = \$2,400  
  - Alice owes \$2,800, exceeding the new limit  
  - Her position is liquidated; she loses collateral plus pays liquidation penalty  

---

## Bob (Conservative)

- **Collateral:** 2 ETH (worth \$4,000)  
- **Collateral Factor (CF):** 75% → Max Borrow = \$3,000  
- **Borrowed:** \$1,500 USDC (37.5% LTV)  
- **Market Drop:** ETH price falls 20% → Collateral value drops to \$3,200  
- **Outcome:**  
  - Allowed Borrow now = \$3,200 × 75% = \$2,400  
  - Bob owes \$1,500, well below the new limit  
  - His position remains safe; he can choose to self-liquidate or hold  

---

## Key Takeaways

- **Don’t Borrow to the Limit:** Leaving a buffer protects against typical market swings.  
- **Conservative LTV:** Borrowing at 50–60% of your limit offers a strong safety margin.  
- **Self-Liquidation Option:** If you’re approaching your threshold, repay early to avoid forced liquidation and penalties.

---

## Next: Quiz

Test your knowledge in **[Quiz: Safe Borrowing Practices](/docs/module-1-safe-borrowing-practices/quiz-safe-borrowing)**.
