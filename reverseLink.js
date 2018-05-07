/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//迭代的
var reverseList = function(head) {
  let res = null;
  let p = null;
  while (head.next != null) { // 逻辑其实不是很复杂，就是两个指针 一个是now 一个是next  ，顺序向右移动 now逐渐变长，next变短 就成了
    p = head.next;
    head.next = res;
    res = head;
    head = p;
  }
  p.next = res;
  res = p;
  return res;
};
//递归的
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
let h = glink([1, 2, 3]);
console.log(reverseList(h));

