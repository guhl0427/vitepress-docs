export default {
  title: 'Re1 Blog',
  description: 'Record my learning process.',
  base: '/vitepress-docs/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config/' },
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
        text: 'Guide',
        collapsible: true,
        // collapsed: true,
        items: [
          // { text: 'Guide', link: '/guide/' },
          { text: 'Guide 1', link: '/guide/one' },
          { text: 'Guide 2', link: '/guide/two' },
        ]
      },
      {
        text: 'Config',
        collapsible: true,
        items: [
          // { text: 'Config', link: '/config/' },
          { text: 'Config 1', link: '/config/three' },
          { text: 'Config 2', link: '/config/four' },
        ]
      }
    ],

    /* localeLinks: {
      text: 'English',
      items: [
        { text: '简体中文', link: 'https://cn.vitest.dev' },
      ],
    }, */

    socialLinks: [
      // { icon: 'twitter', link: 'twitter' },
      // { icon: 'discord', link: 'discord' },
      { icon: 'github', link: 'https://github.com/guhl0427/vitepress-docs' },
    ],

  },
}