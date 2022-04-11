const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
//   return src("shinobi/**/*.scss") //get sass file sourse // "**/*" means that find any subfolder includes sass file
  return src("sass/**/*.scss") //get sass file sourse // "**/*" means that find any subfolder includes sass file
    .pipe(sass()) // compile sass file to scc
    .pipe(purgecss({ content: ["*.html"] })) // its find all html files in root and find all usable classes name and just keep them in scc and delete extra unnessesary css clasess
    .pipe(dest("css")); //send sc format to css folder
}

function watchTask() {
//   watch(["shinobi/**/*.scss", "*.html"], buildStyles); //this function watch sass file and when we change it, it'll automatically update sass file to css format
  watch(["sass/**/*.scss", "*.html"], buildStyles); //this function watch sass file and when we change it, it'll automatically update sass file to css format
                                                       // and also we watch html to find that if we use any new class that deleted with purge,, it find that and create it again 
}
// use series to esport in order
exports.default = series(buildStyles, watchTask);
//use "npm run gulp" in terminal for starting gulp

//use npm install gulp-purges --save-dev ==> this is a plugin that delet unnesesary css files
