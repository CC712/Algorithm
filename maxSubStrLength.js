/**
 * 我的提交执行用时已经战胜 9.53 % 的 javascript 提交记录
 */
var lengthOfLongestSubstring_v1 = function (s) {
    let set = new Set();
    let maxLength = 0;
    let nowLength = 0;
    let idx = 0;
    let sub = '';
    while (s[idx]) {
        let n = s[idx];
        if (!set.has(n)) {
            set.add(n);
            sub += n;
            maxLength = Math.max(sub.length, maxLength);
        } else {
            let i = sub.indexOf(n);
            let delsub = sub.split(n)[0];
            // console.log(n, delsub);
            delsub.split('').forEach(l => l && set.delete(l));
            sub = sub.split(n)[1];
            sub += n;
        }
        idx++;
    }
    // console.log(sub, maxLength);
    return maxLength;

};
var lengthOfLongestSubstring_v2 = function (s) {
    let max = 0;
    let index = 0;
    let repeat;
    for (let i = 0, l = s.length; i < l; i++) {
        repeat = s.indexOf(s[i], index);
        max = Math.max(max, i - index);
        if (repeat > index && repeat != -1) {
            index = repeat;
        }
        console.log('index',s.slice(0,i));
    }
    return max;
};
//"pwwkew" 3 aab 2 "ckilbkd" 5 "dvdf" 3 "wobgrovw" 6 bpfbhmipx 7
const utils = require('./Utils/utils');
// utils.runTest(lengthOfLongestSubstring_v1, ["pwwkew", 'aab', "ckilbkd", "dvdf", "wobgrovw", 'bpfbhmipx']);
utils.runTest(lengthOfLongestSubstring_v2, ["pwwkew", 'aab', "ckilbkd", "dvdf", "wobgrovw", 'bpfbhmipx'],lengthOfLongestSubstring_v1);
