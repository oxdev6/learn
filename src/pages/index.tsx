import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Reveal from '../components/HomepageFeatures/Reveal';

export default function Home() {
  return (
    <Layout
      title="LearnSecure – DeFi Security Education"
      description="Protect your funds. Prevent scams. Master safe borrowing, liquidation risk, and smart contract safety in Compound v3.">
      
      {/* Hero */}
      <header className={styles.hero}>
        <div className="container">
          <Reveal>
            <h1 className={styles.heroTitle}>Master DeFi Security</h1>
            <p className={styles.heroSubtitle}>Protect your funds. Prevent scams. Manage risk like a pro.</p>
            <div className={styles.buttons}>
              <Link className="button button--primary" to="/docs/introduction">Start Learning</Link>
              <Link className="button button--secondary" to="/docs/module-4-security-tools">Explore Security Tools</Link>
            </div>
            <img src="/img/hero-illustration.png" alt="Hero Illustration" className={styles.heroImage} />
          </Reveal>
        </div>
      </header>

      {/* Why Security Matters */}
      <Reveal>
        <section className={styles.whySecurity}>
          <div className="container">
            <h2>Why DeFi Security Matters</h2>
            <p>Over $500M was lost to scams and liquidations in DeFi last year. Learn how to stay safe and in control using real-world tools.</p>
            <img src="/img/security-stats-infographic.png" alt="DeFi Stats Infographic" className={styles.sectionImage} />
          </div>
        </section>
      </Reveal>

      {/* Modules */}
      <Reveal>
        <section className={styles.features}>
          <div className="container">
            <h2>Explore Modules</h2>
            <div className={styles.featureGrid}>
              <Link to="/docs/module-1-safe-borrowing-practices" className={styles.featureCard}>
                <img src="/img/module-borrowing.png" alt="Safe Borrowing" />
                <h3>Safe Borrowing</h3>
              </Link>
              <Link to="/docs/module-2-liquidation-risk-management" className={styles.featureCard}>
                <img src="/img/module-liquidation.png" alt="Liquidation Risk" />
                <h3>Liquidation Risk</h3>
              </Link>
              <Link to="/docs/module-3-scam-prevention" className={styles.featureCard}>
                <img src="/img/module-scam-prevention.png" alt="Scam Prevention" />
                <h3>Scam Prevention</h3>
              </Link>
              <Link to="/docs/module-4-security-tools" className={styles.featureCard}>
                <img src="/img/module-tools.png" alt="Security Tools" />
                <h3>Security Tools</h3>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className={styles.ctaFooter}>
          <div className="container">
            <h2>Ready to take control of your DeFi safety?</h2>
            <Link className="button button--primary" to="/docs/introduction">Get Started Now</Link>
          </div>
        </section>
      </Reveal>
    </Layout>
  );
}
