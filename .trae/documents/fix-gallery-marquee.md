# 修复图片跑马灯 (Gallery Marquee) 静态不滚动问题

## 摘要 (Summary)
目前“课堂瞬间”板块的两行图片跑马灯因为 CSS Flex 布局和 `translateX` 的百分比计算冲突（特别是 `min-w-max` 以及内部 `flex-shrink-0` 结合时的行为），导致动画未能按预期触发无限滚动，图片表现为静止。本计划将通过重新调整 DOM 结构和 Tailwind keyframes，实现100%可靠的 CSS 无缝循环跑马灯。

## 现状分析 (Current State Analysis)
- **`tailwind.config.js`**：`marquee-left` 和 `marquee-right` 目前使用 `translateX(-50%)`。但在当前 DOM 结构下，外部的 Flex 容器并不能正确地感知 `-50%` 所对应的绝对像素宽度，导致动画失效。
- **`Gallery.tsx`**：目前的 DOM 结构渲染了两个独立的容器块并对它们施加动画。

## 具体修改方案 (Proposed Changes)

### 1. `tailwind.config.js` - 修改 Keyframes
- **What**: 将 `translateX(-50%)` 替换为 `translateX(-100%)`。
- **Why**: 通过让一个承载一半内容的块进行 `100%` 位移，能够最稳定地控制循环。
- **How**: 
  - `marquee-left`: `0% { transform: translateX(0) }` -> `100% { transform: translateX(-100%) }`
  - `marquee-right`: `0% { transform: translateX(-100%) }` -> `100% { transform: translateX(0) }`

### 2. `src/components/Gallery.tsx` - 重构跑马灯 DOM
- **What**: 修改循环列表的 DOM 结构，使其能够无缝匹配 `-100%` 动画。
- **Why**: 只有当每一个动画块的宽度严格等于其实际内容的宽度，且两个块首尾相接时，`translateX(-100%)` 才能制造出完美的错觉。
- **How**: 
  - **结构调整**：移除冗余的 `marqueeItems` 扩展。我们将直接使用 `row1` 和 `row2` 作为基础数据。
  - 对于第一行（向左滚动），我们在外层使用 `flex overflow-hidden group`。
  - 内部包含 **两个** 并排的 `div`，它们都添加 `animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-6 sm:gap-8 pr-6 sm:pr-8`。
  - 这两个并排的 `div` 内部，分别渲染一遍 `row1`（或者将 `row1` 扩展一次以保证填满屏幕）。当第一个 `div` 向左移动 `-100%` 时，第二个 `div` 刚好无缝跟上。
  - 为实现更好的效果，将悬停暂停 `group-hover:[animation-play-state:paused]` 加到外层，提升体验。

## 假设与决策 (Assumptions & Decisions)
- **决策**: 放弃基于 `-50%` 和超大拼接数组的方案。改用两个 `min-w-full` 容器并排、分别执行 `-100%` 平移的经典 CSS 跑马灯实现模式，这种方式在跨浏览器下兼容性最好。

## 验证步骤 (Verification steps)
1. 运行 `npm run dev`。
2. 打开浏览器观察“课堂瞬间”板块。
3. 验证第一行图片是否稳定向左滚动，第二行图片是否稳定向右滚动。
4. 鼠标悬停在图片上时，验证滚动是否能暂时停止（提升用户体验）。