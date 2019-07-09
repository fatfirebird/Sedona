const gulp        = require('gulp'),
      scss        = require('gulp-sass'),
      browserSync = require('browser-sync');

gulp.task('scss', function() {
  return gulp.src('app/scss/style.scss')
  .pipe(scss())
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

gulp.task('default',gulp.parallel(['serve', 'watch', 'scss', 'html', 'scripts']));
