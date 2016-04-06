var fs = require('fs'),
    path = require('path'),
    imageSize = require('fast-image-size');

module.exports = function() {
  var destDir = path.join(this.opts.dest, 'public');

  function buildImageSprite(src) {
    var baseImg = path.join(destDir, src),
        foundImages = [baseImg + '.png', baseImg + '@2x.png'].filter(fs.existsSync);

    if (!foundImages[0]) {
      throw new Error('Missing sprite: ' + src);
    }

    var dimensions = imageSize(foundImages[0]);

    return [
      '<img src="/', src, '.png"',
      ' height="', dimensions.height, '"',
      ' width="', dimensions.width, '"',
      ' srcset="', foundImages.map(function(f) {
        return '/' + path.relative(destDir, f) + ' ' + (f.indexOf('@2x') > -1 ? 2 : 1) + 'x';
      }).join(', '), '">'
    ].join('');
  }

  this.opts.compileOptions.locals = {
    imageSprite: buildImageSprite
  };
};
