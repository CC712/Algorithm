var rotate = function(nums, k) {
    let rk = k % nums.length;
    // for(let i = 0 ; i < rk; i++){
        nums.unshift(...nums.splice(-rk));
    // }
};
let num = [1,2,3,4,5,6,7];
rotate(num, 30);
console.log(num);