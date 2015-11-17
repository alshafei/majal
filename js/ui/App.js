Class('App').inherits(Widget)({
    prototype : {
        run : function() {
            this.el = this.element[0];
            this.spinContainer = this.el.querySelector('.majal__spinning-text-container');
            this.logosContainer = this.el.querySelector('.majal__logos-container');

            this.appendChild(new SpinningText({
                name : 'descriptionSpinnerWidget'
            })).render(this.spinContainer);

            this.appendChild(new LogosFooter({
                name : 'logosFooterWidget'
            })).render(this.logosContainer);

            this.descriptionSpinnerWidget.setup([
                {
                    descriptionText : 'We create platforms with two complementary goals: freedom of expression and access to information.'
                },

                {
                    descriptionText : 'Our vision is to help build informed communities that celebrate and protect diversity and promote social justice.'
                },

                {
                    descriptionText : 'I need some burritoz I need some burritoz I need some burritoz I need some burritoz'
                },

                {
                    descriptionText : 'hell yeah bro I need some burritoz I need some burritoz'
                },
                {
                    descriptionText : 'hell yeah bro I need some'
                }
            ]);

            this.logosFooterWidget.setup([
                {
                   logoInfo : {
                        image : 'assets/logos/CVorg-logo-1x.png',
                        url : 'http://wasd.com.mx/',
                        video : 'assets/video/cvorg.mp4'
                    }  
                },
                {
                    logoInfo : {
                        image : 'assets/logos/met-logo-1x.png',
                        url : 'http://wasd.com.mx/',
                        video : 'assets/video/MET_low.mp4'
                    } 
                },
                {
                   logoInfo : {
                        image : 'assets/logos/AHWAA-logo-1x.png',
                        url : 'http://wasd.com.mx/',
                        video : 'assets/video/ahwaa_low.mp4'
                    }  
                },
                {
                    logoInfo : {
                        image : 'assets/logos/MRorg-Logo-1x.png',
                        url : 'http://wasd.com.mx/',
                        video : 'assets/video/mr-low.mp4'
                    } 
                },
                {
                   logoInfo : {
                        image : 'assets/logos/mo-logo-1x.png',
                        url : 'http://wasd.com.mx/',
                        video : 'assets/video/cvby.mp4'
                    }  
                },
                {
                    logoInfo : {
                        image : 'assets/logos/CVby-logo-1x.png',
                        url : 'http://wasd.com.mx/',
                        video : 'assets/video/cvby.mp4'
                    } 
                },


            ]);

            this.descriptionSpinnerWidget.spinDescription();

            return this;
        }
    }
});
