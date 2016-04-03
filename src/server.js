Majal.assets = {
  layout: require('./_templates/layout'),
  templates: require('./_templates')
};

Majal.view = function(path, locals) {
  var tpl = Majal.assets.templates[path];

  if (!tpl) {
    throw new Error('Probably a 404: /' + path);
  }

  return Majal.assets.layout()
    .replace('__APP__', (new Ractive({
      template: tpl,
      data: locals
    })).toHTML());
}
