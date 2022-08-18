const path = require("path")
// console.log(__filename);
const pathObject = path.parse(__filename)
// console.log(pathObject);
const norm = path.normalize("and wd")
console.log(norm);
