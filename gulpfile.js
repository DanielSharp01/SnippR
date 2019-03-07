const gulp = require("gulp");
const sass = require("gulp-sass");
const clip = require("gulp-clip-empty-files")
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass-compile", () => {
    return gulp.src("src/sass/[^_]*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(clip())
        .pipe(autoprefixer())
        .pipe(gulp.dest("public/css"));
});

gulp.task("js-copy", () => {
    return gulp.src("src/client/*.js")
        .pipe(gulp.dest("public/js"));
});


gulp.task("build", (done) =>
{
    gulp.parallel("sass-compile", "js-copy")();
    done();
});