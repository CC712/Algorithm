var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let l = m + n;
    while (i < l && nums2.length) {
        if (nums2[0] < nums1[i]) {
            nums1.splice(i, 0, nums2.shift());
            m++;
        }
        i++;
    }
    // console.log(nums1,nums2,m,i);
    nums1.splice(m,nums1.length - m,...nums2);
};
let n1 = [1, 2, 3, 0, 0, 0];
let n2 = [2, 5, 6];
merge(n1, 3, n2, 3);
console.log(n1);
