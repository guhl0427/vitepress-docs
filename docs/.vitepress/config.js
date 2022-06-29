export default {
  title: 'VitePress',
  description: 'Just playing around.',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Config', link: '/config/' },
      {
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
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        // collapsible: true,
        // collapsed: true,
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/one' },
        ]
      },
      {
        text: 'Guide2',
        // collapsible: true,
        items: [
          { text: 'Introduction2', link: '/config/' },
          { text: 'Getting Started2', link: '/config/three' },
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

    localeLinks: {
      text: 'English',
      items: [
        { text: '简体中文', link: 'https://cn.vitest.dev' },
      ],
    },

    socialLinks: [
      { icon: 'twitter', link: 'twitter' },
      { icon: 'discord', link: 'discord' },
      { icon: 'github', link: 'github' },
    ],

  },
}