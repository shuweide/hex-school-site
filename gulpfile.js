let gulp = require('gulp');
let jade = require('gulp-jade');
let sass = require('gulp-sass');

gulp.task('copyHTML', function () {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./public/'))
});

gulp.task('jade',function () {
  return gulp.src('./jade/**/*.jade')
    .pipe(jade({
      pretty:true
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

//監控Sass
gulp.task('watch', function(){
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./jade/**/*.jade', gulp.series('jade'));
});

//合併task
gulp.task('default', gulp.series('jade','sass','watch'));