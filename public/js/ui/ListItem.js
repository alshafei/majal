Class('ListItem').inherits(Widget)({
    HTML : '<li></li>',

    ELEMENT_CLASS : 'list-item',

    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);

            this.el = this.element[0];

            this._setup();
        },

        _setup : function _setup() {
            this.el.innerHTML = this.itemDescription.listItem;

            return this;
        }
    }
});
