const gulp = require('gulp');
const tasks = require('gulp-standard-tasks')(gulp);
const babel = require('babelify');

gulp.task('sass', tasks.css({
    src: 'src/scss/**/*',
    dest: './css',
    browserSync: true
}));

gulp.task('serve', ['sass'], () => {
    tasks.browserSync({
        server: {
            baseDir: './',
        },
    });
});

// gulp.task('browserify', tasks.browserify({
//     src: 'src/scripts/app.js',
//     dest: 'dist/scripts',
//     bundleName: 'app-bundle.js',
//     transforms: [babel],
// }));

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    // gulp.watch('*.html', []);
});

gulp.task('default', ['watch']);
