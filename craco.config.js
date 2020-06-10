module.exports = {
  webpack: {
    target: 'electron-renderer',
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
