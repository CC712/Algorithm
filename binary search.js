// 假设你有 n 个版本 [1, 2, ..., n]，你想找出第一个错误的版本，导致下面所有的错误。
// 你可以通过 bool isBadVersion(version) 的接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。您应该尽量减少对 API 的调用次数。
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //binary search
        let start = 1,
            end = n,
            next;
        while (start + 1 != end) {
            next = ~~((end + start) / 2);
            if (isBadVersion(next)) {
                if (!isBadVersion(next - 1)) {
                    return next;
                } else {
                    end = next - 1;
                }
            } else {
                start = next + 1;
            }
            console.log(isBadVersion(next), start, end);
        }
        return -1;
    };
};
//算法改进，主要是 while 判断以及 next 求值
var solutionv2 = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var min = 0,
            max = n,
            guess;

        while (min <= max) {
            guess = Math.floor((min + max) / 2);
            if (isBadVersion(guess)) {
                if (!isBadVersion(guess - 1)) {
                    return guess;
                } else {
                    max = guess - 1;
                }
            } else {
                min = guess + 1;
            }
        }

        return -1;
    };
};
//TDD
let badv = 1611;
const isBadVersion = n => n >= badv;
let find2 = solutionv2(isBadVersion);
let find = solution(isBadVersion);
console.time(1);
console.log(find(999999999));
console.timeEnd(1);
// console.time(2);
// console.log(find2(999999999));
// console.timeEnd(2);
