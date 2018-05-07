var longestCommonPrefix = function(strs) {
  if(strs.length < 1) return '';
  if(strs.length < 2) return strs[0];  
  let i = 0;
  let isSame = true;
  while (isSame) {
    isSame = strs.every(str => str[i] !== undefined && str[i] === strs[0][i]);
    if (isSame) i++;
    else return strs[0].substring(0, i);
  }
  return '';
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix([]));
