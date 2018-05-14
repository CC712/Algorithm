const utils = require("./Utils/utils");
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dic = [1, 5, 10, 50, 100, 500, 1000];
    let lm = { I: 0, V: 1, X: 2, L: 3, C: 4, D: 5, M: 6 };
    let pos = 0;
    let i = s.length - 1;
    let res = 0;
    while (i >= 0) {
        let n = s[i];
        //dictionary find
        let n_idx = lm[n];
        //这里用 indexOf 会浪费一点搜索的时间
        //直接hash 走起
        if (n_idx > pos) {
            pos = n_idx;
        }
        if (n_idx == pos) {
            res += dic[pos];
        }
        if (n_idx < pos) {
            res -= dic[n_idx];
        }
        //next
        i--;
    }
    return res;
};
//最快的代码的启发 O(n)
var romanToIntV2 = function(s) {
    let dic = [1, 5, 10, 50, 100, 500, 1000];
    let lm = { I: 0, V: 1, X: 2, L: 3, C: 4, D: 5, M: 6 };
    let res = 0;
    s = s.split('').reverse().map(lt => dic[lm[lt]]);
    s.forEach((num, i) => {
        if (i > 0 && num < s[i - 1]) {
            res -= num;
        } else res += num;
    });
    return res;
};
//tdd
let t1 = "MCMXCIV";
let t2 = "IV";
let t3 = "VLIII";
utils.runTest(romanToIntV2, t1, t2, t3);
