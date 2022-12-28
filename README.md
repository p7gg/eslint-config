# @p7gg/eslint-config

[![npm](https://img.shields.io/npm/v/@p7gg/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@p7gg/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Designed to work with TypeScript, React and Solid out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas
- Reasonable defaults, best practices, only one-line of config
- **Style principle**: Minimal for reading, stable for diff

## Usage

### Install

```bash
pnpm add -D eslint @p7gg/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@p7gg"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env. 

```js
// .eslintrc.js
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@p7gg'
}
```

## Extended Reading

Learn more about the context - [Why I don't use Prettier](https://p7gg.me/posts/why-not-prettier).

## License

[MIT](./LICENSE) License &copy; 2019-PRESENT [Gabriel Silva](https://github.com/p7gg/)
