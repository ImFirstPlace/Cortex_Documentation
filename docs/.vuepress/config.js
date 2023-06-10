import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Cortex Documentation',
  description: 'Official documentation for Cortex Elevators',
  base: '/Cortex_Documentation/',
  theme: defaultTheme({
    colorMode: 'dark',
    contributors: false,
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
                '/api/server-invoke-api.md',
                '/api/server-recieve-api.md'
              ]
            },
            {
              text: 'Setup',
              children: [
                '/setup/internal-plugins.md',
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
              '/api/server-invoke-api.md',
              '/api/server-recieve-api.md'
            ]
          },
          {
            text: 'Setup',
            children: [
              '/setup/internal-plugins.md',
            ]
          }
        ]
      }
    }
  })
})