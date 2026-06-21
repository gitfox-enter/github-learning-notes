---
title: 学习路线图
description: GitHub 五步进阶学习路线
---

# GitHub 五步学习路线

这是从零开始学习 GitHub 的完整路线图，每一步都有明确的目标和实战项目。

## 学习原则

1. **先动手再理解** — 每一步都实际操作，不要只看不练
2. **命令行优先** — 用终端操作 Git，不用网页界面编辑
3. **提交要写清楚** — 从第一天就遵循 Conventional Commits 规范

---

## 第 1 步：学习笔记仓库（本仓库）

**目标**：熟悉 GitHub 基础操作

- [x] 创建仓库
- [x] 写 README.md
- [x] git add / commit / push 完整流程
- [x] .gitignore 文件
- [x] 目录分类和索引

**成果**：你正在阅读的这个仓库！

---

## 第 2 步：个人名片页

**目标**：学会 HTML + CSS + GitHub Pages 部署

技术栈：HTML + CSS + 少量 JS

功能点：
- 头像、姓名、专业、爱好
- 联系方式（邮箱、GitHub 链接）
- 渐变样式、跳转按钮

目录规范：
```
my-portfolio/
├── index.html
├── css/
│   └── style.css
└── img/
    └── avatar.png
```

---

## 第 3 步：Todo 待办清单

**目标**：入门 JavaScript + 分支操作

技术栈：HTML + CSS + 原生 JavaScript

功能点：
- 新增任务
- 删除任务
- 标记完成
- 清空全部
- localStorage 本地存储

Git 练习：
- 每个功能开一个分支（`feature/add-task`）
- 完成后合并回 main

---

## 第 4 步：Python 小脚本

**目标**：接触后端逻辑 + CLI 开发

推荐项目：文本统计工具（字数、行数、关键词计数）

```python
# 示例：文本统计工具的基本结构
import argparse

def count_words(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    return len(text.split())

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='文本统计工具')
    parser.add_argument('file', help='要统计的文件路径')
    args = parser.parse_args()
    print(f'字数: {count_words(args.file)}')
```

---

## 第 5 步：天气查询页面

**目标**：前后端交互 + API 调用

技术栈：HTML + CSS + JavaScript (fetch)

```javascript
// 核心：用 fetch 调用免费天气 API
async function getWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_KEY`
    );
    const data = await response.json();
    return data;
}
```

---

## Git 提交类型规范

| 类型 | 用途 | 示例 |
|------|------|------|
| `feat:` | 新功能 | `feat: 添加任务删除功能` |
| `fix:` | 修 bug | `fix: 修复空任务可提交的问题` |
| `docs:` | 文档 | `docs: 更新 README 安装说明` |
| `style:` | 格式 | `style: 统一缩进为2空格` |
| `refactor:` | 重构 | `refactor: 拆分渲染逻辑到独立模块` |

---

## 参考资源

- [GitHub 官方文档](https://docs.github.com)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Skills 互动教程](https://skills.github.com/)

---

> ✅ 已完成第一阶段学习，继续加油！
