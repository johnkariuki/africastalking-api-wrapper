const gulp = require('gulp');
const eslint = require('gulp-eslint');

const paths = {
  js: [
    'gulpfile.js',
    'index.js',
    'src/**/*.js',
  ],
};

gulp.task('js:lint', () => {
  gulp
    .src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format());
    // .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  gulp.watch(paths.js, ['js:lint']);
});

gulp.task('default', ['js:lint', 'watch']);
