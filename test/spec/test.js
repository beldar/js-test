(function () {
  'use strict';

  describe('Code Test', function () {
    describe('Namespace and main view instatiation', function () {
      it('Should create a namespace', function () {
        should.exist(app);
        should.exist(app.models);
        should.exist(app.views);
        should.exist(app.collections);
      });
      it('Should instatiate the app view', function() {
        app.Main = new app.views.App();
        should.exist(app.Main);
      });
    });

    describe('App view', function() {
      var appView;
      beforeEach(function(){
        appView = new app.views.App();
        this.timeout(1000);
      });

      it('Should fetch images on instantiation', function() {
        expect(appView.images.length).to.be.above(0);
      });
    })
  });
})();
