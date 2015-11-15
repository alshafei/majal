Class('LogosFooter').inherits(Widget)({

    //HTML : '<p>This is our Work</p>',

    ELEMENT_CLASS : 'majal__logos-wrapper',
    
    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);

            console.log('Logos footer lodaded');
        },

        setup : function setup(logoImages) {
            console.log(logoImages);
            logoImages.forEach(function(data ,index){
                console.log(data);
                this.appendChild(new Logo({
                    name : 'logo_' + index,
                    data : 
                    {
                        image   : data.logoInfo.image,
                        url     : data.logoInfo.url
                    }
                })).render(this.element);
            }, this);

            return this;
        },
    }
	
});