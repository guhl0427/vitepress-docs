export default {
  title: 'VitePress',
  description: 'Just playing around.',
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

    /* sidebar: {
      // TODO: bring sidebar of apis and config back
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Why Vitest',
              link: '/guide/why',
            },
            {
              text: 'Migration Guide',
              link: '/guide/migration',
            },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: 'API Reference',
              link: '/api/',
            },
          ],
        },
        {
          text: 'Config',
          items: [
            {
              text: 'Config Reference',
              link: '/config/',
            },
          ],
        },
      ],
    }, */

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