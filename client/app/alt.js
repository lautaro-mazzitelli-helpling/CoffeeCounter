var Alt = require('alt');
var alt = new Alt();
window.alt = alt;
for(let func in alt){
	console.log(func);
}
module.exports = alt;