# ffd-distributor-web 发发单广告投放商业务流程

- 项目规约继承【[阿里巴巴前端规范](https://alibaba.github.io/f2e-spec/zh/)】
- [开发框架Nuxt 3中文文档](https://www.nuxt.com.cn/) 开发查阅.
- [shadcn-vue组件库](https://www.shadcn-vue.com/docs)

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Git提交规范
### 基本的 message 格式

```
<type>[optional scope]: <subject>

[optional body]

[optional footer(s)]
```

其中 message header（即首行）必选，scope、body 和 footer 可选。



### type 用来描述本次提交的改动类型，可选值及对应含义如下：

- feat: 新增功能

> git add -m "feat: 新增功能"

- fix: 修复 bug
> git add -m "fix: 修复 bug"

- docs: 文档相关的改动
> git add -m "docs: 文档相关的改动"

- style: 对代码的格式化改动，代码逻辑并未产生任何变化(例如代码缩进，分号的移除和添加)
> git add -m "style: 对代码的格式化改动"

- test: 新增或修改测试用例
> git add -m "test: 新增或修改测试用例"

- refactor: 重构代码或其他优化举措
> git add -m "refactor: 重构代码或其他优化举措"

- chore: 项目工程方面的改动，代码逻辑并未产生任何变化
> git add -m "chore: 项目工程方面的改动"

- revert: 恢复之前的提交
> git add -m "revert: 恢复之前的提交"

> 注意：
>
> 1. commit message 的 type 和 changelog 的 type 存在紧密联系，然而它们两者之间并非一一对应，比如在 changelog 中一般不会指出文档 docs 或测试用例 test 等方面发生的变化
> 2. css 样式文件的修改一般属于 feat 或者 fix，并不是 style
> 3. type:需要空一格再输入message