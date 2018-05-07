/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// recusive too slow
// var maxDepth = function(root) {
//     if(root == null) return 0
//     if(!root.left && !root.right) return 1
//     return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
// };
//iterative try Level Order Traversal 等级顺序遍历
// 层级遍历之后 插入一个级别分隔符 然后数分隔符
var maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    let stack = [root, "level"];
    while (stack.length) {
        let n = stack.pop();
        if (n === "level") {
            depth++;
            if (stack.length) {
                stack.push("level");
            }
        }
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    return depth;
};
//TDD
function generateTreeDFS(arr, root) {
    let node = function(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    };
    root = root || new node(arr.shift());
    while (arr.length > 0) {
        root.left = new node(arr.shift());
        root.right = new node(arr.shift());
    }
    generateTreeDFS(arr, root.left);
    generateTreeDFS(arr, root.left);
    return root;
}
