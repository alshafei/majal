global.Ractive = require('ractive/ractive.runtime');

var $ = require('./build/server');

var express = require('express');

var app = express();

app.use('/assets', express.static('build/public/assets'));
app.use('/index.html', express.static('build/public/index.html'));

app.get('/*', function (req, res) {
  res.send($.Majal.render(req.url));
});

app.listen(8001, function () {
  console.log('Listening on http://localhost:8001');
});

process.on('SIGINT', function() {
  process.exit();
});
