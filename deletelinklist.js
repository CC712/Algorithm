/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// console.log("before", nodehead);
var deleteNode = function(node) {
  while (node.next.next !== null) {
    node.val = node.next.val;
    node = node.next;
  }
  node.val = node.next.val;
  node.next = null;
};
//索引引用，减少next 的次数  还不如第一种
var deleteNode_v1 = function(node) {
  let n = node.next,
    nn = n.next;
  while (nn !== null) {
    node.val = n.val;
    node = n;
    n = n.next;
    nn = n.next;
  }
  node.val = node.next.val;
  node.next = null;
};

// console.log("after", nodehead);

//生成链表
function glink(arr) {
  var node = function(val, next) {
    this.val = val;
    this.next = next;
  };
  let head = null;
  for (let i = arr.length; i > 0; i--) {
    head = new node(arr[i - 1], head);
  }
  return head;
}
function gArr(length) {
  let res = [];
  while (length) {
    res.push(Math.random());
    length--;
  }
  return res;
}
//TDD
let h = glink(gArr(10000));
let h1 = glink(gArr(10000));
console.time("o");
for (let i = 0; i < 100; i++) deleteNode(h);
console.timeEnd("o");
console.time("1");
for (let i = 0; i < 100; i++) deleteNode_v1(h1);
console.timeEnd("1");
