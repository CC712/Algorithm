/**
 * 假设你正在爬楼梯。需要 n 步你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
 * @param {*} n 
 */
//RECUSIVE 递归的写法是可以执行的 但是重复计算了 两次 ，因为 n-1 n - 2 可能会是同一个数字 在不同的递归层次里面
var climbStairs = function (n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
};
//dynamic programming
var climbStairs2 = function (n) {
    let m = [1, 2];
    for (let i = 2; i < n; i++) {
        m[i] = m[i - 1] + m[i - 2];
    }
    return m[n - 1];
};
console.log(
    climbStairs2(4));