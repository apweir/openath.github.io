# openath.github.io
OpenTrack athletics database - main web site

# Built on Jekyll, Bootstrap 4 and Webpack.

First off

`bundle install`
`bundle update`

Check scripts in package.json to get the site up and running locally using either yarn or npm.

`yarn` install all node packages

All front end assets are in _assets folder, running `yarn run scaffold` will clear out _site/assets/ then copy img and font folders over from webpacks _assets folder.

`yarn run start` to fire up local development mode

Unfortunately webpack is currently taking a while to do its thing as it is writing both js and css while working concurrently with Jekyll and Browser-sync, so you will have to refresh the page after the browser initially opens.

First load of http://localhost:3000 displays "Cannot GET /". Once Webpack and Browser-sync finish up you should see the actual website after a hard refresh.

Using Webpack as it will let us integrate the latest ES6 modular code – might need to look at optimising build speeds at some point. Webpack appears particularly slow in generating the separate CSS file from SCSS using Webpack’s ExtractTextPlugin.

`yarn run build` to build production files
