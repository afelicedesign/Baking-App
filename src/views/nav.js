var Backbone = require("backbone");
var $ = require("jquery");
var template = require("../templates/nav.html");

Backbone.$ = $;

var NavView = Backbone.View.extend({
	tagName: "nav",

	events: {
		"change #recipe-nav": "changeRecipe"
	},

	initialize: function(){
		this.collection.on("sync", this.render, this);
	},

	template: template,

	render: function(){
		var options = [];

		var categories = _.uniq(this.collection.pluck("category")).sort();

		_.each(categories, function(category) {
			var recipes = this.collection.where({category: category});
			var recipeTitles = [];

			if(recipes.length) {
				options.push(category);

				_.each(recipes, function(recipe) {	
					recipeTitles.push({
						title: recipe.get("title"),
						id: recipe.cid
					});
				});

				options = options.concat(recipeTitles);
			}
		}.bind(this));

		this.$el.html(this.template({items: options}));
		return this;
	},

	changeRecipe: function(e) {
		this.trigger("changeRecipe", e.currentTarget.value);
	}
});

module.exports = NavView;