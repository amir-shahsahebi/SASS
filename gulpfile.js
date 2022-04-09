const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src("shinobi/**/*.scss") //get sass file sourse // "**/*" means that find any subfolder includes sass file
      .pipe(sass()) // compile sass file to scc
      .pipe(dest("css")); //send sc format to css folder
}

function watchTask(){
    watch(["shinobi/**/*.scss"], buildStyles); //this function watch sass file and when we change it, it'll automatically update sass file to css format 
}
// use series to esport in order
exports.default = series(buildStyles, watchTask)
//use "npm run gulp" in terminal for starting gulp