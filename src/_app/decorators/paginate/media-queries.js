class MediaQueryListener {
  constructor() {
    this.afterElement = window.getComputedStyle ? window.getComputedStyle(document.body, ':after') : false;
    this.currentBreakpoint = '';
    this.lastBreakpoint = '';
    this.init();
  }

  init() {
    ['resize', 'orientationchange', 'load'].forEach((evt) => {
      window.addEventListener(evt, () => {
        console.log(evt, this.afterElement.getPropertyValue('content'));
        this.currentBreakpoint = this.afterElement.getPropertyValue('content');

        if (this.currentBreakpoint !== this.lastBreakpoint) {
          this.lastBreakpoint = this.currentBreakpoint;
          console.log(this.lastBreakpoint);
        }
      });
    });
  }
}

export default MediaQueryListener;
