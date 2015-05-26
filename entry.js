'use strict';

var $ = require("jquery");
window._ = require("underscore");

var AppView = require("./src/views/app");

new AppView({ el: $("#recipe-app") });