const gulp = require('gulp');
const $ = require('gulp-load-plugins')(); //針對gulp開頭的套件作自動管理
// let jade = require('gulp-jade');
// let sass = require('gulp-sass');
// let plumber = require('gulp-plumber');
// let postcss = require('gulp-postcss');
// const babel = require('gulp-babel');
const autoprefixer = require('autoprefixer');
const mainBowerFiles = require('main-bower-files');
const browserSync = require('browser-sync').create();
const minimist = require('minimist');
const cleanCSS = require('gulp-clean-css');

const envOptions = {
  string: 'env',
  default: { env: 'dev' }
}

const options = minimist(process.argv.slice(2), envOptions);
console.log(options);
console.log(process.argv.slice(2));

gulp.task('copyHTML', function () {
  return gulp.src('./*.html')
    .pipe($.plumber())
    .pipe(gulp.dest('./public/'))
});

gulp.task('copyCNAME', function () {
  return gulp.src('./CNAME')
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
    .pipe(browserSync.stream())
});

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    //編譯完成 CSS
    .pipe($.postcss([autoprefixer()]))
    .pipe($.if(options.env === 'prod', cleanCSS()))
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
});

gulp.task('css', () => {
  return gulp.src('./css/**/*.css')
    .pipe($.sourcemaps.init())
    .pipe($.plumber())
    .pipe($.postcss([autoprefixer()]))
    .pipe($.if(options.env === 'prod', cleanCSS()))
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('babel', () =>
  gulp.src('./js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.plumber())
    .pipe($.babel({
      presets: ['@babel/env']
    }))
    // .pipe($.concat('all.js')) //把全部js合併成一個檔案
    .pipe($.if(options.env === 'prod', $.uglify({
      compress: {
        drop_console: false
      }
    })))
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream())
);

//Bower
// gulp.task('bower', function () {
//   return gulp.src(mainBowerFiles())
//     .pipe(gulp.dest('./.tmp/vendors'))
// });

// gulp.task('vendors', () =>
//   gulp.src('./.tmp/vendors/**/**.js')
//     .pipe($.concat('vendors.js'))
//     .pipe($.if(options.env === 'prod', $.uglify()))
//     .pipe(gulp.dest('./public/js'))
// );

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./public",
      reloadDebounce: 2000
    }
  });

  //監控檔案變化
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./jade/**/*.jade', gulp.series('jade'));
  gulp.watch('./js/**/*.js', gulp.series('babel'));
});

//Clean Default
gulp.task('clean', () => {
  return gulp.src(['./.tmp', './public'], { read: false, allowEmpty: true })
    .pipe($.clean());
});

//圖片壓縮很耗時，所以建議在prod時再壓縮
gulp.task('image-min', () =>
  gulp.src('./images/**/*.*')
    .pipe($.if(options.env === 'prod', $.imagemin()))
    .pipe(gulp.dest('./public/images'))
);

//快速發布GitHub Pages
gulp.task('deploy', function () {
  return gulp.src('./public/**/*')
    .pipe($.ghPages());
});

//合併task
gulp.task('default', gulp.series('clean', 'copyHTML', 'copyCNAME', 'jade', 'sass', 'css', 'babel', 'image-min', 'browser-sync'));