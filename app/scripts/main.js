var app = app || {
  views: {},
  models: {},
  collections: {}
};

(function(){
  'use strict';

  app.load = function(){
    app.Main = new app.views.App();
  };

})();

window.addEventListener('load', app.load);
