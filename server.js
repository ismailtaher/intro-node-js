// You should already know:
// HTML, CSS and JavaScript
// Possibly experience with other libraries and frameworks

// How NodeJS differs from Vanilla JS
// 1) Node runs on server - not in a browser (backed not frontend)
// 2) The console is the terminal window
console.log("Hello World!");
// 3) global object instead of window object
console.log(global);
// 4) Has Common Core Modules that we will explore
// 5) CommonJS modules instead of ES6 modules

const os = require("os");
console.log("Type: " + os.type);
console.log("Version: " + os.version);
console.log("Home Dir: " + os.homedir);

console.log(__dirname);
console.log(__filename);
