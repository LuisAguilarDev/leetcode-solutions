import { ListNode } from '../2addTwoNumbers/addTwoNumbers';

export const mergeTwoLists = function (
  list1: ListNode | null,
  list2: ListNode | null
) {
  let tempHead = new ListNode();
  let currrent = tempHead;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      currrent.next = list2;
      list2 = list2.next;
    } else {
      currrent.next = list1;
      list1 = list1.next;
    }
    currrent = currrent.next;
  }

  currrent.next = list1 || list2;

  return tempHead.next;
};
