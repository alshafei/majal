import template from './template';

import home from './pages/home';
import about from './pages/about-us';
import ahwaa from './pages/ahwaa';
import cvby from './pages/crowdvoice-by';
import cvorg from './pages/crowdvoice-org';
import met from './pages/mideast-tunes';
import mr from './pages/migrant-rights';
import moac from './pages/moac';
import press from './pages/press-room';
import services from './pages/services';

const partials = {
  home,
  about,
  ahwaa,
  cvby,
  cvorg,
  met,
  mr,
  moac,
  press,
  services
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
