if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vue.common.prod.js')
} else {
  module.exports = require('./vue.common.dev.js')
}



//////////////////
// WEBPACK FOOTER
// ./~/vue/dist/vue.common.js
// module id = 120
// module chunks = 46