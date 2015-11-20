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
                        videoMp4   : data.logoInfo.videoMp4,
                        videoWebm   : data.logoInfo.videoWebm,
                        videoOgv   : data.logoInfo.videoMp4,
                        poster  : data.logoInfo.poster
                    }
                })).render(this.element);
            }, this);

            this.previousVideo = 0;
            this.interval = 0;

            this.videoContainer = document.querySelector ('.video-wrapper');
            this.videoOverlay = document.createElement("div");

            this.videoOverlay.classList.add('video-overlay');
            this.videoContainer.appendChild(this.videoOverlay);

            this.logo_0.video.classList.add('active');
            this.logo_0.videoImage.classList.add('active');
            this.logo_0.video.play();

            this._bindEvents();
            this._activateLogoOnTime();

            return this;
        },

        _bindEvents : function _bindEvents() {
            this.children.forEach( function(value, index){
                value.bind('activate', this._stopTimer.bind(this));
                value.bind('deactivate', this._timerStarted.bind(this));
            }, this);
        },

        _videoPlay : function _videoPlay(ev) {
            if(ev.target.video.classList.contains('active') !== true){
                previousVideo = document.querySelectorAll('video.active');
                if (previousVideo.length > 0){
                    previousVideo[0].classList.remove('active');
                    ev.target.video.classList.add('active');
                    ev.target.video.play();
                
                    previousVideo[0].pause(); 
                }               
            } 
            if (ev.target.videoImage.classList.contains('active') !== true ) {
                previousVideoBackground = document.querySelectorAll('.videoBackground.active');
                if ( previousVideoBackground.length > 0){
                    previousVideoBackground[0].classList.remove('active');
                    ev.target.videoImage.classList.add('active');
                }
            }        
        },

        _stopTimer : function _stopTimer(ev){
            clearInterval(this.interval);
            this.previousVideo = 1;
            this._videoPlay(ev);
            this.children.forEach ( function(element){
                element.el[0].classList.remove('active');
            });
        },

        _timerStarted : function _timerStarted(){
            this._activateLogoOnTime();
        },

        _activateLogoOnTime : function _activateLogoOnTime(){
            var logos = [];
            this.children.forEach ( function(element){
                logos.push(element);
            });

            var logosLenght = logos.length;
            var position = 0;
            var previousPosition = 0;
            var previousPositionTwo = 0;
            var firstRun = 0;
            var previousJump = this.previousVideo;

            this.interval = setInterval( function(){ clockStart(); }, 5000);

            function previousPositionHandler(){
                logos[previousPosition].el.removeClass('active');
                logos[previousPosition].video.pause();
                logos[previousPosition].video.classList.remove('active');
                logos[previousPosition].videoImage.classList.remove('active');
            }

            function actualPositionHandler(){
                logos[position].el.addClass('active');
                logos[position].video.play();
                logos[position].video.classList.add('active');
                logos[position].videoImage.classList.add('active');
            }

            function clockStart() {
                if ( logos[previousPosition].el.hasClass('active') === true ){
                    if (firstRun >= 1){
                        previousPositionHandler();
                        actualPositionHandler();
                    }
                    previousPositionHandler();
                    actualPositionHandler();

                    firstRun = 1;
                } else {
                    if(previousJump === 1){
                       activeVideo = document.querySelectorAll('video.active');
                       activeVideoBackground = document.querySelectorAll('.videoBackground.active');
                        if( activeVideo.length > 0){
                            activeVideo[0].classList.remove('active');
                            activeVideo[0].pause();
                            activeVideo[0].load();
                        } 

                        if( activeVideoBackground > 0){
                            activeVideoBackground[0].classList.remove('active');
                        }
                    }
                    actualPositionHandler();
                }

                if ( position === logosLenght-1){
                    previousPosition = position;
                    position = 0;

                    return;
                }

                previousPosition = position;
                position++;
            }            
        }
    } 
	
});