import template from './template';

export default {
  name: 'home',
  matches: /^\/$/,
  component: {
    template: template,
    onrender: function() {
      this.on('showMe', function() {
        alert('Hey dude!');
      });
    }
  }
};
