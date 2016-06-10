var gulp = require('gulp');
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
      entry: './src/js/index.js',
      output: {
          path: './web/js',
          filename: 'app.bundle.js',
       },
       module: {
           loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'angular2']
                }
           }]
       }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('default', function() {
  // place code for your default task here
});
