const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({})

module.exports = {
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },

  distDir: 'build',
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  }
}