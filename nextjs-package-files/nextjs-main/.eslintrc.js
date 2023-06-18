module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  transpilePackages: ['@acme/ui', 'lodash-es'],
  extends: ['next/babel', 'next/core-web-vitals'],
};