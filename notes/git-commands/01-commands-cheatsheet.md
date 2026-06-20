# Git 常用命令速查

> 📅 学习日期：2026-06-20
> 🏷 标签：#Git #命令 #速查

## 🔰 基础操作（每天都要用）

```bash
# 初始化 / 克隆
git init                        # 在当前目录创建新仓库
git clone <url>                 # 克隆远程仓库到本地

# 三步提交流程
git add .                       # 暂存所有改动
git add <file>                  # 暂存指定文件
git commit -m "feat: 描述"      # 提交到本地
git push                        # 推送到远程

# 拉取更新
git pull                        # 拉取并合并远程更新
```

## 🌿 分支操作

```bash
git branch                      # 查看所有分支
git branch <name>               # 创建新分支
git checkout <name>             # 切换分支
git checkout -b <name>          # 创建并切换（最常用）

# 合并分支
git checkout main               # 先切回主分支
git merge <branch-name>         # 合并指定分支

# 删除分支
git branch -d <name>            # 删除已合并的分支
```

## 🔍 查看状态

```bash
git status                      # 查看当前状态（最常用！）
git log --oneline               # 简洁查看提交历史
git diff                        # 查看未暂存的改动
git diff --staged               # 查看已暂存的改动
```

## 🔄 撤销操作

```bash
git restore <file>              # 撤销工作区改动（未 add）
git restore --staged <file>     # 取消暂存（已 add，未 commit）
git revert <commit-hash>        # 撤销某次提交（安全，生成新提交）
```

## 🏠 远程仓库

```bash
git remote -v                           # 查看远程仓库地址
git remote add origin <url>             # 添加远程仓库
git push -u origin main                 # 首次推送并设置上游
git push                                # 后续推送
```

## 💡 实用技巧

```bash
# 临时保存工作
git stash                       # 暂存当前改动
git stash pop                   # 恢复暂存的改动

# 修改最后一次提交信息
git commit --amend -m "新的描述"

# 查看某个文件的修改历史
git log --follow -p <file>
```

## ⚠️ 新手常见错误

| 错误 | 原因 | 解决 |
|------|------|------|
| `fatal: not a git repository` | 当前目录没有初始化 git | 先 `git init` 或 `git clone` |
| `Everything up-to-date` | 没有新改动需要推送 | 检查是否 `git add` + `git commit` |
| `failed to push some refs` | 远程有更新没拉取 | 先 `git pull` 再 `git push` |
| 提交了不该提交的文件 | 缺少 `.gitignore` | 补写 `.gitignore`，然后用 `git rm --cached <file>` |
