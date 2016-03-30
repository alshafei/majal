var stripe = require('stripe')(CONFIG[CONFIG.environment].stripeApiKey)
var HomeController = Class('HomeController').inherits(BaseController)({
  beforeActions : [
    // {
    //   before : ['_beforeIndex'],
    //   actions : ['index']
    // }
  ],
  prototype : {
    index : function(req, res, next) {
      res.render('home/index.html', {layout : 'application'});
    },

    donation : function(req, res, next) {
      var token_id = req.body.id
      var amount = +req.body.amount

      if (!token_id || !amount)
      {
        res.status(400).json({message: 'invalid input'})
      }

      logger.info('Donation (%s) %d', token_id, amount/100);

      function charge_handler(error, charge)
      {
        if (error)
        {
          logger.error(error.stack)
          res.status(500).end('Service Error')
        }
        else
        {
          logger.info('Charge', charge);
          res.end()
        }
      }

      stripe.charges.create({
        amount: amount,
        currency: 'USD',
        source: token_id,
        description: 'Donation'
      }, charge_handler);
    },
  }
});

module.exports = new HomeController();
