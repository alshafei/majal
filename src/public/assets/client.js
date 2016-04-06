var Application = require('../../_app');

function main() {
  var app = new Application({
    el: '#app',
    data: function() {
      return {
        currentPath: document.location.pathname
      };
    }
  });
}

main();
