var fs = require('fs'),
    path = require('path'),
    imageSize = require('fast-image-size');

module.exports = function() {
  var destDir = path.join(this.opts.dest, 'public');

  function buildImageSprite(src) {
    var baseImg = path.join(destDir, src.substr(1)),
        foundImages = [baseImg + '.png', baseImg + '@2x.png'].filter(fs.existsSync);

    if (!foundImages[0]) {
      throw new Error('Missing sprite: ' + src);
    }

    var dimensions = imageSize(foundImages[0]);

    return [
      '<img src="', src + '.' + dimensions.type, '"',
      ' height="', dimensions.height, '"',
      ' width="', dimensions.width, '"',
      '>'
    ].join('');
  }

  this.opts.compileOptions.locals = {
    imageSprite: buildImageSprite
  };
};
