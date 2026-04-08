# Tasks
- [x] Task 1: 准备 Aceternity UI 基础依赖与配置
  - [x] SubTask 1.1: 确认并补充安装可能需要的依赖（`clsx`, `tailwind-merge`, `framer-motion` 已存在，视需要添加 `mini-svg-data-uri` 或其它依赖）。
  - [x] SubTask 1.2: 在 `tailwind.config.js` 中配置 Aceternity UI 所需的插件（例如展平颜色调色板的插件、特定 keyframes 等）。
- [x] Task 2: 优化 Hero 组件
  - [x] SubTask 2.1: 在项目中引入 Aceternity UI 的背景动画组件（如 Aurora Background）。
  - [x] SubTask 2.2: 使用新组件重构 `Hero.tsx`，保留现有文案和原有渐变色融合。
- [x] Task 3: 优化 About 组件
  - [x] SubTask 3.1: 引入 `Card Hover Effect` 或 `Bento Grid` 组件代码。
  - [x] SubTask 3.2: 替换 `About.tsx` 中的六大特性卡片，使其具有现代化的悬停光效。
- [x] Task 4: 优化 Pathway 组件
  - [x] SubTask 4.1: 引入 Aceternity UI 的 `Timeline` 组件代码。
  - [x] SubTask 4.2: 重构 `Pathway.tsx`，将现有的路径数据接入新 Timeline 渲染。
- [x] Task 5: 优化 Campus 与 Gallery 区域
  - [x] SubTask 5.1: 引入 `Parallax Scroll` 或图片流相关组件。
  - [x] SubTask 5.2: 替换对应的 `Campus.tsx` 和 `Gallery.tsx`，实现图片视差滚动。
- [x] Task 6: 检查和调整全局配色
  - [x] SubTask 6.1: 确保所有新组件的背景、边框和字体颜色继续使用项目原有的 `zinc` 系列。
  - [x] SubTask 6.2: 检查各个区域过渡是否自然，确认未因引入组件破坏原有的极简白/浅色风格。

# Task Dependencies
- [Task 2], [Task 3], [Task 4], [Task 5] depends on [Task 1]
- [Task 6] depends on [Task 2, Task 3, Task 4, Task 5]
