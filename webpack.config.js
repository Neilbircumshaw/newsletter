const path = require('path');


module.exports = {
  entry: "./src/scripts.js",
  output: {
  path: path.resolve(__dirname, './public/js/'),
  filename:'build.js'},
  watch:true
}

/* This is webpack configuration, this makes it so the JS is minified in the public folder
under the folder "js" and the file "build.js". Obviously this needs to be in the "public" folder
or else it will not be served to the browers while using express - it's the same like this CSS static files.
However we when we want to edit the JS file we do so in the src folder in the scripts.js file, which then gets
compiled and minified in the build.js file located in public/js thanks to the handy work of webpack!
to run webpack simply go to this directory and run webpack in the terminal. */ 
