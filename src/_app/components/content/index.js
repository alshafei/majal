import template from './template';

import home from './pages/home';
import about from './pages/about-us';
import press from './pages/press-room';
import services from './pages/services';

import ahwaa from './pages/products/ahwaa';
import cvby from './pages/products/crowdvoice-by';
import cvorg from './pages/products/crowdvoice-org';
import met from './pages/products/mideast-tunes';
import mr from './pages/products/migrant-rights';
import moac from './pages/products/moac';

const partials = {
  home,
  about,
  press,
  services,
  ahwaa,
  cvby,
  cvorg,
  met,
  mr,
  moac
};

var matches = new RegExp('^\\/(' + Object.keys(partials).join('|') + ')?$');

export default {
  name: 'content',
  matches,
  component: {
    template,
    partials,
    data() {
      return {
        getPage() {
          return this.get('currentComponent.params.0') || 'home';
        }
      };
    }
  }
};
