// import { createBTree } from "./Utils/utils.js";
//nodejs do not support this
const { createBTree } = require("./Utils/utils");

//to verify a binary search tree
// class node {
//     constructor(val, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }
//main
//  return false
//     10
//    /   \
//   5     15
//       /    \
//      6      20
// because 1 below 2 should  be bigger ( 1(no2) > 1(no1) ) than  1 about 2

//recursive
const isValidBST = function(root, last) {
    //is null
    if (!root) return true;
    if (!root.right && !root.left) return true;
    //not balance tree
    // if (root.left) {
    //     if (!root.right) return false;
    // }
    // if (root.right) {
    //     if (!root.left) return false;
    // }
    //basic verify
    let r = root;
    let ln = false,
        rn = false;
    if (last != undefined) {
        if (r.left && r.left.val >= r.val && last.val <= r.val) return false;
        if (r.right && r.right.val <= r.val && last.val >= r.val) return false;
    } else {
        if (r.left && r.left.val >= r.val) return false;
        if (r.right && r.right.val <= r.val) return false;
    }
    return isValidBST(r.left, r) && isValidBST(r.right, r);
};
//TDD
let t1 = [1, null, 2, null, null, 3], //TRUE
    t2 = [0, -1], //TRUE
    t3 = [1, 0, 2, null, null, 1, 3], // FALSE
    t4 = [10, 5, 15, null, null, 6, 20]; //FALSE
let tree = createBTree(t4);
console.log(isValidBST(tree));
