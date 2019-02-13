/**
 *  a + b + c == 0 in  nums
 * @param {Array} nums
 */
var threeSum = function(nums) {
    // 问题降阶 ->2个数字 -> 一个数字
    // N *  n
    //dp
    //progress
    // 00 01 02 03 0n
    // N^2
    let ans = [];
    nums = new Set(nums);
    nums = Array.from(nums);
    //n 去重
    if (nums.length < 3) return ans;
    let m = [];
    for (let i in nums) {
        !m[i] && (m[i] = []);
        let n = m[i];
        for (let j in nums) {
            i != j && n.push(nums[j]);
        }
    }
    //降阶 n^2
    return m.map((arr,i)=>{

    });
};
// n ?
function twoSum(ans, nums) {
    let rtn = [];
    for (let i in nums) {
        let _ans = ans - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (_ans == nums[j]) {
                rtn.push([nums[i], nums[j]]);
            }
        }
    }
    return rtn;
}
threeSum([1, 1, 1, 1, -1, -1, -1]);
