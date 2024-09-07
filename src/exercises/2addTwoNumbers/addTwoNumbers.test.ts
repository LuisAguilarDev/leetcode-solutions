import { describe, expect, test } from '@jest/globals';
import {
  addTwoNumbers,
  buildReversedListNode,
  ListNode,
} from './addTwoNumbers';

describe('Add Two Numbers', () => {
  test('', () => {
    const list1 = new ListNode(2);
    list1.next = new ListNode(4);
    list1.next.next = new ListNode(3);
    expect(buildReversedListNode(342)).toEqual(list1);
  });
  test('Add Two Numbers should return the sum as a linked list', () => {
    const list1 = buildReversedListNode(342);

    const list2 = buildReversedListNode(465);

    const list3 = buildReversedListNode(342 + 465);
    expect(addTwoNumbers(list1, list2)).toEqual(list3);
  });
  test('Add Two Numbers should return the sum as a linked list', () => {
    const list1 = new ListNode(0);

    const list2 = new ListNode(0);

    const list3 = new ListNode(0);
    expect(addTwoNumbers(list1, list2)).toEqual(list3);
  });
  test('Add Two Numbers should return the sum as a linked list', () => {
    const list1 = buildReversedListNode(9999);

    const list2 = buildReversedListNode(9999999);

    const list3 = buildReversedListNode(9999999 + 9999);
    expect(addTwoNumbers(list1, list2)).toEqual(list3);
  });
});
