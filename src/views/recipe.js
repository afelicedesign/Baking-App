var Backbone = require("backbone");
var $ = require("jquery");
var template = require("../templates/recipe.html");

Backbone.$ = $;

var RecipeView = Backbone.View.extend({
	tagName: "article",
	//className: "recipe",

	template: template,

	render: function(){
		if(this.model) {
			this.$el.removeClass("hidden");
			this.$el.html(this.template(this.model.toJSON()));
		} else {
			this.$el.addClass("hidden");
		}
		return this;
	},

	setModel: function(model) {
		this.model = model;
		this.render();
	}
});

module.exports = RecipeView;