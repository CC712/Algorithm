// [1,2,3] 5
// [1,2]
var twoSum = function(nums, target) {
  let set = {};
  nums.forEach((num, i) => (set[num] = i));
  let index = nums.findIndex(
    (n, i) => set[target - n] !== i && set[target - n] > -1
  );
  return [
    index,
    nums.findIndex((x, i) => x == target - nums[index] && i !== index)
  ];
};
const l = console.log;
// twoSum([1,2,3],5);
// twoSum([3,2,4],6);
// l(twoSum([3,3],6));

