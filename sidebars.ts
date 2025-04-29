import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction', // docs/introduction.md

    {
      type: 'category',
      label: 'Module 1: Safe Borrowing Practices',
      items: [
        'module-1-safe-borrowing-practices/collateralization',
        'module-1-safe-borrowing-practices/over-leveraging',
        'module-1-safe-borrowing-practices/borrow-limits-and-self-liquidation',
        'module-1-safe-borrowing-practices/case-study-alice-bob',
        'module-1-safe-borrowing-practices/quiz-safe-borrowing',
      ],
    },

    {
      type: 'category',
      label: 'Module 2: Liquidation Risk Management',
      items: [
        'module-2-liquidation-risk-management/how-liquidations-work',
        'module-2-liquidation-risk-management/impact-of-volatility',
        'module-2-liquidation-risk-management/early-warning-tools',
        'module-2-liquidation-risk-management/quiz-liquidation-risk',
      ],
    },

    {
      type: 'category',
      label: 'Module 3: Scam Prevention',
      items: [
        'module-3-scam-prevention/phishing-and-fake-sites',
        'module-3-scam-prevention/malicious-contracts',
        'module-3-scam-prevention/impersonation-scams',
        'module-3-scam-prevention/token-approval-risks',
        'module-3-scam-prevention/quiz-scam-prevention',
      ],
    },

    {
      type: 'category',
      label: 'Module 4: Security Tools & Best Practices',
      items: [
        'module-4-security-tools/hardware-wallets',
        'module-4-security-tools/contract-scanning',
        'module-4-security-tools/transaction-simulation',
        'module-4-security-tools/revoke-cash-guide',
        'module-4-security-tools/scamsniffer-guide',
        'module-4-security-tools/tenderly-guide',
        'module-4-security-tools/defisaver-guide',
        'module-4-security-tools/quiz-security-tools',

      ],
    },

    'resources', // docs/resources.md
    'quizzes',   // docs/quizzes.md
  ],
};

export default sidebars;
