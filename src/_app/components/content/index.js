import template from './template';

import home from './pages/home';

export default {
  name: 'content',
  matches: /^\/(fua)?$/,
  component: {
    template,
    partials: {
      home
    },
    data () {
      return {
        getPage() {
          return this.get('currentComponent.params.0') || 'home';
        }
      };
    }
  }
};
