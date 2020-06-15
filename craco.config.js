module.exports = {
  webpack: {
    target: 'electron-renderer',
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },
  babel: {
    loaderOptions: {
      env: {
        production: {
          plugins: ['emotion'],
        },
        development: {
          plugins: [['emotion', { sourceMap: true }]],
        },
      },
    },
  },
}
