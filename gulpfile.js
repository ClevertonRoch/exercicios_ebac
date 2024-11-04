const GulpClient = require('gulp');
const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function compilesass() {
    return src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/styles'));

}

function minificaimage(cb) {
    return src('./source/images/*')
        .pipe(imagemin())
        .pipe(dest('./build/images'))
    cb();
}

function minificascript() {
    return src("./source/scripts/*js")
        .pipe(uglify())
        .pipe(dest('./build/scripts'))
}


exports.compile = minificascript;
