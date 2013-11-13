require.config({
	baseUrl:"./scripts",
	paths: {
	  	"json2"  : "//cdnjs.cloudflare.com/ajax/libs/json2/20121008/json2",
	    "jquery" : "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
	    "underscore" : "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
	    "backbone"  : "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min",
	    "backbone-localstorage"  : "//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.0/backbone.localStorage-min",
	    "backbone"  : "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min",
      "handlebars" : "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.1.2/handlebars.min",
      "text" : "3rd_party/text",
      "hbs"  : "3rd_party/hbs"
	},

	shim:{
    'json2': {
        exports: 'JSON'
    },
    'jquery': {
        exports: '$'
    },
    'underscore': {
        exports: '_'
    },
    'handlebars': {
        exports: 'Handlebars'
    },
    'backbone-localstorage': {
        exports: 'Backbone.LocalStorage'
    },
    "backbone":{
        "deps":["underscore", "jquery"],
        "exports":"Backbone"
    }
  },

  hbs : {
    disableI18n : true
  }

});

require([
	'app',
  'jquery',
	'underscore',
  'handlebars',
	'backbone',
  'json2'
], function(App){

  App.initialize();
});