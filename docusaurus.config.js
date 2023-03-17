// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'scryptTS',
  tagline: 'a Typescript DSL to write smart contracts on Bitcoin Satoshi Vision.',
  url: 'https://docs.scrypt.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sCrypt-Inc', // Usually your GitHub org/user name.
  projectName: 'scrypt-ts-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'scryptTS',
        logo: {
          alt: 'scrypt Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'tutorials/hello-world',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'doc',
            docId: 'reference/README',
            position: 'left',
            label: 'Reference',
          },
          {
            href: 'https://github.com/sCrypt-Inc/scryptTS-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/overview',
              },
              {
                label: 'Tutorials',
                to: '/category/tutorials',
              },
              {
                label: 'Reference',
                to: '/reference',
              },
              {
                label: 'Youtube',
                to: 'https://www.youtube.com/playlist?list=PL0Kn1t30VSpGcbwN-bcbU1-x0fRAoq-GI',
              },
              {
                label: 'By Example',
                to: 'https://by-example.scrypt.io',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Medium',
                href: 'https://xiaohuiliu.medium.com',
              },

              {
                label: 'Twitter',
                href: 'https://twitter.com/sinoTrinity',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sCrypt-Inc',
              },
            ],
          },
          {
            title: 'Contract Us',
            items: [
              {
                label: 'Official Website',
                href: 'https://scrypt.io',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/joinchat/GwaRAxKT16JjXyHt5PuhHw',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/scryptworkspace/shared_invite/enQtNzQ1OTMyNDk1ODU3LTJmYjE5MGNmNDZhYmYxZWM4ZGY2MTczM2NiNTIxYmFhNTVjNjE5MGYwY2UwNDYxMTQyNGU2NmFkNTY5MmI1MWM',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} sCrypt, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      algolia: {
        appId: 'OJKYHFWNLH',
        apiKey: 'b2fd643cac7f79de3144cda8f1215aaf',
        indexName: 'scryptTS-docs',
      },
    }),
};

module.exports = config;
