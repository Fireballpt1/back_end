// function log(fn){
//     fn();
// }
// var greetMe = function(){
//     console.log("Hello");
// }
// greetMe();
// log(greetMe);

// var msg = require('./log.js');
// msg.log.info('Node.js Started');
// msg.log2.update('Node.js Started too');

var arrayUtils = require('./ArrayUtils.js');
var a = [1, 3, 4, 5, 6, 8];
console.log(arrayUtils.isEmpty(a));
console.log(arrayUtils.max(a));
console.log(arrayUtils.min(a));
console.log(arrayUtils.media(a));