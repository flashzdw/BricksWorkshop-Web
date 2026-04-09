# “课堂瞬间”与“校区环境”图片优化及彩虹标题重构计划

## 摘要 (Summary)
将“课堂瞬间”（Gallery）板块的图片展示重构为两行自动无限滚动的横向跑马灯（Marquee）效果，并缩小图片尺寸。同时缩小“校区环境”（Campus）板块的图片。为了打破全站黑白灰的沉闷感，提升教育机构网站的活力，将在全站各个区块的大标题中，为局部关键词加入红黄蓝渐变的“彩虹元素”。

## 现状分析 (Current State Analysis)
- **Gallery（课堂瞬间）**：目前采用静态网格（Grid）布局展示，图片占比较大，形式较为常规。
- **Campus（校区环境）**：目前采用大尺寸两列网格布局，图片显得过大。
- **标题与色彩**：目前各个 Section 的标题（`<h2>`）均为纯深灰色（`text-zinc-900`），虽然符合极简规范，但对于教育机构而言稍显严肃，缺乏活泼感。

## 具体修改方案 (Proposed Changes)

### 1. `tailwind.config.js` - 添加跑马灯动画
- **What**: 在 `theme.extend.animation` 和 `keyframes` 中添加向左和向右平移的无限循环跑马灯动画。
- **Why**: 用于实现“课堂瞬间”板块的两行自动滚动效果。
- **How**: 
  - 添加 `marquee-left: "marquee-left 35s linear infinite"`
  - 添加 `marquee-right: "marquee-right 35s linear infinite"`
  - 对应的 keyframes 从 `translateX(0)` 移动到 `translateX(-50%)` 或反向。

### 2. `src/components/Gallery.tsx` - 重构为两行跑马灯
- **What**: 移除网格布局，改为上下两行、左右交替滚动的横向跑马灯。同时缩小单张图片尺寸。
- **Why**: 增强页面的动感与活力，利用横向空间展示更多课堂瞬间，避免垂直方向过长。
- **How**:
  - 将原有的 `images` 数组拆分为两组，分别对应第一行和第二行。
  - 使用 `flex` 布局和 `whitespace-nowrap` 配合 `animate-marquee-left` 与 `animate-marquee-right`。
  - 缩小图片尺寸（例如设定固定宽度如 `w-64 sm:w-72`，保留圆角 `rounded-2xl`）。
  - 为确保无限循环顺畅，在代码中将图片数组复制一份拼接展示。

### 3. `src/components/Campus.tsx` - 缩小图片尺寸
- **What**: 缩小“校区环境”的图片尺寸。
- **Why**: 避免单张图片在屏幕上占据过大面积，使页面排版更精致。
- **How**:
  - 将目前的 `grid-cols-1 md:grid-cols-2` 调整为 `grid-cols-2 md:grid-cols-4` 或增加容器左右内边距，从而让图片变得更小、更紧凑。
  - 保留图片的 `aspect-[4/3]` 比例和平滑圆角。

### 4. 各组件大标题 - 局部彩虹元素点缀
- **What**: 在全站主要板块的标题中，抽取 2 个字或核心词汇，应用红黄蓝渐变色（`bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text`）。
- **Why**: 在保持整体高级感和极简排版的同时，注入代表教育和青春活力的色彩。
- **How**: 修改以下文件中的 `<h2>` 标题：
  - `About.tsx`: "重新定义 <br /> [青少年科技教育]" (这里可以保持全渐变，或者将科技教育加渐变)
  - `Curriculum.tsx`: "[课程] 体系"
  - `Pathway.tsx`: "[赛事] 路径"
  - `Campus.tsx`: "[校区] 环境"
  - `Gallery.tsx`: "[课堂] 瞬间"
  - `FAQ.tsx`: "常见 [问题]"

## 假设与决策 (Assumptions & Decisions)
- **决策**: 跑马灯的实现采用 CSS 原生动画（通过 Tailwind 扩展），而非引入重量级的第三方轮播库，这能保证性能最佳且无多余依赖。
- **假设**: “红黄蓝渐变”将复用 Hero 组件中已有的品牌色（`from-red-500 via-yellow-500 to-blue-500`），以保证全站视觉语言统一。

## 验证步骤 (Verification steps)
1. 运行 `npm run dev` 启动项目。
2. 滚动到“课堂瞬间”，验证是否呈现为两行横向无缝循环滚动，且上下两行方向相反，图片尺寸适中。
3. 滚动到“校区环境”，验证图片是否比原先更小、排列更紧凑。
4. 浏览全站各个 Section 的标题，验证局部是否正确应用了红黄蓝渐变，并确保不会破坏极简风格的留白与排版。