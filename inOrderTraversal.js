const {
    createBTree
} = require("./Utils/utils");
let t1 = [1, null, 2, 3], //TRUE
    t2 = [0, -1], //TRUE
    t3 = [1, 0, 2, null, null, 1, 3], // FALSE
    t4 = [10, 5, 15, null, null, 6, 20], //FALSE
    t5 = [5, 14, null, 1],
    t6 = [3, 1, 5, 0, 2, 4, 6, null, null, null, 3]; //FALSE
let tree = createBTree(t1);
var inorderTraversal = function (root) {
    //中序遍历
    let rtn = [];
    let mid = (node) => {
        if (node) {
            mid(node.left);
            rtn.push(node.val);
            mid(node.right);

        } else {
            return;
        }
    };
    mid(root);
    return rtn;
};
inorderTraversal(tree);
// console.log(tree);