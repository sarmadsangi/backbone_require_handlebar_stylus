define([
    'models/todos',
    'backbone-localstorage'
], function (Todo) {

    'use strict';

  var TodoList = Backbone.Collection.extend({

    model: Todo,
    localStorage: new Backbone.LocalStorage("todos-backbone"),

    done: function() {
      return this.where({done: true});
    },

    remaining: function() {
      return this.without.apply(this, this.done());
    },

    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },

    comparator: 'order'

  });

    return TodoList;

});