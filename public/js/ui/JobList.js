Class('JobList').inherits(Widget)({
    HTML : '<p class="list-title"></p><ul></ul>',

    ELEMENT_CLASS : 'majal__job-list',

	prototype : {

        init : function init(config){
            Widget.prototype.init.call(this, config);

            this.elTitle = this.element[0];
            this.elListContainer = this.element[1];
        },

		setup : function setup(listItems) {
            listItems.forEach(function(data, index){
                this.appendChild(new ListItem({
                    name : 'listItem_' + index,
                    itemDescription : data
                })).render(this.elListContainer);
            }, this);

            return this;
		},

        setupTitle : function setupTitle(title){
            this.elTitle.innerHTML = title[0].listTitle; 
        }
	}
});