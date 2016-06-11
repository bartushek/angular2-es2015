var gulp = require('gulp');
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./web/"
        }
    });
});

gulp.task('js-watch', ['webpack'], function(){
  browserSync.reload();
});

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

gulp.task('default', ['browser-sync'], function() {
    gulp.watch("src/js/**/*.js", ['js-watch']);
});
