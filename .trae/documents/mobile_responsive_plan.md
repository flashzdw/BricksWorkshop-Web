# 网站移动端适配方案 (Mobile Responsive Plan)

## 1. 目标与背景 (Summary)
当前网站在移动端存在排版拥挤、字体过大导致的换行问题、组件间距过大（如固定的 `py-32` 导致过多留白）以及部分交互（如 Gallery 横向滚动）在手机上体验不佳的问题。
本计划旨在通过全面应用 Tailwind CSS 的响应式断点（`sm`, `md`, `lg`），使所有组件在手机、平板和桌面端均有出色的显示效果和交互体验。

## 2. 现状分析 (Current State Analysis)
- **Hero 区域**: 标题文字（`text-6xl`，60px）对于部分手机屏幕过宽（"BricksWorkshop" 有 14 个字符，会导致溢出）。背景发光圆圈 (`w-96`) 尺寸固定。按钮在移动端未铺满。
- **全局间距**: 几乎所有的 Section 都采用了 `py-32`（上下 128px）的固定大间距，在手机上非常占据屏幕。各处标题均采用 `text-4xl`，略显偏大。
- **Gallery (风采展示)**: 当前采用基于 `framer-motion` 的强制水平错位滚动（`w-[250vw]`），在手机屏幕上的操作不够自然。
- **Statistics (数据统计)**: `grid-cols-2` 搭配 `text-5xl`（48px）的数字，在小屏幕手机上会显得拥挤。
- **Footer (页脚)**: 顶部背景圆圈尺寸固定，在手机上内边距过大。

## 3. 具体修改方案 (Proposed Changes)

### 3.1 调整全局间距与版式 (Global Typography & Spacing)
- 将所有主要区域（`About`, `Curriculum`, `Pathway`, `Gallery`, `FAQ`）的外边距由固定的 `py-32` 调整为响应式的 `py-16 sm:py-24 lg:py-32`。
- 将所有主要区域的标题字号由 `text-4xl sm:text-5xl` 调整为响应式的 `text-3xl sm:text-4xl md:text-5xl`，避免在窄屏手机上发生不雅换行。
- 将各处的说明段落字号由 `text-xl` 调整为 `text-lg sm:text-xl md:text-2xl`，确保移动端文字具备良好的可读性。

### 3.2 组件特定修改详情 (Component Specific Fixes)

#### `src/components/Hero.tsx`
- **标题文字**: 修改为 `text-4xl sm:text-6xl md:text-8xl lg:text-9xl`，解决小屏宽度溢出。
- **描述文字**: 修改为 `text-lg sm:text-xl md:text-2xl`。
- **操作按钮**: 改为 `w-full sm:w-auto`，使得在移动端按钮能占满宽度，方便触控；并在移动端将两个按钮垂直堆叠或均匀分布。
- **背景模糊球**: 修改固定尺寸 `w-96 h-96` 为响应式尺寸 `w-64 h-64 sm:w-96 sm:h-96`，防止由于脱离文档流导致出现横向滚动条或撑破页面。

#### `src/components/Statistics.tsx`
- **数值字号**: 将数字字体从 `text-5xl md:text-6xl` 调整为 `text-4xl sm:text-5xl md:text-6xl`。
- **网格间距**: `gap-8 sm:gap-12` 调整为 `gap-6 sm:gap-8 lg:gap-12`。

#### `src/components/About.tsx`
- **间距**: 顶级 `<section>` 间距采用响应式 `py-16 sm:py-24 lg:py-32`。
- **布局**: 文字描述部分的间距从 `gap-8 lg:gap-24` 优化为 `gap-6 sm:gap-8 lg:gap-24`，并适当缩小手机端的下边距 `mb-12 sm:mb-20`。

#### `src/components/Curriculum.tsx`
- **间距**: 顶级 `<section>` 间距采用响应式 `py-16 sm:py-24 lg:py-32`。
- **标题**: 响应式缩小标题字号。

#### `src/components/Pathway.tsx`
- **间距**: 顶级 `<section>` 间距采用响应式 `py-16 sm:py-24 lg:py-32`。
- **标题**: 响应式缩小标题字号。

#### `src/components/Gallery.tsx`
- **根据用户反馈**: 在移动端放弃横向视差滚动，改为更自然的垂直瀑布流排版。
- **实现方式**: 
  - 添加针对移动端的结构：`<div className="md:hidden flex flex-col gap-6">`，并垂直渲染每一张图片。
  - 将原有的视差动画结构限制在桌面端：`<div className="hidden md:flex flex-col ...">`。
- **间距**: `<section>` 间距采用响应式 `py-16 sm:py-24 lg:py-32`。

#### `src/components/FAQ.tsx`
- **间距**: 顶级 `<section>` 间距采用响应式 `py-16 sm:py-24 lg:py-32`。
- **折叠面板**: 缩小内边距至 `px-4 sm:px-6`，标题文字调整为 `text-base sm:text-lg`。

#### `src/components/Footer.tsx`
- **间距**: `<section>` 间距调整为响应式 `py-12 sm:py-16 lg:py-24`。
- **网格间距**: 移动端下减少各栏之间的空隙。

## 4. 假设与决策 (Assumptions & Decisions)
- **响应式断点遵循 Tailwind 默认规范**：即 `sm`（640px+），`md`（768px+），`lg`（1024px+）。
- **组件结构基本保持不变**：我们主要通过修改 Tailwind Class 来实现响应式布局，仅在 `Gallery.tsx` 中为适配移动端体验引入少量的结构分支。
- **不新增额外 CSS 规则**：所有的适配修改均能通过现有的 Tailwind 实用类完成。

## 5. 验证步骤 (Verification Steps)
1. 运行开发服务器 (`npm run dev`)。
2. 使用 OpenPreview 工具在浏览器中打开页面。
3. 检查控制台无报错。
4. 使用浏览器开发者工具切换到移动端视图（如 iPhone 12/13 或更小屏幕尺寸，宽度 < 400px）。
5. 验证：
   - Hero 区域标题不会溢出屏幕，按钮完整可点击。
   - 每个区块上下间距适中，无需进行冗长的滚动。
   - Gallery 区域在移动端正确变为上下滚动的图片堆叠模式。
   - 各处文字无错乱截断，横向无多余的滚动条出现。
