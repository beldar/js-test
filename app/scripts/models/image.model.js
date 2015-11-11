/* global Backbone */
var app = app || {
  views: {},
  models: {},
  collections: {}
};

(function() {
  'use strict';

  app.models.image = Backbone.Model.extend({
    defaults: {
      favourite: false
    },

    toggle: function() {
      this.save({
        favourite: !this.get('favourite')
      });
    }
  });

})();
