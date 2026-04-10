# 百度搜索普通收录 API 提交方案

## 摘要
基于百度搜索资源平台提供的文档，为项目实现“普通收录”的 API 推送脚本。该脚本将主动向百度搜索推送网站的 URL，缩短爬虫发现网站链接的时间，从而加快收录。

## 现状分析
- 目前项目是一个使用 Vite + React 构建的前端应用，配置了通过 Cloudflare (Wrangler) 进行部署。
- 项目中还没有自动或手动化的 SEO URL 推送机制。
- 根据百度文档要求，API 提交需要以 `POST` 方式请求指定接口，`Content-Type` 为 `text/plain`，请求体为换行符分隔的 URL 列表。

## 实施步骤
1. **创建推送脚本 (`scripts/baidu-push.js`)**
   - 使用 Node.js 原生的 `fetch` API（要求 Node.js 18+）编写一个脚本。
   - 请求地址：`http://data.zz.baidu.com/urls?site=https://www.vexiq8009.website&token=d9bYECbIVVYi99L5`
   - 请求头：设置 `Content-Type: text/plain`。
   - 请求体：将需要提交的 URL（如 `https://www.vexiq8009.website/`）用 `\n` 拼接成字符串。
   - 响应处理：接收返回的 JSON 数据。如果是 200 状态码，打印 `success`（成功条数）和 `remain`（剩余配额）；如果是 4xx/500，打印具体的 `error` 和 `message`。

2. **更新 `package.json`**
   - 在 `scripts` 字段中新增一个命令：`"baidu-push": "node scripts/baidu-push.js"`。
   - 这样开发者可以通过执行 `pnpm run baidu-push` 或 `npm run baidu-push` 随时手动推送网站链接。

## 假设与决策
- **Node.js 版本**：项目中 `@types/node` 为 `v22`，表明开发环境为较新的 Node 版本，因此直接使用原生的 `fetch`，无需安装 `axios` 等额外依赖。
- **目标 URL**：目前暂定推送主站地址 `https://www.vexiq8009.website/`。如果后续有更多页面（如动态生成的页面），可以在该脚本中扩展 URL 列表。
- **触发时机**：为了避免配额浪费，暂时配置为独立命令手动触发，而不是每次开发或构建都自动触发。

## 验证步骤
1. 运行命令：`pnpm run baidu-push`。
2. 观察终端输出，期望看到类似 `{ "success": 1, "remain": 2999, "not_same_site": [], "not_valid": [] }` 的成功响应。
3. 若失败，根据输出的 `error` 和 `message`（如超额、token 错误等）进行排查。