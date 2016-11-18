"use strict";
const gulp = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const requirejs = require("gulp-requirejs");
const config = require("./config/default.config");

var babel = require('gulp-babel'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename');

gulp.task('es6-commonjs', ["clean"], function () {
    return gulp.src(['./src/*.js', './src/**/*.js'])
        .pipe(babel(config.babel))
        .pipe(gulp.dest('dist/temp'));
});

gulp.task('commonjs-bundle', ['es6-commonjs'], function () {
    return browserify(['dist/temp/app.js']).bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(rename('app.js'))
        .pipe(gulp.dest("dist"));
});

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

gulp.task("copy:es6-amd", ["clean"], () => {
    return gulp.src(config.source.entry, {read: false})
        .pipe(babel(config.babel))
        .pipe(gulp.dest(config.temp.path))
});

gulp.task("default", [
    "compile:style",
    "commonjs-bundle"
]);
