import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LearnSecure Docs',
  tagline: 'Master DeFi Security for Compound v3',
  favicon: 'img/favicon.ico',

  // Production URL for your site
  url: 'https://your-domain.com',
  baseUrl: '/',

  // GitHub pages deployment config (if you choose to deploy there)
  organizationName: 'your-github-username', // your GitHub user/org
  projectName: 'learnsecure-docs',         // your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // Location of sidebar config
          sidebarPath: require.resolve('./sidebars.ts'),
          // Enable “Edit this page” links
          editUrl:
            'https://github.com/your-github-username/learnsecure-docs/edit/main/',
        },
        // Disable the blog until later
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'LearnSecure',
      logo: {
        alt: 'LearnSecure Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/docs/introduction', label: 'Introduction', position: 'left' },
        { to: '/docs/quizzes',      label: 'Quizzes',      position: 'left' },
        { to: '/docs/resources',    label: 'Resources',    position: 'left' },
        {
          href: 'https://github.com/your-github-username/learnsecure-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Introduction', to: '/docs/introduction' },
            { label: 'All Quizzes',  to: '/docs/quizzes' },
          ],
        },
        {
          title: 'Modules',
          items: [
            { label: 'Safe Borrowing',      to: '/docs/module-1-safe-borrowing-practices' },
            { label: 'Liquidation Risk',    to: '/docs/module-2-liquidation-risk-management' },
            { label: 'Scam Prevention',     to: '/docs/module-3-scam-prevention' },
            { label: 'Security Tools',      to: '/docs/module-4-security-tools' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.com/invite/your-invite' },
            { label: 'Twitter', href: 'https://x.com/your-twitter-handle' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} LearnSecure. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
