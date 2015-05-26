var Backbone = require("backbone");

var RecipesCollection = Backbone.Collection.extend({
    initialize: function() {
        this.fetch();
    },

    url: 'data.json'
});

module.exports = RecipesCollection;