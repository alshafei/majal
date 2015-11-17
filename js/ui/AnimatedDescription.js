Class('AnimatedDescription').inherits(Widget)({
    HTML : '<p></p>',

    ELEMENT_CLASS : 'animated-description',

    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);

            this.el = this.element[0];

            this._setup();
        },

        _setup : function _setup() {
            this.el.innerHTML = this.description.descriptionText;

            return this;
        }
    }
});
