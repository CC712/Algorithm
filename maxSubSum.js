var maxSubArray = function(nums) {
    let t = nums[0];
    let res = t;
    for (let i = 1; i < nums.length; i++) {
        if (res >= 0) {
            if (t + nums[i] > 0) {
                t += nums[i];
            } else {
                t = 0;
            }
            res = Math.max(res, t);
        } else {
            if (nums[i] > 0) {
                t = nums[i];
            } else {
                t = Math.max(res, nums[i]);
            }
            res = Math.max(res, t);
        }
        console.log(res, t);
    }
    console.log('res:',res, t);
    return res;
};
//别人写的，多么优美...
var maxSubArray_ANSWER = function(nums) {
    if(nums != null){
           var sum = nums[0];
           var maxSum = nums[0];

           for(var i=1;i<nums.length;i++){
               sum = Math.max(nums[i], sum+=nums[i]);
               maxSum = Math.max(sum,maxSum);
           }

           return maxSum;
       }
  };
//最大子数组和， 可能是负数
let td1 = [1, 2, 3, -3, -2, 1, 7, -2, -3]; // 9
let td2 = [-1, -2, -3, -1, 10, -3, -1, -2]; //10
let td3 = [-1,1]; //1
let td4 = [-2,1,-3,4,-1,2,1,-5,4]; //6
maxSubArray(td4);
