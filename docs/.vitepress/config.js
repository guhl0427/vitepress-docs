export default {
  title: 'Re1 Blog',
  description: 'Record my learning process.',
  lastUpdated: true,
  themeConfig: {
    themeConfig: {
      logo: '/cat.png',
      siteTitle: 'VitePress-Fun'
    },
    nav: [
      { text: 'Start', link: '/getting-started' },
      // { text: 'Config', link: '/config/' },
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
      /* {
        text: 'Guide',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Guide 1', link: '/guide/one' },
          { text: 'Guide 2', link: '/guide/two' },
        ],
      },
      {
        text: 'Config',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Config 1', link: '/config/three' },
          { text: 'Config 2', link: '/config/four' },
        ],
      }, */
      {
        text: 'Git',
        items: [{ text: 'git-rebase', link: '/git/git-rebase' }],
      },
      {
        text: 'Regex',
        items: [{ text: 'regex-expression', link: '/regex/index' }],
      },
    ],

    socialLinks: [
      // { icon: 'twitter', link: 'twitter' },
      // { icon: 'discord', link: 'discord' },
      { icon: 'github', link: 'https://github.com/guhl0427/vitepress-docs' },
    ],
  },
}
