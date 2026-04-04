# 优化任务与广告移除计划

## 1. 目标概述
本项目旨在完成对 `BricksWorkshop-Web` 网页的优化任务（基于前期的系统性代码分析），同时彻底清除所有与 TRAE 相关的内置广告（包含右下角弹窗、浏览器标签页图标及标题）。

## 2. 当前状态分析
- **广告注入**：使用了 `vite-plugin-trae-solo-badge` 插件在右下角生成弹窗；`index.html` 中硬编码了 `<title>My Trae Project</title>` 及带有 Trae Logo 的 `favicon.svg`。
- **TypeScript 配置**：当前 `tsconfig.json` 关闭了多项严格检查（`strict`, `noUnusedLocals` 等），不利于长期的代码健壮性。
- **路径别名规范**：项目中已配置了 `@/` 别名，但 `Home.tsx` 等组件中仍在使用相对路径（如 `../components/`）。
- **加载性能**：`App.tsx` 中的路由组件为同步加载；`Gallery.tsx` 中的高分辨率图片缺少懒加载属性。
- **冗余依赖与代码**：项目中安装了 `zustand` 但并未实际使用；启用了 `darkMode: "class"` 且存在 `useTheme.ts`，但整体 UI 并没有实现暗黑模式的适配逻辑，存在冗余。

## 3. 具体实施步骤

### 3.1 移除所有 TRAE 广告及相关配置
- **`vite.config.ts`**：
  - 移除 `vite-plugin-trae-solo-badge` 的引入和插件注册。
- **`package.json`**：
  - 从 `devDependencies` 中卸载 `vite-plugin-trae-solo-badge`。
- **`index.html`**：
  - 将 `<title>` 标签修改为：`<title>BricksWorkshop</title>`。
  - 删除 `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`（或替换为标准的占位图标）。
- **`public/favicon.svg`**：
  - 直接删除该文件（原文件为 TRAE 的 Logo）。

### 3.2 代码规范与 TypeScript 严格模式
- **`tsconfig.json`**：
  - 将 `"strict"`, `"noUnusedLocals"`, `"noUnusedParameters"`, `"noFallthroughCasesInSwitch"`, `"noUncheckedSideEffectImports"` 统一修改为 `true`。
- **`src/pages/Home.tsx`**：
  - 批量将 `import ... from '../components/...'` 替换为 `import ... from '@/components/...'`，统一项目路径规范。

### 3.3 性能优化（路由与图片懒加载）
- **`src/App.tsx`**：
  - 引入 `React.lazy` 和 `Suspense`。
  - 将 `<Home />` 组件的同步引入改造为异步懒加载（`const Home = React.lazy(() => import('@/pages/Home'))`），并使用 `<Suspense>` 包裹路由。
- **`src/components/Gallery.tsx`**：
  - 为组件内部渲染的所有 `<img>` 标签补充 `loading="lazy"` 属性，优化长列表图片的渲染性能。

### 3.4 移除冗余依赖与无用配置
- **`package.json`**：
  - 从 `dependencies` 中移除未使用的 `zustand`。
- **`tailwind.config.js`**：
  - 移除 `darkMode: "class"` 配置。
- **`src/hooks/useTheme.ts`**：
  - 删除此文件（当前未被任何组件引用，且项目未实际实现暗黑模式）。

## 4. 验证方式
- 运行 `npm run dev`（或对应包管理器的 dev 命令），确认浏览器右下角 TRAE 徽章弹窗消失。
- 确认浏览器标签页名称变更为 `BricksWorkshop`，且原有的 TRAE 绿色图标不再显示。
- 运行 `npm run check`，确保开启严格模式后的 TypeScript 编译通过，无类型报错。
- 检查网页图片加载情况，审查元素确认 `<img>` 标签已包含 `loading="lazy"` 属性。
- 确认页面切换及渲染正常，没有因为路由懒加载或移除 `zustand` 引起功能异常。