/**
---
_bundle: Majal
---
*/

import Application from './_app';
import layout from './_app/resources/layout';
import { findComponent } from './_app/components';

export function render(path) {
  return layout()
    .replace('__APP__', (new Application({
      data() {
        return {
          currentPath: path,
          currentComponent: findComponent(path)
        };
      }
    })).toHTML());
}
