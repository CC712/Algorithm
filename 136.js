// 给定一个整数数组，除了某个元素外其余元素均出现两次。请找出这个只出现一次的元素。
// 备注：
// 你的算法应该是一个线性时间复杂度。 你可以不用额外空间来实现它吗？
var singleNumber = function(nums) {
  let arr = {};
  nums.forEach(num => {
    if (arr[num] == undefined) {
      arr[num] = 1;
    } else {
      arr[num] += 1;
    }
  });
  console.log(arr);
  for (let i in arr) {
    if (arr[i] == 1) {
      return i - 0;
    }
  }
};
var singleNumber = function(nums) {
  return nums.reduce((o, n) => o ^ n, 0);
};
//连续取反 就回到原来的数 二进制算法 其实应该有一个类型转换才对 应该是动态类型直接省略了
console.log(singleNumber([-1, -1, -2, 1, 1]));
