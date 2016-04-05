module.exports = {
  name: 'home',
  matches: /^\/$/,
  component: {
    template: require('./template'),
    onrender: function() {
      this.on('showMe', function() {
        alert('Hey dude!');
      });
    }
  }
};
