Class('LogosFooter').inherits(Widget)({

    ELEMENT_CLASS : 'majal__logos-wrapper center',
    
    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);
        },

        setup : function setup(logoImages) {
            logoImages.forEach(function(data ,index){
                this.appendChild(new Logo({
                    name : 'logo_' + index,
                    data : 
                    {
                        image   : data.logoInfo.image,
                        url     : data.logoInfo.url,
                        video   : data.logoInfo.video
                    }
                })).render(this.element);
            }, this);

            this.previousVideo = 0;
            this.currentVideo = 0;

            this.videoContainer = document.querySelector ('.video-wrapper');
            this.videoOverlay = document.createElement("div");

            this.videoOverlay.classList.add('video-overlay');
            this.videoContainer.appendChild(this.videoOverlay);

            this.logo_5.video.play();
            this.logo_5.video.classList.add('active');

            this._bindEvents();

            return this;
        },

        _bindEvents : function _bindEvents() {
            this.children.forEach( function(value, index){
                value.bind('activate', this._videoPlay.bind(this));
            }, this);
        },

        _videoPlay : function _videoPlay(ev) {
            if(ev.target.video.classList.contains('active') !== true){
                previousVideo = document.querySelectorAll('video.active');

                ev.target.video.classList.add('active');
                ev.target.video.play();

                previousVideo[0].classList.remove('active');
                previousVideo[0].pause();
                previousVideo[0].load();
                ev.target.activate();
            }          
        }
    } 
	
});