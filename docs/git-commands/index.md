---
title: Git 命令速查
description: Git 常用命令速查表和实用技巧
---

# Git 命令速查

这里整理了日常开发中最常用的 Git 命令，方便快速查阅。

## 📚 内容

| 笔记 | 描述 | 更新日期 |
|------|------|---------|
| [常用命令速查表](01-commands-cheatsheet) | 基础操作、分支管理、撤销操作等 | 2026-06-20 |

## 🎯 使用场景

- 🔰 每天都要用的基础命令
- 🌿 分支创建、切换、合并
- 🔍 查看仓库状态和历史
- 🔄 撤销误操作

## 💡 小贴士

```bash
# 设置 Git 命令别名，提高效率
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.sw switch
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lg "log --oneline --graph --all"
```

设置后：
- `git st` = `git status`
- `git sw main` = `git switch main`
- `git lg` = 漂亮的提交历史图
