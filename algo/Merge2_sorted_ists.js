/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let list11 = [1, 2, 4]
let list22 = [1, 3, 4]

let list1 = [new ListNode(1)]
let list2 = [new ListNode(2)]

var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(0)
  let current = head

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }
  if (list1 != null) {
    current.next = list1
  }
  if (list2 != null) {
    current.next = list2
  }
  return head.next
}

console.log(mergeTwoLists(list1, list2))
