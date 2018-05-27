import del from 'del';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

import browserSync from 'browser-sync';

const server = browserSync.create();

const paths = {
  scripts: {
    src: 'src/js/*.js',
    dest: 'dist/js/'
  },
  styles: {
     src: 'src/css/*.css',
    dest: 'dist/css/'
  }
};

gulp.task('compress', () => { 
  return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('copy', () => { 
  return gulp.src(paths.styles.src)
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('clean', () => {
 return del(['dist']);
});

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './'
    },
    host: '0.0.0.0',
    open: false
  });
  done();
}

const watch = () => gulp.watch([paths.scripts.src, paths.styles.src], gulp.series(gulp.parallel('compress', 'copy'), reload));

const dev = gulp.series('clean', 'compress','copy', serve, watch);
export default dev;
