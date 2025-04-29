---
title: "Early Warning Tools"
---

<!-- Early Warning Tools Icon -->
![Early Warning Tools Icon](/img/early-warning-tools-icon.svg)

# Early Warning Tools for Compound v3 Positions

Proactive monitoring and timely alerts are crucial to avoid forced liquidations. Here are key tools and methods:

---

## 1. Protocol Built-In Alerts

- **Compound Interface**: Some deployments offer email or on-screen notifications when your borrow usage or health factor crosses thresholds.  
- **Setup**: Check your account settings in the Compound app to enable any available alerts.

---

## 2. Portfolio Trackers

- **Examples**: DeBank, Zapper, Zerion  
- **Features**:  
  - Real-time dashboard of collateral, debt, and health factor  
  - Customizable alerts when your metrics exceed safe limits  

---

## 3. Automation Platforms

- **Tools**: DeFi Saver, InstaDapp  
- **Capabilities**:  
  - Automated self-liquidation (repay or add collateral based on triggers)  
  - Push or email notifications on events  

---

## 4. Custom Scripts & On-Chain Monitors

- **Forta**: Deploy or use existing agents to watch your address for under-collateralization and send alerts.  
- **Web3 Scripts**: Write simple polling scripts (ethers.js/web3.js) to check your position and notify via Telegram, SMS, or email.

---

## 5. Price Alerts

- **Crypto Apps**: CoinGecko, CoinMarketCap, TradingView  
- **Use Case**: Set alerts for your collateral asset’s price levels that correspond to your LTV safety thresholds.

---

## Next Steps

Test your alert setup in a safe environment, practice a self-liquidation drill, and then challenge yourself with the **[Quiz: Liquidation Risk Management](/docs/module-2-liquidation-risk-management/quiz-liquidation-risk)**.
