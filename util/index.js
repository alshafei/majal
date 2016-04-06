var path = require('path');

module.exports = function() {
  var publicDir = path.join(this.opts.src, 'public');

  this.opts.compileOptions.locals = {
    imageTag: require('./image-tag')(publicDir)
  };
};
