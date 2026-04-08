# Aceternity UI Optimization Spec

## Why
用户希望使用 Aceternity UI 相关组件彻底优化现有网站的 UI，同时保持现有的配色方案（以 zinc、白色和微妙渐变色为主）尽量不变，以提升视觉层级、动态效果和交互体验。

## What Changes
- 引入 Aceternity UI 核心依赖组件架构（基于现有 `framer-motion` 和 `tailwind-merge` 架构，增加通用组件库源码）。
- **Hero 区域**: 引入背景动画效果（如 Aurora Background 或 Background Beams 等），增强视觉冲击力，保持现有文字渐变与排版。
- **About 区域**: 使用 Card Hover Effect 优化特性列表（Features），提升交互反馈。
- **Pathway 区域**: 使用 Timeline 组件替换现有的时间轴设计，更优雅地呈现赛事升学路径。
- **Campus / Gallery 区域**: 引入 Parallax Scroll、Layout Grid 或 Images Slider 来展示校区环境和风采展示图片。
- 确保所有新引入的组件样式适配现有的 Tailwind 配置（锌色 `zinc` 和已有渐变色）。

## Impact
- Affected specs: 页面整体视觉与滚动交互动画。
- Affected code: 
  - `tailwind.config.js` (增加所需变量与插件)
  - `src/components/Hero.tsx`
  - `src/components/About.tsx`
  - `src/components/Pathway.tsx`
  - `src/components/Campus.tsx`
  - `src/components/Gallery.tsx`

## ADDED Requirements
### Requirement: 增强交互体验
系统应该通过平滑的滚动、视差效果和高级悬停反馈来提升用户的沉浸感，并带来现代化的微交互体验。

#### Scenario: 浏览主页
- **WHEN** 用户向下滚动或鼠标悬停在特定内容区域时
- **THEN** Timeline、Parallax 或 Hover Card 等组件应当按视口位置平滑加载并触发动画。

## MODIFIED Requirements
### Requirement: 组件替换与视觉重构
现有的静态或基础动画组件将被 Aceternity UI 的高级动画组件替换，同时必须严格保留原始的文本内容、数据结构和以锌色(zinc)/浅色为主的整体色调。
