# 卓越科技 BricksWorkshop 官方网站

## 简介
这是“卓越科技 BricksWorkshop”的官方展示网站。作为西北首家 VEX 学苑（VEX Robotics Academy），卓越科技致力于为青少年提供专业、专注、寓教于乐的机器人教育体验。

本网站主要作为机构的纯展示性宣传平台，采用极简科技风设计，结合全白背景与“彩虹风格”点缀，以打破传统科技机构沉闷的深色调，营造出积极向上、充满活力的青少年教育氛围。

## 核心功能与板块
网站包含以下平滑过渡、连续滚动的核心板块，提供沉浸式的浏览体验：

- **Hero 视觉首屏**：引人入胜的机构宣传标语与主视觉。
- **Statistics 统计数据**：展示机构的实力与核心数据。
- **About 关于我们**：介绍卓越科技的教育理念与“专注度、游戏化学习”的特色。
- **Curriculum 课程体系**：涵盖低龄段到高龄段的 VEX 机器人课程（如 VEX 123 / GO / IQ 等）。
- **Pathway 成长路径**：学员的学习发展与赛事进阶路线。
- **Campus 校区环境**：展示汉中滨江路校区的教学环境与设施。
- **Gallery 精彩图集**：呈现学员风采、课堂瞬间与赛事掠影。
- **FAQ 常见问题**：解答家长关于机器人学习和课程报名的常见疑惑。

## 技术栈
本网站采用了现代化、高性能的前端技术栈进行开发：

- **[React 18](https://react.dev/)**：用于构建用户界面的核心库。
- **[TypeScript](https://www.typescriptlang.org/)**：为项目提供静态类型检查，提升代码质量。
- **[Vite](https://vitejs.dev/)**：极速的开发构建工具，提供秒级的 HMR 热更新。
- **[Tailwind CSS](https://tailwindcss.com/)**：用于快速构建极简科技风和响应式布局的原子化 CSS 框架。
- **[Framer Motion](https://www.framer.com/motion/)**：实现页面平滑滚动、视差效果和各类交互动画。
- **[Lucide React](https://lucide.dev/)**：一套精美、一致的开源图标库。

## 项目结构
```text
src/
├── assets/         # 静态资源 (如图标、全局使用的图片)
├── components/     # 各个独立的功能展示板块 (Hero, About, Curriculum 等)
├── lib/            # 工具函数 (如 Tailwind 类名合并 utils)
├── pages/          # 页面组件 (如 Home 主页)
├── App.tsx         # 根组件，路由配置
├── main.tsx        # React 挂载入口
└── index.css       # 全局样式与 Tailwind 指令
```

## 本地开发指南

### 前提条件
确保你的系统已安装 [Node.js](https://nodejs.org/)。项目支持使用 `npm` 或 `pnpm` 作为包管理器。

### 1. 克隆项目
```bash
git clone <repository-url>
cd workspace
```

### 2. 安装依赖
```bash
# 使用 npm
npm install

# 或者使用 pnpm
pnpm install
```

### 3. 启动开发服务器
```bash
# 使用 npm
npm run dev

# 或者使用 pnpm
pnpm dev
```
服务器启动后，打开浏览器访问控制台输出的本地地址（通常是 `http://localhost:5173`）即可预览网站。

### 4. 构建生产版本
```bash
# 使用 npm
npm run build

# 或者使用 pnpm
pnpm build
```
构建产物将会生成在 `dist` 目录下，可直接部署至任意静态文件托管平台。

## 联系方式
- **官方小红书**：@卓越科技BricksWorkshop (小红书号: VEX8009)
- **校区地址**：中国陕西省汉中市（滨江路校区）
