/**
 * @param {number[]} prices
 * @return {number}
 */
// 假设有一个数组，它的第 i 个元素是一个给定的股票在第 i 天的价格。
// 设计一个算法来找到最大的利润。你可以完成尽可能多的交易（多次买卖股票）。然而，你不能同时参与多个交易（你必须在再次购买前出售股票）。
//只要利润是正的就交易
var maxProfit = function(prices) {
  let profits = 0;
  for (let i = 1, l = prices.length; i < l; i++) {
    let d = prices[i] - prices[i - 1];
    if (d > 0){
      profits += d;
    }
  }
  return profits;
};
maxProfit([1, 2, 3, 2, 1, 2, 3]);

// var maxProfit = function (prices) {
//   var profit=0,
//       len=prices.length;
  
//   for(let i=0;i<len-1;++i){
//       let now=prices[i],
//           next=prices[i+1];

// 减少数组查询次数 ， 不用下标查询，直接用变量缓存是最快的
// 减少运算次数，能不加减就不加减 不要忘了大小于号

//       if(next>now){
//           profit+=next-now;
//       }
//   }
//   return profit;
// };