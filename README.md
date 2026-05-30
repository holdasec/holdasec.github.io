# 个人网页项目

这是一个基于 React + Vite 构建的个人网页项目。

## 技术栈

- **React 19.2.6** - 前端框架
- **Vite 8.0** - 构建工具，提供快速的开发体验
- **React Router** - 路由管理
- **Framer Motion** - 动画效果库
- **React Icons** - 图标库

## 项目结构

```
src/
├── assets/              # 静态资源
│   ├── images/         # 图片
│   └── icons/          # 图标
├── components/         # 组件
│   ├── common/        # 通用组件（按钮、卡片、导航等）
│   └── sections/      # 页面区块（Hero、About、Skills 等）
├── pages/             # 页面
├── hooks/             # 自定义 Hooks
├── utils/             # 工具函数
└── styles/            # 样式文件
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看项目。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm preview
```

### 代码检查

```bash
npm run lint
```

## 功能模块

- 🏠 首屏展示（Hero Section）
- 👤 个人简介（About）
- 💼 技能展示（Skills）
- 🚀 项目展示（Projects）
- 📝 工作经历（Experience）
- 📧 联系方式（Contact）

## 特性

- ⚡️ Vite 提供极速的 HMR（热模块替换）
- 🎨 响应式设计，适配移动端和桌面端
- ✨ 流畅的动画效果
- 📱 单页应用（SPA）架构
- 🔧 ESLint 代码规范检查

## 浏览器兼容性

现代浏览器均支持，建议使用最新版本的 Chrome、Firefox、Safari 或 Edge。
