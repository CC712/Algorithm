// SPACE COMPLEXITY O(n)
var removeDuplicates = function(nums) {
  let set = Array.from(new Set(nums));
  for (let i = 0; i < set.length; i++) {
    nums[i] = set[i];
  }
  return set.length;
};
// SPACE COMPLEXITY O(1)
var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  let pos = 0;
  for (let i = 1; i < nums.length ; i++) {
    if (nums[i] !== nums[pos]) {
      nums[++pos] = nums[i];
    }
  }
  return pos + 1;
};
let nums = [1, 1, 3];
let len = removeDuplicates(nums);
console.log(nums, len);
