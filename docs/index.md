---
layout: home

hero:
  name: "GitHub 学习笔记"
  text: "从零开始掌握 GitHub"
  tagline: "📚 完整的学习笔记、Git 命令速查、实战项目指南"
  image:
    src: /hero-image.svg
    alt: GitHub Learning Notes
  actions:
    - theme: brand
      text: 开始学习
      link: /github-basics/
    - theme: alt
      text: Git 命令速查
      link: /git-commands/01-commands-cheatsheet
    - theme: alt
      text: GitHub 仓库
      link: https://github.com/gitfox-enter/github-learning-notes

features:
  - icon: 📖
    title: 系统学习
    details: 从 GitHub 新手到熟练使用，五步进阶路线图，每一步都有清晰的笔记记录
  - icon: ⚡
    title: 命令速查
    details: Git 常用命令速查表，包含新旧命令对照、常见错误解决方案
  - icon: 🎯
    title: 实战导向
    details: 每个阶段配套实战项目，边学边做，在实践中掌握技能
  - icon: 📝
    title: 规范先行
    details: 从第一天就遵循 Conventional Commits 规范，养成好习惯
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (max-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(24px);
  }
}
</style>

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/gitfox-enter/github-learning-notes.git

# 进入目录
cd github-learning-notes

# 安装依赖
npm install

# 启动本地开发服务器
npm run docs:dev
```

## 📚 内容概览

| 模块 | 描述 | 状态 |
|------|------|------|
| GitHub 基础 | 仓库操作、提交流程、分支管理 | ✅ 进行中 |
| Git 命令速查 | 常用命令、错误处理、实用技巧 | ✅ 已完成 |
| HTML + CSS | 前端基础（个人名片页） | ⬜ 待开始 |
| JavaScript | 交互逻辑（Todo 待办） | ⬜ 待开始 |
| Python | 脚本开发（文本统计工具） | ⬜ 待开始 |

---

<div style="text-align: center; margin-top: 2rem; color: var(--vp-c-text-2);">
  Made with ❤️ by <a href="https://github.com/gitfox-enter" target="_blank">gitfox-enter</a>
</div>
