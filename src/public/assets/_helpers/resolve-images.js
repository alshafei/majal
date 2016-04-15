let hasCanvas = null;

var sheet = window.document.styleSheets[0];

sheet.insertRule('.image{opacity:0}');

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
