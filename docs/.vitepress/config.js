export default {
  title: "Re1's Blog",
  description: 'Record my learning process.',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Start', link: '/some-questions' },
      /* {
        text: `v`,
        items: [
          {
            text: 'Release Notes ',
            link: '/releases/',
          },
          {
            text: 'Contributing ',
            link: '/contributing/',
          },
        ],
      }, */
    ],

    sidebar: [
      {
        text: 'ESModule',
        collapsed: false,
        items: [{ text: 'export & import', link: '/esmodule/export' }],
      },
      {
        text: 'Git',
        collapsed: false,
        items: [
          { text: 'git-rebase', link: '/git/git-rebase' },
          { text: 'SSH & GPG keys', link: '/git/ssh-gpg-keys' },
        ],
      },
      {
        text: 'Regex',
        collapsed: false,
        items: [{ text: 'regex-expression', link: '/regex/regular-xpression' }],
      },
      {
        text: 'Summary',
        collapsed: false,
        items: [
          { text: '2021年度总结', link: '/summary/2021-full-year' },
          { text: '2022年中总结', link: '/summary/2022-mid-year' },
        ],
      },
    ],

    socialLinks: [
      // { icon: 'twitter', link: 'twitter' },
      // { icon: 'discord', link: 'discord' },
      { icon: 'github', link: 'https://github.com/guhl0427/vitepress-docs' },
    ],
  },
}
