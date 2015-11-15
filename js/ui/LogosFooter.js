Class('LogosFooter').inherits(Widget)({

    ELEMENT_CLASS : 'majal__logos-wrapper',
    
    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);

            console.log('Logos footer lodaded');
        },

        setup : function setup(logoImages) {
            logoImages.forEach(function(data ,index){
                this.appendChild(new Logo({
                    name : 'logo_' + index,
                    element : $('.majal__logos-row').find('div'),
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