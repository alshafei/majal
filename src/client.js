var templates = require('./_templates')

function main() {
  var app = new Ractive({
    el: '#app',
    init: function() {
      this.find('button').disabled = false;
    },
    template: templates[location.pathname.substr(1)] || function() {
      throw new Error('Probably a 404: ' + location.pathname);
    }
  });

  var t,
      n = 1;

  app.on('inc', function() {
    function update() {
      app.set('value', (new Date()).getMilliseconds());
    }

    clearInterval(t);

    t = setInterval(update, n * 33);

    n += 1;

    update();
  });
}

setTimeout(main, 3000);
