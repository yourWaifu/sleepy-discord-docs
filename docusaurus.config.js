module.exports = {
  title: 'Sleepy Discord',
  tagline: 'C++ library for Discord',
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
        {
          href: "https://discord.com/invite/5VDrVfK",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/sponsors/yourWaifu",
          label: "Donate",
          position: "right",
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Topics",
              to: "docs/events",
            },
            {
              label: "Reference",
              to: "docs/reference/index_classes"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/yourWaifu/sleepy-discord"
            },
            {
              label: "Discord Server",
              to: "https://discord.com/invite/5VDrVfK",
            },
            {
              label: "Sponsor or Donate",
              to: "https://github.com/sponsors/yourWaifu"
            }
          ]
        },
        {
          title: "Credits",
          items: [
            {
              label: `Built in ${new Date().getFullYear()} with Docusaurus and Doxybook2`,
              to: "https://docusaurus.io/"
            },
            {
              label: "Maintained By yourWaifu",
              to: "https://yourwaifu.dev",
            },
            {
              label: "Docs Git Repo",
              to: "https://github.com/yourWaifu/sleepy-discord-docs",
            }
          ]
        },
      ]
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    hideableSidebar: true,
    algolia: {
      apiKey: 'aa64c0f51f119280e7f07594c58fb334',
      indexName: 'sleepy-discord-docs',
    }
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
