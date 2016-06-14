var gulp = require('gulp');
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./web/"
        }
    });
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
        callback();
    });
});

gulp.task('default', function(){
  runSequence(
    'webpack',
    'browser-sync',
    function() {
        gulp.watch("src/js/**/*.js", ['webpack']);
        gulp.watch("web/**/*", function(){
          browserSync.reload();
        });
    }
  );
});
