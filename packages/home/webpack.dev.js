const merge = require('webpack-merge')

const PATH = require('../config/path')
const dev = require('../config/webpack.dev.js')

module.exports = merge(dev, {
  entry: {
    home: `${PATH.source}/service.js`
  },
  output: {
    library: 'home'
  },
  devServer: {
    port: 8060
  }
})
