var countAndSay = function(n) {
  let s = 1;
  while (n > 1) {
    let nums = String(s).match(/(\d)(\1+)?/gi);
    console.log(nums);
    s = nums.reduce((o, num) => {
      return o + (String(String(num).length) + num.slice(0, 1));
    }, '');
    n--;
  }
  return s;
};
console.log(countAndSay(4));