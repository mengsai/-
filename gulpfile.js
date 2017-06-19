/**
 * Created by Administrator on 2017/6/14.
 */
var gulp=require("gulp");
var livereload=require("gulp-livereload"),
    webserver=require("gulp-webserver"),
    sass=require("gulp-ruby-sass"),
    imagemin=require('gulp-imagemin'),          //图片压缩
    htmlmin = require("gulp-htmlmin"),
    uglify=require("gulp-uglify");
gulp.task("webserver",function () {
    gulp.src("./dist")
        .pipe(webserver({
            livereload:true,
            open:true
        }));
});
gulp.task("html",function () {
    return gulp.src("src/**/*.html")

        .pipe(gulp.dest("dist/"));
});
gulp.task("sass",function () {
    return sass("src/**/*.scss")
        .pipe(gulp.dest("dist/css"));
});
//js 压缩
gulp.task("js",function () {
    return gulp.src("src/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
});

gulp.task("htmlmin", function () {
    gulp.src('src/**/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('dist'))
});

gulp.task('images',function () {
    return gulp.src('src/images/*.{png,jpg,gif,svg}')
        .pipe(imagemin({
            progressive:true,
            svgoplugins:[{removeViewBox:false}]
        }))
        .pipe(gulp.dest('dist/images'))
});
// gulp.task('watch', function () {
//     gulp.watch('src/**/*.html',["htmlmin"]);
//     gulp.watch('src/sass/*.scss',["sass"]);
// });
gulp.task("default",["sass","js","html","htmlmin","images","webserver"]);