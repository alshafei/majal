require('./../css/style.less');

require('neon');
require('neon/stdlib');

var jQuery = require('./vendor/jquery-2.0.3.js');
window.jQuery = jQuery;
window.$ = jQuery;

require('./vendor/Widget.js');
require('./vendor/modernizr-custom.js');
require('./ui/JobList.js');
require('./ui/ListItem.js');
require('./ui/AnimatedDescription.js');
require('./ui/Logos.js');
require('./ui/LogosFooter.js');
require('./ui/SpinningText.js');
require('./ui/App.js');

require('./vendor/jquery.maskMoney.min.js');

$(window).ready(function() {
  window.AppInstance = new App({
      element : document.getElementsByTagName("body")
  }).run();
});
