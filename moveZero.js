var moveZeroes = function (nums) {
  let c = 0;
  for (let i = 0; nums[i] !== undefined; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      i--;
      c++;
    }
  }
  console.log(c);
  for (; c > 0; c--) {
    nums.push(0);
  }
};
let num = [0, 0, 1, 0, 1];
moveZeroes(num);
console.log(num);