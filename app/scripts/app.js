define([
  'views/app',
  'collections/todos'
], function(AppView, TodoList){

  var initialize = function(){

		window.Todos = new TodoList;
  	var App = new AppView();
	
  }

  return {
    initialize: initialize
  };

});