module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*'
  ],
  runtimeConfig: [{
    urlPattern: /jsonplaceholder\.typicode\.com\/photos/,
    handler: 'networkFirst'
  }]
};
