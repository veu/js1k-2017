const babel = require('gulp-babel');
const fs = require('fs');
const gulp = require('gulp');
const manglePlugin = require('./babel/mangle-plugin');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const size = require('gulp-size');
const watch = require('gulp-watch');

gulp.task('default', ['join_assets'], function () {
  gulp.watch('src/*', ['join_assets']);
});

gulp.task('join_assets', ['minify'], function () {
  const js = fs.readFileSync('dist/min.js', 'utf8');
  return gulp.src('src/shim.html')
    .pipe(replace(/<demo>/g, js))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', function () {
  return gulp.src('src/full.js')
    .pipe(babel({
      compact: true,
      comments: false
    }))
    .pipe(babel({
      plugins: [
        [
          manglePlugin,
          {
            excludedCharacters: [
            ],
            namesToReplace: [
              'between',
              'color',
              'key',
              'keys',
              'last',
              'lost',
              'magic',
              'mod',
              'move',
              'playery',
              'scrollx',
              'scrolly',
              'sy',
              'wall',
              'windows',
              'xx',
              'yy',
            ]
          }
        ] 
      ],
      compact: true,
      comments: false
    }))
    // Replace the last semicolon in both functions and the program.
    // We can’t use the babel minified option here because it does
    // random other changes that increase size (eg. 1e3 => 1000).
    .pipe(replace(/;(?=}|$)/g, ''))
    .pipe(rename('min.js'))
    .pipe(size({pretty: false, showFiles: true}))
    .pipe(gulp.dest('dist'));
});