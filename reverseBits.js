//32 bits positive integer reverse and parse to new integer
const util = require('./Utils/utils');
var reverseBits = function(n) {
    return parseInt(('0'.repeat(32)+ n.toString(2)).substr(-32).split('').reverse().join(''),2);
};
// console.log(('0'.repeat(32)+ n.toString(2)).substr(-32),'\n',('0'.repeat(32)+ n.toString(2)).substr(-32).split('').reverse().join(''));
let t = 0;
util.runTest(reverseBits, t);