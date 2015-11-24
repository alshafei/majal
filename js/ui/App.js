Class('App').inherits(Widget)({
    prototype : {
        run : function() {
            this.el = this.element;
            this.body = document.getElementsByTagName("body")[0];
            this.spinContainer = this.el.querySelector('.majal__spinning-text-container');
            this.logosContainer = this.el.querySelector('.majal__logos-container');
            this.workWithUs = this.body.querySelector('.majal__work-with-us');
            this.backHome = this.body.querySelector('.majal__back-to-home');

            this.jobResponsabilities = this.el.querySelector('.majal__job-responsabilities');
            this.jobSkills = this.el.querySelector('.majal__job-skills');
            this.jobDesirable = this.el.querySelector('.majal__job-desirable');
            this.carouselContainer = this.el.querySelector('.majal__job-carousel-container');

            this.jobOverlay = this.el.querySelector('.majal__job-overlay-background');
            this.jobInformation = this.el.querySelector('.majal__job-overlay');


            this.appendChild(new JobList({
                name : 'jobResponsabilitiesList'
            })).render(this.jobResponsabilities);

            this.jobResponsabilitiesList.setupTitle([
                {
                    listTitle : 'RESPONSABILITIES'
                }
            ]);

            this.jobResponsabilitiesList.setup([
                {
                    listItem : 'Set up and manage effective financial management systems.'
                },
                {
                    listItem : 'Review and monitor budgets, record expenditures, process invoices, and regularly report to management.'
                },
                {
                    listItem : 'Oversee financial management of grants, including disbursement, expenditures, donor reporting and monitoring of deliverables; ensure earmarked funding is spent accordingly.'
                },
                {
                    listItem : 'Liaise with auditors.'
                },
                {
                    listItem : 'Develop and implement high-quality internal systems and procedures, covering admin, finance, HR and monitoring and evaluation.'
                },
                {
                    listItem : 'Creating and maintaining an organized archive of files such as proposals, budgets, staff contracts and other related documents. '
                },
                {
                    listItem : 'Human resources management and administration including: staffing, HR policies and systems, and office management.'
                },
                {
                    listItem : 'Implement and manage payroll.'
                }
            ]);

            this.appendChild(new JobList({
                name : 'jobSkillsList'
            })).render(this.jobSkills);

            this.jobSkillsList.setupTitle([
                {
                    listTitle : 'Skills'
                }
            ]);

            this.jobSkillsList.setup([
                {
                    listItem : 'Budget monitoring and providing narratives to financial figures.'
                },
                {
                    listItem : 'Strong analytical skills; confidence in financial analysis and quantitative data.'
                },
                {
                    listItem : 'IT skills including Excel, Word, Outlook email, PowerPoint, databases.'
                },
                {
                    listItem : 'High organisation skills with meticulous attention to detail.'
                },
                {
                    listItem : 'Proactive, problem solving approach; ability to work on own initiative in a decentralised team.'
                },
                {
                    listItem : 'Strong interpersonal skills and cultural awareness.'
                },
                {
                    listItem : 'Ability to work under pressure and to strict deadlines.'
                },
                {
                    listItem : 'Excellent written and oral communication skills in English'
                }
            ]);

            this.appendChild(new JobList({
                name : 'jobDesirableList'
            })).render(this.jobDesirable);

            this.jobDesirableList.setupTitle([
                {
                    listTitle : 'Desirable'
                }
            ]);

            this.jobDesirableList.setup([
                {
                    listItem : 'Interest in regional human rights issues.'
                },
                {
                    listItem : 'Flexibility and the ability to work remotely'
                },
            ]);

            this.appendChild(new SpinningText({
                name : 'descriptionSpinnerWidget'
            })).render(this.spinContainer);


            this.descriptionSpinnerWidget.setup([
                {
                    descriptionText : 'We create platforms with two complementary goals: freedom of expression and access to information.'
                },

                {
                    descriptionText : 'Our vision is to help build informed communities that celebrate and protect diversity and promote social justice.'
                }
            ]);

            this.appendChild(new LogosFooter({
                name : 'logosFooterWidget'
            })).render(this.logosContainer);

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
