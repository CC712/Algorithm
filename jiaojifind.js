/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 两个数组的交集
// [1，2，2，1] ^ [2，2]= > [2，2]
var intersect = function(nums1, nums2) {
  let longer = nums1.length > nums2.length ? nums1 : nums2,
    shorter = longer == nums1 ? nums2 : nums1;
  let s = {};
  let r = [];
  longer.forEach(num => {
    if (s[num] !== undefined) {
      s[num] += 1;
    } else {
      s[num] = 1;
    }
  });
  shorter.forEach(num => {
    if (s[num]) {
      r.push(num);
      s[num] -= 1;
    }
  });
  return r;
};
let a = [1, 2, 2, 1, 3];
let b = [2, 2, 3];
console.log(intersect(a, b));
//hashMap
//双指针
// 暴力n^2
