//杨辉三角
var generate = function(numRows) {
    if(!numRows) return [];
    let res = [[1]];
    let i = 0;
    while (i < numRows - 1) {
        let next = [];
        for (let j = 0; j <= i + 1; j++) {
            if (res[i][j - 1] && res[i][j]) {
                next[j] = res[i][j - 1] + res[i][j];
            } else next[j] = 1;
        }
        res.push(next);
        i++;
    }
    console.log(res);
    return res;
};
const util = require('./Utils/utils');
util.runTest(generate, 5);