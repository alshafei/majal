import content from './content';
import sidebar from './sidebar';
import donation from './donation';

var fixedComponents = [
  content,
  sidebar,
  donation
];

var components = {};

/* global Ractive */

fixedComponents.forEach(function(handler) {
  components[handler.name] = Ractive.extend(handler.component);
});

export function getComponents() {
  return components;
}

export function findComponent(path) {
  for (var key in fixedComponents) {
    var handler = fixedComponents[key];

    var matches = handler.matches && path.match(handler.matches);

    if (matches) {
      return {
        name: handler.name,
        params: matches.slice(1)
      };
    }
  }
}
