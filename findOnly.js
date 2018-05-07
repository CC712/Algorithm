var firstUniqChar = function(s) {
    let m = {};
    s.split('').forEach(l => m[l] = m[l] ? m[l] + 1 : 1); //O(n)
    console.log(m);
    for(let i in m){
        if(m[i] == 1) return  s.indexOf(i);
    }
    return '';
};
console.log(firstUniqChar('asdasdwasdddddddssssaa'));