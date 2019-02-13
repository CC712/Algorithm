// import { createBTree } from "./Utils/utils.js";
//nodejs do not support this
const {
    createBTree
} = require("./Utils/utils");

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
//      13      20
//     /
//    9
//  (x > 10 && x < 13)   每一个值都有上下两个边界 如何去确定这个边界呢。。
// because 1 below 2 should  be bigger ( 1(no2) > 1(no1) ) than  1 about 2

//recursive
//
const isValidBST = function (root, last, direction) {
    //子树是BST 还不一定是平衡树 可能是瘸腿的
    const LEFT = 0;
    const RIGHT = 1;
    //base
    let isSubTrue = true;
    let isThisTrue = true;
    if (root) {
        if (root.left || root.right) {
            //如果是不平衡的二叉树 会取不到 left
            isSubTrue =
                isValidBST(root.left, root.val, LEFT) &&
                isValidBST(root.right, root.val, RIGHT);
        }

        if (direction == LEFT) {
            let s1 = (root.left && root.left.val < last) || !root.left;
            let s2 = (root.right && root.right.val < last) || !root.right;
            let s3 = !root;
            isThisTrue = (s1 && s2) || s3;
        } else if (direction == RIGHT) {
            let s1 = (root.left && root.left.val > last) || !root.left;
            let s2 = (root.right && root.right.val > last) || !root.right;
            let s3 = !root;
            isThisTrue = (s1 && s2) || s3;
        }
        let isLeftTrue = (root.left && root.val > root.left.val) || !root.left;
        let isRightTrue =
            (root.right && root.val < root.right.val) || !root.right;
        isThisTrue = isThisTrue && (isLeftTrue && isRightTrue);
        console.log(
            "=>",
            isThisTrue,
            isSubTrue,
            last,
            " | ",
            root.val,
            root.left ? root.left.val : null,
            root.right ? root.right.val : null
        );
    }

    return isThisTrue && isSubTrue;
};
/**
 *
 * @param { node } root 节点
 * @param { number } ub upper bound 上界
 * @param { number } lb lower bound 下界
 * @param { number } direction 节点的延伸方向  0 left 1 right
 */
const isValidBSTv2 = function (root, ub, lb, direction) {
    //上下边界
    let isThisTrue = true,
        isSubTrue = true;
    if (!root) {
        return true;
    }
    //recusive 

    //base
    let isLeftTrue = false,
        isRightTrue = false;
    //new upper bound 
    isLeftTrue = isValidBSTv2(root.left, root.val, lb, 0);
    //new upper bound 
    isRightTrue = isValidBSTv2(root.right, ub, root.val, 1);
    let s2 = ub !== undefined ? root.val < ub : true;
    let s3 = lb !== undefined ? root.val > lb : true;
    isThisTrue = s2 && s3;
    isSubTrue = isLeftTrue && isRightTrue;
    console.log('ub =>', ub, 'val =>', root.val, 'lb=>', lb,isThisTrue,isSubTrue);
    return isThisTrue && isSubTrue;
};
//TDD
let t1 = [1, null, 2, null, null, 3], //TRUE
    t2 = [0, -1], //TRUE
    t3 = [1, 0, 2, null, null, 1, 3], // FALSE
    t4 = [10, 5, 15, null, null, 6, 20], //FALSE
    t5 = [5, 14, null, 1],
    t6 = [3, 1, 5, 0, 2, 4, 6, null, null, null, 3]; //FALSE
let tree = createBTree(t4);
console.log(tree);
console.log(isValidBSTv2(tree));