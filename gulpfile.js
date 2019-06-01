const gulp = require('gulp');
const $ = require('gulp-load-plugins')(); //針對gulp開頭的套件作自動管理
// let jade = require('gulp-jade');
// let sass = require('gulp-sass');
// let plumber = require('gulp-plumber');
// let postcss = require('gulp-postcss');
// const babel = require('gulp-babel');
const autoprefixer = require('autoprefixer');
const mainBowerFiles = require('main-bower-files');

gulp.task('copyHTML', function () {
  return gulp.src('./*.html')
    .pipe($.plumber())
    .pipe(gulp.dest('./public/'))
});

gulp.task('jade', function () {
  return gulp.src('./jade/**/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('sass', function () {

  let plugins = [
    autoprefixer({ browsers: ['last 1 version'] })
  ];

  return gulp.src('./sass/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    //編譯完成 CSS
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('babel', () =>
  gulp.src('./js/**/gulptest*.js')
    .pipe($.sourcemaps.init())
    .pipe($.plumber())
    .pipe($.babel({
      presets: ['@babel/env']
    }))
    .pipe($.concat('all.js')) //把全部js合併成一個檔案
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest('./public/js'))
);

gulp.task('bower', function() {
  return gulp.src(mainBowerFiles())
      .pipe(gulp.dest('./.tmp/vendors'))
});

gulp.task('vendors', () => 
  gulp.src('./.tmp/vendors/**/**.js')
    .pipe($.concat('vendors.js'))
    .pipe(gulp.dest('./public/js'))
);

//監控Sass
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./jade/**/*.jade', gulp.series('jade'));
  gulp.watch('./js/**/gulptest*.js', gulp.series('babel'));
});

//合併task
gulp.task('default', gulp.series('jade', 'sass', 'babel', 'bower', 'vendors', 'watch'));