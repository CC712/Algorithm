/**
 *
 *  输入:
 * [1,2,3]
 * 出:
 * 3
 * 解释:
 * 只需要3次移动（注意每次移动会增加两个元素  n-1 的值）：
 *
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var minMoves = function(nums) {
//   if (nums.length == 2) return Math.abs(nums[0] - nums[1]);
//   if (nums.every(x => x == nums[0])) return 0;
//   let max = Math.max(...nums);
//   let l = nums.length;
//   let sum_distance = nums.reduce((o, n) => o + max - n, 0);
//   let c = 0;
//   while(sum_distance % (l - 1) !== 0){
//       sum_distance += l;
//       c++;
//   }
//   max = max + c;
//   return c ;
// };
var minMoves = function(nums) {
  //问题的规模逐渐增加
  const l = nums.length;
  if (l < 2) return 0;
  if (l == 2) return Math.abs(nums[0] - nums[1]);
  //三个 及以上
  let aim = Math.max(...nums);
  let sum = nums.reduce((o, n) => o + n, 0);
  //bugfix
  if(aim % 2 == 0 && sum == 0) aim += 1;
  let t = () => (aim * l - sum) / (l - 1);
  while (t() % 1 !== 0) {
    aim = aim + 1;
  }
  return t();
};
minMoves([1, 1, 0, -1, -1]);
minMoves([1, 0, -1]);
minMoves([-9, 0, 9]);
//bug too 当 aim 是偶数 并且 sum == 0 的时候有Bug 这个计算方法直接就失效了
minMoves([-100, 0, 100]);
//buggey why ?
minMoves([1, 2, 3]);
minMoves([1, 1, 214748367]);
//这个数这么大肯定 要计算出来了
// sum == 0 的时候
