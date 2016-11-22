"use strict";
const gulp = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const config = require("./config/default.config");

var babel = require('gulp-babel'),
    rename = require('gulp-rename');

gulp.task("clean", () => {
    return gulp.src(config.dist.path, {read: false})
        .pipe(clean());
});

gulp.task("compile:style", ["clean"], () => {
    return gulp.src(config.source.assets.scss)
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(gulp.dest(config.dist.assets.path));
});

gulp.task("compile:es6", ["clean"], () => {
    return gulp.src(config.source.entry)
        .pipe(babel(config.babel))
        .pipe(gulp.dest(config.dist.path))
});

gulp.task("copy:vendors", ["clean"], () => {
    return gulp.src([
        "./node_modules/requirejs/require.js",
        "./node_modules/whatwg-fetch/fetch.js",
        "./node_modules/lodash/lodash.js",
        "./node_modules/babel-polyfill/dist/polyfill.js"
    ])
        .pipe(gulp.dest(config.vendor.path));
});

gulp.task("default", [
    "compile:style",
    "compile:es6",
    "copy:vendors"
]);
