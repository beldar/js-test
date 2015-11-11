/* global Backbone, _ */
var app = app || {
  views: {},
  models: {},
  collections: {}
};

(function() {
  'use strict';

  app.views.image = Backbone.NativeView.extend({
    tagName: 'li',

    template: _.template(document.getElementById('image-template').innerHTML),

    events: {
      'click .image-item' : 'toggle'
    },

    initialize: function() {
      this.model.on('change:favourite', this.render, this);
    },

    toggle: function() {
      this.model.toggle();
    },

    render: function() {
      this.el.innerHTML = this.template(this.model.toJSON());
      return this;
    }
  })
})();
