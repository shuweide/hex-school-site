let gulp = require('gulp');
let jade = require('gulp-jade');

gulp.task('copyHTML', function () {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./public/'))
});

gulp.task('jade',function () {
  return gulp.src('./gulp/**/*.jade')
    .pipe(jade({
      pretty:true
    }))
    .pipe(gulp.dest('./public/'))
});