module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'src',
  root: 'src/',
  staticFileGlobs: [
    'src/index.html',
    'src/**.js',
    // 'src/**.css',
    'src/assets/images/*'
  ],
  runtimeConfig: [{
    urlPattern: /jsonplaceholder\.typicode\.com\/photos/,
    handler: 'networkFirst'
  }]
};
