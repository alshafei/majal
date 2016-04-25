import MediaQueryListener from './media-queries';
import template from './template';

/* global Ractive */

let mq;

export default function(node, step, length, selector) {
  const items = Array.prototype.slice.call(node.querySelectorAll(selector));

  let stepsLength = (items.length - 1) / length;

  function hideNodes(currentOffset) {
    items.forEach((item, k) => {
      if ((k >= currentOffset) && (k <= (currentOffset + length - 1))) {
        item.style.display = 'inline-block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  let placeholder = document.createElement('div');

  node.parentNode.appendChild(placeholder);

  let paginate = new Ractive({
    el: placeholder,
    template,
    data() {
      return {
        currentStep: step - 1,
        maxLength: stepsLength,
        allSteps: new Array(Math.ceil(stepsLength + 1))
      };
    },
    onrender() {
      mq = mq || new MediaQueryListener();

      this.observe('currentStep', (offset) => {
        hideNodes(offset);
      });

      this.on('changeStep', function(e) {
        this.set('currentStep', e.index.step);
        return false;
      });
    }
  });

  return {
    teardown: function () {
      paginate.teardown()
        .then(() => {
          placeholder.parentNode.removeChild(placeholder);
        });
    }
  };
}
