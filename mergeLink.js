/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 && l2) {
    let s = null;
    let m;
    while (l1 && l2) {
      if (!s) {
        s = l1.val > l2.val ? l2 : l1;
        if (s == l1) l1 = l1.next;
        else l2 = l2.next;
        m = s;
      }
      if(!(l1 && l2)) break;
      m.next = l1.val > l2.val ? l2 : l1;
      if (m.next == l1) l1 = l1.next;
      else l2 = l2.next;
      m = m.next;
    }
    m.next = l1 ? l1 : l2 ? l2 : null;
    return s;
  } else {
    return l1 ? l1 : l2 ? l2 : null;
  }
};
//TDD
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
let h = glink([1,2]);
let h1 = glink([]);
console.log(JSON.stringify(mergeTwoLists(h, h1)));
