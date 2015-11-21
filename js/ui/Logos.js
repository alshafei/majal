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
            this.videoImage = document.createElement("img");
            this.videoContainer = document.querySelector ('.video-wrapper');

            this._bindEvents();
            this._setup();
            
        },

        _setup : function _setup() {
            this.elementLink.attr('href', this.data.url);
            this.elementImage.attr('src', this.data.image);

            if (!Modernizr.video) {
                this.videoImage.classList.add('videoBackground');
                this.videoImage.setAttribute('src', this.data.poster);
                this.videoContainer.appendChild(this.videoImage);
            } else {
                var webm = document.createElement('source');
                webm.setAttribute('src', this.data.videoWebm);
                webm.setAttribute('type', 'video/webm');
                this.video.appendChild(webm);

                var ogv = document.createElement('source');
                ogv.setAttribute('src', this.data.videoOgv);
                ogv.setAttribute('type', 'video/ogg');
                this.video.appendChild(ogv);

                var mp4 = document.createElement("source");
                mp4.setAttribute('src', this.data.videoMp4);
                mp4.setAttribute('type', 'video/mp4');
                this.video.appendChild(mp4);

                this.video.setAttribute('muted',true);
                this.video.setAttribute('loop', true);
                this.video.setAttribute('poster', this.data.poster);
                this.videoContainer.appendChild(this.video);
            }

            return this;
        },

        _bindEvents : function _bindEvents() {
            this.element.on('mouseover', this.activate.bind(this));
            this.element.on('mouseout', this.deactivate.bind(this));
            this.element.on('touchstart', this.activate.bind(this));
            this.element.on('touchend', this.deactivate.bind(this));
            
        }
    }
});
