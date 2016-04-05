module.exports = {
  name: 'home',
  matches: /^\/$/,
  component: {
    template: require('./template'),
    data: function() {
      return {
        someValue: 'OSOM'
      };
    },
    onrender: function() {
      this.on('showMe', function() {
        alert('Hey dude!');
      });
    }
  }
};
