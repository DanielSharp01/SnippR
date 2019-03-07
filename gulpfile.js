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

gulp.task("bootstrap-js", () =>
{
    return gulp.src("node_modules/bootstrap/js/dist/*.js")
        .pipe(concat("bootstrap-min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("public/js"));
});


gulp.task("build", () =>
{
    gulp.series("bootstrap-js", "sass-compile", "js-copy");
});

gulp.task("watch", () =>
{
    gulp.watch("sass/*.scss", gulp.series("sass-compile"));
});