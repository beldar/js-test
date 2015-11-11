/* global Backbone */
/* eslint no-console: 0 */
var app = app || {
  views: {},
  models: {},
  collections: {}
};

(function(){
  'use strict';

  app.views.App = Backbone.NativeView.extend({
    el: '#images',

    initialize: function() {
      var _this = this;
      this.images = new app.collections.images({id: 1});
      this.listenTo(this.images, 'add', this.addOne);
      this.images.fetch({
        success: _.bind(this.fetchComplete, this),
        error: _.bind(this.getData, this)
      });
    },

    fetchComplete: function() {
      console.log('Fetch complete');
      if (this.images.length === 0) {
        this.getData();
      }
    },

    addOne: function(image) {
      var view = new app.views.image({model: image});
      this.el.appendChild(view.render().el);
    },

    loadData: function(data) {
      var _this = this;
      data.items.forEach(function(item) {
        var model = new app.models.image(item);
        _this.images.add(model);
        model.save();
      });
    },

    getData: function() {
      var script = document.createElement('script');
      script.src = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=app.Main.loadData';
      document.head.appendChild(script);
    }
  });

})();
