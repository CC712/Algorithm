var myAtoi = function(str) {
  let min = Math.pow(2, 31) * -1,
    max = -min - 1;
  str = str.match(/^\s*([-+]?\d+)/);
  console.log(str);
  if(!str) return 0;
  let ans = Number(str[1]);
  if (ans > max) return max;
  if (ans < min) return min;
  return ans;
};
let s = "     +68 123";
console.log(myAtoi(s));
