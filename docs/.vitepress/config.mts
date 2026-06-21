import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GitHub 学习笔记',
  description: '从零开始的 Git & GitHub 学习之旅',
  lang: 'zh-CN',
  base: '/github-learning-notes/',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'GitHub 学习笔记',

    nav: [
      { text: '首页', link: '/' },
      { text: '学习笔记', link: '/notes/github-basics/01-learning-roadmap' },
    ],

    sidebar: {
      '/notes/': [
        {
          text: 'GitHub 基础',
          collapsed: false,
          items: [
            { text: '学习路线图', link: '/notes/github-basics/01-learning-roadmap' },
            { text: '第一次提交', link: '/notes/github-basics/02-my-first-commit' },
          ],
        },
        {
          text: 'Git 命令',
          collapsed: false,
          items: [
            { text: '命令速查表', link: '/notes/git-commands/01-commands-cheatsheet' },
          ],
        },
        {
          text: 'HTML & CSS',
          collapsed: true,
          items: [],
        },
        {
          text: 'JavaScript',
          collapsed: true,
          items: [],
        },
        {
          text: 'Python',
          collapsed: true,
          items: [],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gitfox-enter' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 gitfox-enter',
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: '页面导航',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    darkModeSwitchLabel: '暗色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
  },
})
