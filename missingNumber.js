var missingNumber = function(nums) {
    let a = nums[0];
    for (let j = 1; j < nums.length + 1; j++) {
        a = a ^ nums[j];
    }
    for (let i = 0; i < nums.length + 1; i++) {
        a = a ^ i;
    }
    console.log(a);
    return a;
};
//直接转化为数学问题。。
var missingNumberV2 = function(nums) {
    let l = nums.length;
    console.log(l * ((l + 1) / 2) - nums.reduce((a, b) => a + b));
    return l * ((l + 1) / 2) - nums.reduce((a, b) => a + b);
};
missingNumberV2([0, 1, 2, 3, 5, 6, 7]);
