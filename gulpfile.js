const gulp = require('gulp');

// gulp.task('hello', function(w) {
//     console.log('hello world');
//     w()
// })

const less = require('gulp-less');
const authoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const ftp = require('vinyl-ftp');


const pathName = 'avto';



const config = {
    path: {
        less: `${pathName}/src/less/*.less`,
        less2: `${pathName}/src/less/parts/*.less`,
        html: `${pathName}/public/index.html`,

    },
    output: {
        cssName: `${pathName}.css`,
        path: `${pathName}/public`,
        path_file: `${pathName}/public/index.html`,
        path_file_css: `${pathName}/public/${pathName}.css`,
        newHtml: `/tmp/fz3temp-2`
    }
}

const config2 = {
    path_1: `${pathName}/public/*.css`,
    name_css: `style.css`,
    output_path: `${pathName}/paintresident/wp-content/themes/paintresident`
}


gulp.task('less', function() {
    return gulp.src(config.path.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat(config.output.cssName))
        .pipe(authoprefixer())
        .pipe(cleanCss())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
});



gulp.task('push', function() {
    return gulp.src(config.output.path_file).pipe(gulp.dest(config.output.newHtml));
});

gulp.task('pushCss', function() {
    return gulp.src(config.output.path_file_css).pipe(gulp.dest(config.output.newHtml));
})

gulp.task('serve', (done) => {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    });
    gulp.watch(config.path.less, gulp.series('less'));
    gulp.watch(config.path.less2, gulp.series('less'));
    //, 'push', 'pushCss'));
    gulp.watch(config.path.html).on('change', () => {
        browserSync.reload();
        done();
    });

});


const globs = [
    './app/index.html',

];

gulp.task('avto', function() {
    return gulp.src(config2.path_1)
        .pipe(concat(config2.name_css))
        .pipe(gulp.dest(config2.output_path));
});

gulp.task('default', gulp.series('less', 'avto', 'serve'));