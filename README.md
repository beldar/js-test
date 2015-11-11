Test
=====

Fetches fotos from Flickr and lets you mark them as favourites while saving the state on localStorage.

Build using Backbone.js

Install
--------

You have to have installed [bower](http://bower.io/), and [grunt](http://gruntjs.com/). 
To install the first two you'll need [node](http://nodejs.org/) too.

Once you have all those and cloned the repo, go to the root of the project and run:

    bower install

That will download all the js and css dependencies of the project.

Then run:

    npm install

This will download all the node dependencies

Finally you can launch the site running:

    grunt serve

You can build the project ready for production like this:

    grunt build

That will leave everything ready on the `/dist` folder
