/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let dic = {
        "{": "}",
        "(": ")",
        "[": "]",
    };
    s = s.split("");
    while (s.length) {
        let n = s.shift();
        if (dic[stack[stack.length -1]] == n) {
            stack.pop();
        } else {
            stack.push(n);
        }
        // console.log(stack, n);
    }
    return stack.length == 0;
};
const u = require("./Utils/utils");
let t = "{[])}";
u.runTest(isValid, t);
