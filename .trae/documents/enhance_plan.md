# 卓越科技BricksWorkshop 网站优化与增强计划

## 1. 目标与现状分析
- **目标**：解决导航按钮失效问题，丰富网站内容（增加数据统计区块、丰富课程体系展示），提升动画的惊艳程度，增强各个板块之间的连贯性，并替换首页的不明灰色细竖线为动态滚动提示。
- **现状**：
  - 导航栏和页脚的链接目前均为 `#`，无法跳转。
  - 各个板块（Hero, About, Curriculum, Gallery）内容较为单薄，缺乏真实感的数据支撑和配图。
  - 首页下方有一条使用背景渐变实现的竖线，用户体验不佳。
  - 板块间的过渡仅依赖普通的透明度渐变，缺乏视差、粘性或空间感等高级连贯动画。

## 2. 拟实施的变更
### 2.1 修复导航与平滑滚动
- **文件**：`src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/Hero.tsx`, `src/components/About.tsx`, `src/components/Curriculum.tsx`, `src/components/Gallery.tsx`, `src/index.css`
- **操作**：
  - 在各个主区块的外层 `<section>` 添加对应的 `id`（如 `id="home"`, `id="about"`, `id="curriculum"`, `id="gallery"`）。
  - 更新 Navbar 和 Footer 中的 `href` 属性指向对应的 `id`。
  - 在全局 CSS 或 HTML 中启用 `scroll-behavior: smooth`。

### 2.2 优化首页 (Hero) 与替换竖线
- **文件**：`src/components/Hero.tsx`
- **操作**：
  - 移除导致“不明灰色细竖线”的 `div`。
  - 引入 `lucide-react` 的 `Mouse` 或 `ChevronDown` 图标，添加上下浮动（Bounce）动画，明确提示用户向下滚动。
  - 为首屏标题和文字增加更细腻的错开（Stagger）动画和视差位移。

### 2.3 新增数据统计区块 (Statistics)
- **文件**：`src/components/Statistics.tsx`（新建）, `src/pages/Home.tsx`
- **操作**：
  - 在“关于我们”或“首页”下方插入一个新的数据统计区块，展示例如“500+ 服务学员”、“50+ 获奖次数”、“10+ 合作学校”等醒目数字。
  - 使用 `framer-motion` 和 `useInView` 实现数字从 0 滚动到目标值的动画，增加网站内容的厚度与科技感。

### 2.4 丰富课程体系展示 (Curriculum)
- **文件**：`src/components/Curriculum.tsx`
- **操作**：
  - 为 VEX 123、VEX GO、VEX IQ 增加对应的机器人/硬件配图（使用高质量的 Unsplash 占位图）。
  - 优化卡片布局：由纯文字变为“图文并茂”的形式。当鼠标悬浮时，图片可以有放大或视差效果，文字说明更加详细。
  - 增加卡片的 3D 倾斜（Tilt）或进场错开动画，使其更具视觉冲击力。

### 2.5 增强板块连贯性与高级动画
- **文件**：`src/pages/Home.tsx`, `src/components/About.tsx`
- **操作**：
  - 利用 `framer-motion` 的 `useScroll` 和 `useTransform`，为页面的背景或装饰元素（如彩虹光晕）增加跟随滚动的视差效果，贯穿整个页面。
  - 在板块之间增加视觉交错（例如使用 `sticky` 定位让上一个板块在下一个板块滑入时保持固定并逐渐变暗），打破传统单页的切割感。

## 3. 假设与决策
- **图片资源**：课程体系中的机器人配图暂时使用 Unsplash 上的高质量科技/积木类占位图。
- **色彩规范**：继续沿用已有的极简全白背景+彩虹高饱和度点缀色。
- **性能**：大量使用 `framer-motion` 时，会注意使用 `will-change` 或适当简化 DOM 结构以保证滚动帧率。

## 4. 验证步骤
1. 点击导航栏各个按钮，确认页面能平滑滚动到对应区块。
2. 检查首页下方，确认灰色细竖线已被动态的鼠标/箭头图标替代。
3. 滚动页面，验证新增的统计区块数字动画是否正常触发。
4. 查看课程体系板块，确认已加入图片并且排版更加丰富，悬浮动画流畅。
5. 整体浏览页面，体验各板块之间的过渡是否连贯、自然，没有生硬的断层。