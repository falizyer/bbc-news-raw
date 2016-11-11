"use strict";
const gulp = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-sass");
const config = require("./config/default.config");

gulp.task("clean", () => {
    return gulp.src(config.dist.path, {read: false})
        .pipe(clean());
});

gulp.task("compile:style", ["clean"], () => {
    return gulp.src(config.source.assets.scss)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(config.dist.assets.path));
});

gulp.task("copy:script", ["clean"], () => {
    return gulp.src(config.source.entry)
        .pipe(gulp.dest(config.dist.path))
});

gulp.task("default", [
    "compile:style",
    "copy:script"
]);
