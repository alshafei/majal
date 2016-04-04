var Majal = require('./_app');

var app = new Majal({
  el: '#app',
  data: function() {
    return {
      currentPath: document.location.pathname
    };
  }
});
