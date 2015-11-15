Class('Logo').inherits(Widget)({

    HTML : '\
        <div>\
            <a href="" target="_blank"> <img src="" href=""> </a>\
        </div>\
    ',

    ELEMENT_CLASS : 'majal-product-logo',

    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);

            this.el = this.element;

            this.elementLink = this.el.find('a');
            this.elementImage = this.el.find('img');

            this._setup();
        },

        _setup : function _setup() {
            this.elementLink.attr('href', this.data.url);
            this.elementImage.attr('src', this.data.image);
            
            return this;
        }
    }
});
