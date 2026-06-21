---
title: 我的第一次 Git 提交
description: 记录第一次使用 Git 提交的完整流程
---

# 我的第一次 Git 提交

> 📅 学习日期：2026-06-20
> 🏷 标签：#GitHub #实战

## 今天学到的

1. 在 GitHub 仓库页面按 `.` 可以打开网页编辑器
2. 修改文件后需要 commit（提交）才能保存
3. commit message 要写清楚做了什么

## Git 三步提交流程

```bash
git add .                    # 暂存所有改动
git commit -m "feat: 描述"   # 提交到本地
git push                     # 推送到 GitHub
```

## 💡 心得

- 每次提交前先用 `git status` 检查改动
- 提交信息要写清楚，方便以后回看
- 推送前确保网络稳定
