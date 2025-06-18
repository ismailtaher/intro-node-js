// You should already know:
// HTML, CSS and JavaScript
// Possibly experience with other libraries and frameworks

// How NodeJS differs from Vanilla JS
// 1) Node runs on server - not in a browser (backed not frontend)
// 2) The console is the terminal window
/* console.log("Hello World!"); */
// 3) global object instead of window object
/* console.log(global); */
// 4) Has Common Core Modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Was missing some JS APIs like fetch for a while but now is available

const os = require("os");
const path = require("path");
const { add, subtract } = require("./math");

console.log(add(2, 3));
console.log(subtract(2, 3));

console.log("Type: " + os.type);
console.log("Version: " + os.version);
console.log("Home Dir: " + os.homedir);

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
