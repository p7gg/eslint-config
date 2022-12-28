const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS)
  console.warn('[@p7gg/eslint-config] TypeScript is not installed, fallback to JS only.')

module.exports = {
  plugins: ['solid'],
  extends: [
    TS
      ? 'plugin:solid/typescript'
      : 'plugin:solid/recommended',
    TS
      ? '@p7gg/eslint-config-ts'
      : '@p7gg/eslint-config-basic',
  ],
}
