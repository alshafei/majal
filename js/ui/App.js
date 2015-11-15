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
                    descriptionText : 'freedom of expression and access to information.'
                },

                {
                    descriptionText : 'Crowdvoice is awesome broski'
                },

                {
                    descriptionText : 'I need some burritoz'
                },

                {
                    descriptionText : 'hell yeah bro'
                }
            ]);

            this.logosFooterWidget.setup([
                {
                   logoInfo : {
                        image : 'http://wasd.com.mx/wp-content/uploads/2013/11/LogoW011.png',
                        url : 'http://wasd.com.mx/'
                    }  
                },
                {
                    logoInfo : {
                        image : 'http://wasd.com.mx/wp-content/uploads/2013/11/LogoW011.png',
                        url : 'http://wasd.com.mx/'
                    } 
                },
                {
                   logoInfo : {
                        image : 'http://wasd.com.mx/wp-content/uploads/2013/11/LogoW011.png',
                        url : 'http://wasd.com.mx/'
                    }  
                },
                {
                    logoInfo : {
                        image : 'http://wasd.com.mx/wp-content/uploads/2013/11/LogoW011.png',
                        url : 'http://wasd.com.mx/'
                    } 
                },
                {
                   logoInfo : {
                        image : 'http://wasd.com.mx/wp-content/uploads/2013/11/LogoW011.png',
                        url : 'http://wasd.com.mx/'
                    }  
                },
                {
                    logoInfo : {
                        image : 'http://wasd.com.mx/wp-content/uploads/2013/11/LogoW011.png',
                        url : 'http://wasd.com.mx/'
                    } 
                },


            ]);

            this.descriptionSpinnerWidget.spinDescription();

            return this;
        }
    }
});
