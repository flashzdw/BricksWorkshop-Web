# 优化手机版网页主页布局与文字显示

**Summary**
优化 `Hero` 组件中主页标题在手机端的显示效果，修复文字整体偏右以及字母“p”显示不完整的问题。

**Current State Analysis**
- 标题“BricksWorkshop”作为一个连续的超长单词，在手机端使用 `text-5xl` 时宽度过大，导致超出容器宽度。由于容器或页面的宽度被撑开，使得原本居中对齐的内容在视觉上整体偏向右侧。
- `h1` 元素使用了不必要的 `flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8` 类名（内部仅包含一段文本，无需 flex 布局），导致在文本溢出时，浏览器的弹性盒对齐策略产生不可预期的右偏效果。
- 标题的后半部分“Workshop”使用了 `text-transparent bg-clip-text` 渐变文本裁剪效果。在部分浏览器中，由于字符自身的倾斜（如“p”的右侧弧度）或右侧渲染宽度的计算问题，导致最右侧被背景裁剪，从而“p”显示不完整。

**Proposed Changes**
- 修改文件：`src/components/Hero.tsx`
  - 将 `h1` 标签中的移动端默认字体大小由 `text-5xl` 调整为 `text-4xl`（即从 48px 减小至 36px），确保其在常见的小屏手机（如 iPhone SE 的 320px 宽度）上也能完整显示而不发生溢出。
  - 移除 `h1` 标签上多余的 flex 布局类名（`flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8`），让其回归普通的块级元素，配合外层容器的 `text-center` 实现稳定可靠的文本居中。
  - 在带有渐变效果的 `span` 标签上增加 `pr-2 pb-1`（右侧和底部的内边距），为最后一个字母“p”提供充足的渲染空间，防止其被 `bg-clip-text` 裁剪。

**Assumptions & Decisions**
- 假设 "BricksWorkshop" 是不可分割的品牌词，不应在移动端强行将其断行。
- 保留桌面端和较大屏幕（`sm:`、`md:`、`lg:`）原有的 `text-6xl md:text-8xl lg:text-9xl` 字体大小，仅缩小移动端（低于 640px 宽度）的字体。

**Verification steps**
- 在浏览器中打开开发者工具，切换到手机视图（例如 iPhone SE 或 iPhone 14 Pro）。
- 检查主页标题是否完美居中，页面是否存在横向滚动或文字整体右偏现象。
- 检查“Workshop”的最后一个字母“p”是否完全显示，没有任何裁剪痕迹。
