"use strict";
const webpack = require("webpack");
const gulp = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const gulpWebpack = require("gulp-webpack");
const rename = require('gulp-rename');

const webpackConfig = require("./config/webpack.config");
const config = require("./config/default.config");

gulp.task("clean", () => {
    return gulp.src(config.dist.path, {read: false})
        .pipe(clean());
});

gulp.task("webpack", ["clean"], () => {
    return gulp.src("undefined.js", {read: false})
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(config.dist.path))
});

gulp.task("default", [
    "webpack"
]);
