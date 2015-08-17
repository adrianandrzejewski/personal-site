import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {stream as wiredep} from 'wiredep';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  const processors = [
    require('autoprefixer-core')({browsers: ['last 1 version']}),
    require('css-mqpacker'),
    require('postcss-opacity'),
    require('pixrem')
  ];

  return gulp.src('src/scss/main.scss')
    .pipe($.sass({errLogToConsole: true})) 
    .pipe($.postcss(processors))
    .pipe($.minifyCss())
    .pipe($.rename({suffix: '.min'}))
    .pipe(reload({stream: true}))
    .pipe($.size({showFiles: true}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('src/css'));
}); 

gulp.task('sprite', () => {
  const spriteData = gulp.src('src/images/sprite/**/*')
    .pipe($.plumber())
    .pipe($.spritesmith({
      imgName: 'sprite.png',
      imgPath: '../images/sprite.png',
      cssName: '_sprite.scss',
      padding: 5
    }));
  spriteData.img.pipe(gulp.dest('src/images/'));
  return spriteData.css.pipe(gulp.dest('src/scss/components/'));
});

gulp.task('dev', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: "./src",
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'src/**/*.html',
    'src/images/**/*',
  ]).on('change', reload);

  gulp.watch(['src/scss/**/*.{css,scss}'], ['styles']);  
  gulp.watch(['src/images/sprite/**/*'], ['sprite']); 
});


