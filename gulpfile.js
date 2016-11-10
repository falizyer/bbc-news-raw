"use strict";
const gulp = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-sass");
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require("./config/webpack.config");
const config = require("./config/default.config");

gulp.task("clean:style", () => {
    return gulp.src(config.dist.assets.scss, {read: false})
        .pipe(clean());
});

gulp.task("compile:style", ["clean:style"], () => {
    return gulp.src(config.source.assets.scss)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(config.dist.assets.path));
});

gulp.task("clean:script", () => {
    return gulp.src(config.dist.scripts, {read: false})
        .pipe(clean());
});

gulp.task("compile:script", ["clean:script"], () => {
    return gulp.src("undefined.js", {read: false})
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(config.dist.path))
});

gulp.task("default", [
    "compile:style",
    "compile:script"
]);
