var reverse = function(x) {
    let sign = x > 0 ? 1 : -1;
    const INT_MAX = Math.pow(2,31) - 1;
    const INT_MIN = 1 - INT_MAX;
    let nums = [];
    x = x * sign;
    while(x > 0){
        nums.push(x % 10);
        x = ~~(x / 10);
    }
    // console.log(nums);
    let ans = sign * nums.reverse().reduce((o,num, i) => o + num * Math.pow(10,i) ,0);
    if(ans < INT_MIN) return 0;
    if(ans > INT_MAX) return 0;
    return ans;
};
var reverse_v1 = function(x) {
    let sign = x > 0 ? 1 : -1;
    const INT_MAX = Math.pow(2,31) - 1;
    const INT_MIN = 1 - INT_MAX;
    x = x * sign;//abs
    let ans = 0;
    while(x > 0){
        ans = ans * 10 + x %10;
        x = ~~(x / 10);
    }
    // console.log(nums);
    ans = sign * ans;
    if(ans < INT_MIN || ans > INT_MAX) return 0;
    return ans;
};
console.time('origin');
for(let i = 0;i<100000;i++)
reverse(-123);
// console.log(reverse(-123));
console.timeEnd('origin');
//少了数组操作之后 快了9倍 但是在leetcode 不准。。 O(log10(N) + constant) 大概这么个速度吧
console.time('v1');
for(let i = 0;i<100000;i++)
reverse_v1(-123);
// console.log(reverse_v1(-123));
console.timeEnd('v1');
