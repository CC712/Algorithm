var isPalindrome = function(s) {
  if (s == "") return true;
  s = s.replace(/[^a-z0-9 ]/gi, "");
  if (s.length < 1) return false;
  s = s.replace(/\s/g, "");
  if (s.length == 0) return true;
  console.log(s);
  let words = s.split("");
  words = words.map(word => word.toLowerCase());
  console.log(words, words.toString() == words.reverse().toString());
  return words.toString() == words.reverse().toString();
};
let t1 = "A man, a plan, a canal: Panama";
let t2 = "     ";
let ans = isPalindrome(t1);
console.log(ans);
//BUGGY