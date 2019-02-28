const gulp = require("gulp");
const sass = require("gulp-sass");
const clip = require("gulp-clip-empty-files")
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass-compile", () => {
    return gulp.src("sass/[^_]*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(clip())
        .pipe(autoprefixer())
        .pipe(gulp.dest("static/css"));
});

gulp.task("bootstrap", () =>
{
    return gulp.src("node_modules/bootstrap/js/dist/*.js")
        .pipe(concat("bootstrap-min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("static/js"));
});

gulp.task("watch", () =>
{
    gulp.watch("sass/*.scss", gulp.series("sass-compile"));
});