var Application = require('./_app');

var app = new Application({
  el: '#app',
  data: function() {
    return {
      currentPath: document.location.pathname
    };
  }
});
