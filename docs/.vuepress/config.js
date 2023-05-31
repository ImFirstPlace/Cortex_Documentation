import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Cortex Documentation',
  description: 'Official documentation for Cortex Elevators',
  base: '/Cortex_Documentation/',
  theme: defaultTheme({
    colorMode: 'dark',
    locales: {
      '/': {
        sidebar: {
          '/': [
            {
              text: 'Home',
              children: [
                '/'
              ]
            },
            {
              text: 'Configuration',
              children: [
                '/configuration/loader.md',
                '/configuration/settings-file.md'
              ]
            },
            {
              text: 'API Reference',
              children: [
                '/api/server-api.md'
              ]
            }
          ]
        },
        navbar: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Configuration',
            children: [
              '/configuration/loader.md',
              '/configuration/settings-file.md',
            ]
          },
          {
            text: 'API Reference',
            children: [
              '/api/server-api.md'
            ]
          }
        ]
      }
    }
  })
})