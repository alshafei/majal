let hasCanvas = null;
let wasInjected = false;

function injectStylesheetRules() {
  let css = '.fast-image{opacity:0}';
  let head = document.getElementsByTagName('head')[0];
  let style = document.createElement('style');

  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);

  wasInjected = true;
}

function isCanvasSupported() {
  if (hasCanvas === null) {
    const elem = document.createElement('canvas');
    hasCanvas = !!(elem.getContext && elem.getContext('2d'));
  }

  return hasCanvas;
}

function preload(el, src, width, height) {
  if (el.currentSrc.indexOf('data:') === -1) {
    el.style.opacity = 1;
    return;
  }

  if (!isCanvasSupported()) {
    el.src = src;
    el.style.opacity = 1;
    return;
  }

  const p = new Image();

  p.onload = function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(p, 0, 0, width, height);

    el.src = canvas.toDataURL('image/png');
    el.style.opacity = 1;
  };

  p.src = src;
}

export default function(nodes) {
  if (!wasInjected) {
    injectStylesheetRules();
  }

  nodes.forEach(function(img) {
    const sources = img.getAttribute('srcset').split(/\s*,\s*/)
      .map((source) => {
        const parts = source.split(/\s+/);

        return { src: parts[0], size: parseInt(parts[1], 10) };
      });

    for (let i in sources) {
      if (Math.round(window.devicePixelRatio) === sources[i].size) {
        preload(img, sources[i].src, img.width, img.height);
        break;
      }
    }
  });
}
