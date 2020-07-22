// Source: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const node = new ListNode();
  // 使得 prev 的指针指向 node。而 node 永远指向自己的内存地址
  let prev = node;

  // 这个过程中 l1, l2 的 next 会越来越少
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next; // 向前移位
    } else {
      prev.next = l2;
      l2 = l2.next;
    }

    // console.log('prev before');
    // console.log(JSON.stringify(prev));

    // 链表向前移位，内存地址改变，但 node 此时仍然指向自己的内存地址，相当于 next 一直链接 prev 的地址
    prev = prev.next;

    // console.log('prev after');
    // console.log(JSON.stringify(prev));
    // console.log('node');
    // console.log(JSON.stringify(node));
  }

  prev.next = l1 ? l1 : l2;

  return node.next;
};

console.log(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4)))
  )
);
