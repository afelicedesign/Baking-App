var Backbone = require("backbone");
var $ = require("jquery");
var template = require("../templates/app.html");

var NavView = require("./nav");
var RecipeView = require("./recipe");
var RecipesCollection = require("../collections/recipes");

Backbone.$ = $;

var recipesCollection =  new RecipesCollection();

var AppView = Backbone.View.extend({
    initialize: function() {
        this.navView = new NavView({ collection: recipesCollection });
        this.recipeView = new RecipeView({className: "recipe hidden"});

        this.navView.on("changeRecipe", this.onChangeRecipe, this);
        this.render();
    },

    template: template,

    render: function() {
        this.$el.html(this.template());
        this.$el.find(".recipe-card").append(this.navView.el, this.recipeView.el);
        return this;
    },

    onChangeRecipe: function(modelId) {
        this.recipeView.setModel(recipesCollection.get(modelId));
    }
});

module.exports = AppView;