const gulp         = require('gulp'),
      scss         = require('gulp-sass'),
      browserSync  = require('browser-sync'),
      uglify       = require('gulp-uglify'),
      cleanCSS     = require('gulp-clean-css'),
      htmlmin      = require('gulp-htmlmin'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function() {
  return gulp.src('app/scss/style.scss')
  .pipe(scss())
  .pipe(autoprefixer({
    browsers: ['last 20 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('scripts', function() {
  return gulp.src('app/js/**/*.js')
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  })
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.html', gulp.parallel('html'));
  gulp.watch('app/js/**/*.js', gulp.parallel('scripts'));
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('minify-js', function() {
  gulp.src('app/js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
})

gulp.task('minify-css', function() {
  gulp.src('app/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie10'}));
  .pipe(gulp.dest('build/css'));
});

gulp.task('minify-html', function() {
  gulp.src('app/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'));
});

gulp.task('default',gulp.parallel(['serve', 'watch', 'scss', 'html', 'scripts']));
gulp.task('build',gulp.parallel(['minify-css', 'minify-js', 'minify-html']));
