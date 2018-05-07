// 你是一个专业的小偷，
// 计划偷窃沿街的房屋。
// 每间房内都藏有一定的现金，
// 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
let m = [];
var rob = function(nums) {
    if (nums.length < 1) return 0;
    if (nums.length == 1) {
        return 1;
    }
    return  Math.max(
        rob(nums.slice(-1)),
        nums[nums.length - 1] + rob(nums.slice(-2))
    );
};
// 子问题 是   当前偷和不偷 对于最终的影响
//问题建模
/**
 * 自顶向下 最优解 i = nums.length 时 值最大
 * 子问题   i = i -1 时 i = i -2 时 值谁大 取谁
 */
let td1 = [1, 2, 3, 1]; // 4
let td2 = [1, 3, 3, 4]; //6
let td3 = [2, 1]; //2
let td4 = [2, 7, 9, 3, 1]; //12
let td5 = [1]; //1
let td6 = [2, 1, 1, 2, 1, 1]; // should be 5
// rob(td6);
console.log(rob(td6));
console.log(m);
