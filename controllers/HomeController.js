var HomeController = Class('HomeController').inherits(BaseController)({
  beforeActions : [
    // {
    //   before : ['_beforeIndex'],
    //   actions : ['index']
    // }
  ],
  prototype : {
    index : function(req, res, next) {
      res.render('home/index.html', {layout : 'application', posts : ["1", "2", "3", "4", "5"]});
    },

    process : function(req, res, next) {
      return next(new Error('Not Implemented'));
    },
  }
});

module.exports = new HomeController();
