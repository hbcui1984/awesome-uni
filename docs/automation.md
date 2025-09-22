# 自动化发现系统文档

## 概述

本系统用于自动发现和收集优秀的uni-app项目、文章和案例，并通过PR的方式提交到仓库进行人工审核。

## 功能特性

- 🔍 **GitHub项目发现**: 自动搜索GitHub上的uni-app相关项目
- 📖 **文章收集**: 从技术网站收集相关文章和教程
- 💼 **案例汇总**: 收集实用的开发案例
- 🤖 **自动PR**: 自动创建Pull Request提交发现的内容
- ⏰ **定时运行**: 支持定时自动运行

## 配置说明

### GitHub Token

为了访问GitHub API，需要在仓库设置中配置`GITHUB_TOKEN`，该token需要有以下权限：
- `repo`: 访问仓库
- `workflow`: 运行GitHub Actions

### 发现配置

编辑`config/discovery.json`文件来配置发现参数：

```json
{
  "discovery": {
    "github": {
      "searchQueries": ["uni-app stars:>50"],
      "minStars": 10,
      "maxResults": 50
    },
    "schedule": {
      "enabled": true,
      "cron": "0 10 * * 1"
    }
  }
}
```

## 使用方法

### 自动运行

系统会按照配置的时间表自动运行：
- 默认: 每周一上午10点(UTC)
- 可通过`config/discovery.json`修改

### 手动触发

1. 进入GitHub仓库的Actions页面
2. 选择"Discover Uni-App Content"工作流
3. 点击"Run workflow"按钮
4. 选择分支并点击"Run workflow"

### 本地运行

```bash
# 安装依赖
npm install

# 运行发现脚本
npm run discover
```

## 输出结果

### README更新

发现的内容会自动添加到README.md文件中，包括：
- 优秀项目列表（按star数排序）
- 相关文章链接
- 实用案例介绍

### Pull Request

系统会自动创建PR，包含：
- 详细的变更说明
- 发现内容的统计信息
- 便于审核的格式化内容

## 审核流程

1. **自动发现**: 系统运行并发现新内容
2. **创建PR**: 自动创建包含新内容的Pull Request
3. **人工审核**: 维护者审核PR中的内容
4. **合并或关闭**: 审核通过后合并到主分支，或关闭不合适的PR

## 故障排除

### GitHub API限制

- 问题: 403错误或请求限制
- 解决: 确保GITHUB_TOKEN配置正确且有足够权限

### 工作流失败

- 问题: GitHub Actions运行失败
- 解决: 检查Actions日志，确认权限设置

### 内容重复

- 问题: 发现重复的项目或文章
- 解决: 系统会自动去重，如有问题可手动调整脚本逻辑

## 扩展功能

### 添加新的发现源

1. 编辑`scripts/discover-content.js`
2. 添加新的发现方法
3. 更新配置文件

### 自定义输出格式

1. 修改`generateReadmeContent()`方法
2. 调整README模板格式

## 贡献指南

欢迎提交PR来改进自动化发现系统：
- 优化发现算法
- 添加新的内容源
- 改进输出格式
- 修复bug