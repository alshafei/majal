import template from './template';

/* global alert */

export default {
  name: 'home',
  matches: /^\/$/,
  component: {
    template,
    onrender() {
      this.on('showMe', () => alert('Hey dude!'));
    }
  }
};
