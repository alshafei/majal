Class('SpinningText').inherits(Widget)({
    HTML : '<div></div>',

    ELEMENT_CLASS : 'majal__spinning-text',

	prototype : {

        init : function init(config){
            Widget.prototype.init.call(this, config);

            this.el = this.element[0];

        },

		setup : function setup(description) {
            description.forEach(function(content, index){
                this.appendChild(new AnimatedDescription({
                    name : 'description_' + index,
                    description : content,
                })).render(this.element);
            }, this);

            return this;
		},

        /*
         * Spinning text method
         * Using the elements array positions adds and removes the classes active.
         */
        spinDescription : function spinDescription(){
            var animatedDescriptionsWrapper = $('.majal__spinning-text');
            var height = 0;
            var biggerChildren = 0;

            animatedDescriptionsWrapper.children().each( function(){
                if ( $(this).outerHeight() > height ) {
                    biggerChildren = this;
                    height= $(this).outerHeight();
                }  
            });

            var parent = $(biggerChildren).parent();
            $(parent).css('height', height);

            var animatedDescriptions = [].slice.call(document.querySelectorAll(".animated-description"));
            var descriptionsLenght = animatedDescriptions.length;
            var position = 0;
            var previousPosition = 0;
            var previousPositionTwo = 0;
            var firstRun = 0;

            this.description_0.activate();

            setInterval( function(){

                if ( animatedDescriptions[previousPosition].classList.contains('active') === true ){
                    if (animatedDescriptions[previousPositionTwo].classList.contains('hidden') === true){
                        animatedDescriptions[previousPositionTwo].classList.remove('hidden');
                    }

                    if (firstRun > 0){
                        animatedDescriptions[previousPosition].classList.remove('active');
                        animatedDescriptions[previousPosition].classList.add('hidden');
                        animatedDescriptions[position].classList.add('active');
                        $(animatedDescriptions[position]).on('transitionend webkitTransidionEnd', function(){
                                animatedDescriptions[position].classList.remove('hidden');
                        });                     
                    }

                    firstRun = 1;
                 } else {
                    console.log('init');
                    animatedDescriptions[position].classList.add('active');
                 }

                
                if ( position === descriptionsLenght-1){
                    previousPositionTwo = previousPosition;
                    previousPosition = position;
                    position = 0;

                    return;
                }

                previousPositionTwo = previousPosition;
                previousPosition = position;
                position++;

            }, 5000);
            
        }

	}
});