var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('DoWork', function() {

  var p = require('./config.json')

  gulp.src(['./test.js'])
      .pipe(replace('**VERSION**', p.version))
      .pipe(gulp.dest('../release'));

});
