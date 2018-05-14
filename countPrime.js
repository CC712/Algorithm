/**
 * @param {number} n 输出 小于n 的质数的个数
 * @return {number}
 */
//O(sqrt(n))
var isPrime = function(num, cache) {
    if (num == 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
};
//O(n*sqrt(n))
var countPrimes = function(n) {
    if (n == 1) return 0;
    let c = 0;
    n--;
    while (n > 0) {
        if (isPrime(n)) {
            c += 1;
            console.log("=>", n);
        }
        n--;
    }
    console.log(c);
    return c;
};
//传统的判断质数会超时
console.time(1);
countPrimes(10000);
console.timeEnd(1);
//用动态规划的想法去推这个数字
var countPrimes = function(n) {
    let s = [0,0,0,1,2,2,3,3,4,4,4,4,5,5,6,6,6,6,7];

    if()

};
