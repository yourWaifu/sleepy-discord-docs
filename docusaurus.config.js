module.exports = {
  title: 'Sleepy Discord',
  tagline: 'Documentation',
  url: 'https://yourwaifu.dev/',
  baseUrl: '/sleepy-discord-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/title-icon.png',
  organizationName: 'yourWaifu', // Usually your GitHub org/user name.
  projectName: 'sleepy-discord-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sleepy Discord',
      hideOnScroll: true,
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/yourWaifu/sleepy-discord',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `${new Date().getFullYear()} Sleepy Discord Docs Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          //to do add edit button when update comes
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yourWaifu/sleepy-discord-docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
