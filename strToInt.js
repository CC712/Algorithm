var myAtoi = function (str) {
  let min = Math.pow(2, 31) * -1,
    max = -min - 1;
  str = str.match(/^\s*([-+]?\d+)/);
  console.log(str);
  if (!str) return 0;
  let ans = Number(str[1]);
  if (ans > max) return max;
  if (ans < min) return min;
  return ans;
};
var myAtoiv2 = function (str) {
  let min = Math.pow(2, 31) * -1,
    max = -min - 1;
  //分离
  let s = 0,
    e = 0;
  for (let i = 0; i < str.length; i++) {
    n = str[i];
    console.log('loop', n);
    if (n == '') {
      s++;
      continue;
    } else if (e == 0 && (n == '-' || n == '+')) {
      e = s + 1;
      continue;
    } else if (Number.isInteger(n)) {
      e++;
      continue;
    } else {
      break;
    };
    //TODO: 如何判断是连续数字
  }
  console.log(str.substring(s, e), s, e);
  //判断
  if (!str) return 0;
  let ans = Number(str[1]);
  if (ans > max) return max;
  if (ans < min) return min;
  return ans;
};
let s = "     +68 123";
//问题是很慢 因为正则表达式 效率很低的
console.log(myAtoiv2(s));