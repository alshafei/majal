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
                }
            ]);

            this.logosFooterWidget.setup([
                {
                   logoInfo : {
                        image : 'assets/logos/CVorg-logo-1x.png',
                        url : 'http://crowdvoice.org/',
                        videoMp4 : 'assets/video/cvorg.mp4',
                        videoWebm : 'assets/video/cvorg.webm',
                        videoOgv : 'assets/video/cvorg.ogv',
                        poster : 'assets/img/videoStills/CVORG_img.jpg'
                    }  
                },
                {
                    logoInfo : {
                        image : 'assets/logos/met-logo-1x.png',
                        url : 'http://mideastunes.com/',
                        videoMp4 : 'assets/video/MET_low.mp4',
                        videoWebm : 'assets/video/MET_low.webm',
                        videoOgv : 'assets/video/MET_low.ogv',
                        poster : 'assets/img/videoStills/MET_img.jpg'
                    } 
                },
                {
                   logoInfo : {
                        image : 'assets/logos/AHWAA-logo-1x.png',
                        url : 'https://ahwaa.org/',
                        videoMp4 : 'assets/video/ahwaa_low.mp4',
                        videoWebm : 'assets/video/ahwaa_low.webm',
                        videoOgv : 'assets/video/ahwaa_low.ogv',
                        poster : 'assets/img/videoStills/AHWAA_img.jpg'
                    }  
                },
                {
                    logoInfo : {
                        image : 'assets/logos/MRorg-Logo-1x.png',
                        url : 'http://www.migrant-rights.org/',
                        videoMp4 : 'assets/video/mr-low.mp4',
                        videoWebm : 'assets/video/mr-low.webm',
                        videoOgv : 'assets/video/mr-low.ogv',
                        poster : 'assets/img/videoStills/MRO_img.jpg'
                    } 
                },
                {
                   logoInfo : {
                        image : 'assets/logos/mo-logo-1x.png',
                        url : 'http://makingofacentury.com/',
                        videoMp4 : 'assets/video/MoaC.mp4',
                        videoWebm : 'assets/video/MoaC.webm',
                        videoOgv : 'assets/video/MoaC.ogv',
                        poster : 'assets/img/videoStills/MOAC_img.jpg'
                    }  
                },
                {
                    logoInfo : {
                        image : 'assets/logos/CVby-logo-1x.png',
                        url : 'http://crowdvoice.by/',
                        videoMp4 : 'assets/video/cvby.mp4',
                        videoWebm : 'assets/video/cvby.webm',
                        videoOgv : 'assets/video/cvby.ogv',
                        poster : 'assets/img/videoStills/CVB_img.jpg'
                    } 
                },


            ]);

            this.descriptionSpinnerWidget.spinDescription();

            return this;
        }
    }
});
