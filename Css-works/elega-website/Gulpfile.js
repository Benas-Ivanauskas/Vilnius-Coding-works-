const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src(["src/sass/**/*.scss"]).pipe(sass()).pipe(dest("dest/"));
}

function copyHtml() {
  return src(["src/**/*.html"]).pipe(dest("dest/"));
}

function watchTask() {
  watch(["src/sass/**/*.scss"], buildStyles);
}
exports.default = series(buildStyles, copyHtml, watchTask);
