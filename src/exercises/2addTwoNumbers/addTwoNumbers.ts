export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
  }
}

export const addTwoNumbers = function (
  l1: ListNode | null,
  l2: ListNode | null
) {
  const tempNode = new ListNode();
  let current = tempNode;
  let carry = 0;
  let total = 0;
  while (l1 || l2 || carry) {
    total = carry;
    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }
    let num = total % 10;
    carry = Math.floor(total / 10);
    current.next = new ListNode(num);
    current = current.next;
  }
  return tempNode.next;
};

export const buildReversedListNode = (number: number): ListNode => {
  const stringNumber = number.toString().split('').reverse().join('');
  let current: ListNode | null = null;
  let list1: ListNode;

  for (const ch of stringNumber) {
    if (current === null) {
      current = new ListNode(+ch);
      list1 = current;
    } else {
      current.next = new ListNode(+ch);
      current = current.next;
    }
  }
  return list1!;
};
