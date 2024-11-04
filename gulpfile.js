const { src, dest, series, watch } = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');


function compilesass() {
    return src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./maps'))
        .pipe(dest('./build/styles'));

}

function compimage(cb) {
    return src('./source/images/*')
        .pipe(imagemin())
        .pipe(dest('./build/images'))
    cb();
}

function compscript() {
    return src("./source/scripts/*js")
        .pipe(uglify())
        .pipe(dest('./build/scripts'))
}

exports.default = function () {
    watch('./source/styles/*.scss', { ignoreInitial: false }, series(compilesass));
    watch('./source/scripts/*.js', { ignoreInitial: false }, series(compscript));
    watch('./source/images/*', { ignoreInitial: false }, series(compimage));
};