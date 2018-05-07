// 股票，只能买卖一次 求最大利润
var maxProfit = function(prices) {
    let profits = prices.map((p, i) => {
        if (i) return p - prices[i - 1];
        else return 0;
    });
    let dp = [];
    let max = 0;
    for (let i = 0, l = prices.length; i < l; i++) {
        dp[i] = new Array(l);
        for (let j = i; j < l; j++) {
            if (i == 0) {
                dp[i][j] = prices[j] - prices[0];
            } else dp[i][j] = dp[i - 1][j] - profits[i];
            max = Math.max(max, dp[i][j]);
        }
    }
    console.log(dp);
    return max;
};
// 超时了 O(n^2) 不行
//理论上应该可以减少到 O(m*n)
var maxProfit2 = function(prices) {
    let profits = [0];
    for (let i = 1; i < prices.length; i++) {
        profits[i] = prices[i] - prices[i - 1];
    }
    //最大子数组和 贪心算法  舍去和<=0 的子数组
    let res = 0;
    let t = 0;
    for (let j = 0; j < profits.length; j++) {
        if(profits[j] + t > 0){
            t += profits[j];
        } else {
            t = 0;
        }
        res = Math.max(res, t);
        console.log(res,t);
    }
    return res;
};
let a = [1,2,1,3,-6,8];
console.log(maxProfit2(a));
