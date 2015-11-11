/* globals Backbone */
var app = app || {
  views: {},
  models: {},
  collections: {}
};

(function() {
  'use strict';

  app.collections.images = Backbone.Collection.extend({
    model: app.models.image,
    localStorage: new Backbone.LocalStorage('test-images')
  });
})();
