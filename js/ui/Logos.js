Class('Logo').inherits(Widget)({

    HTML : '\
        <div>\
            <a href="" target="_blank"> <div><img src="" href=""/></div> </a>\
        </div>\
    ',

    ELEMENT_CLASS : 'majal-product-logo',

    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);

            this.el = this.element;

            this.elementLink = this.el.find('a');
            this.elementImage = this.el.find('img');
            this.video = document.createElement("video");
            this.videoContainer = document.querySelector ('.video-wrapper');

            this._setup();
            this._bindEvents();
        },

        _setup : function _setup() {
            this.elementLink.attr('href', this.data.url);
            this.elementImage.attr('src', this.data.image);
            this.video.setAttribute('muted',true);
            this.video.setAttribute('loop', true);
            this.video.setAttribute('type', 'video/mp4');
            this.video.setAttribute('src', this.data.video);
            this.videoContainer.appendChild(this.video);
            
            
            return this;
        },

        _bindEvents : function _bindEvents() {
            this.element.on('mouseover', this.activate.bind(this));
            this.element.on('mouseout', this.deactivate.bind(this));
        }
    }
});
