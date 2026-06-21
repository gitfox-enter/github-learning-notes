import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GitHub 学习笔记',
  description: '从零开始学习 GitHub 的完整笔记记录',
  base: '/github-learning-notes/',
  
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'GitHub 学习笔记',
    
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub 基础', link: '/github-basics/' },
      { text: 'Git 命令', link: '/git-commands/' },
      { text: '学习路线', link: '/learning-roadmap' },
    ],

    sidebar: {
      '/github-basics/': [
        {
          text: 'GitHub 基础',
          items: [
            { text: '概述', link: '/github-basics/' },
            { text: '新手入门路线', link: '/github-basics/01-learning-roadmap' },
            { text: '我的第一次提交', link: '/github-basics/02-my-first-commit' },
          ]
        }
      ],
      '/git-commands/': [
        {
          text: 'Git 命令速查',
          items: [
            { text: '概述', link: '/git-commands/' },
            { text: '常用命令速查表', link: '/git-commands/01-commands-cheatsheet' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gitfox-enter/github-learning-notes' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2026 gitfox-enter'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    editLink: {
      pattern: 'https://github.com/gitfox-enter/github-learning-notes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})
