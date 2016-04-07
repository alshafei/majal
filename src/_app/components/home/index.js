import template from './template';

/* global alert */

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
