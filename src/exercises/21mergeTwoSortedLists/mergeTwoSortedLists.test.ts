import { buildReversedListNode } from '../2addTwoNumbers/addTwoNumbers';
import { mergeTwoLists } from './mergeTwoSortedLists';

describe('Merge two sorted list', () => {
  test('It should merge the two sorted list in order', () => {
    const list1 = buildReversedListNode(421);
    const list2 = buildReversedListNode(431);
    const list3 = buildReversedListNode(443211);
    expect(mergeTwoLists(list1, list2)).toEqual(list3);
  });
  test('It should merge the two sorted list in order', () => {
    expect(mergeTwoLists(null, null)).toEqual(null);
  });
  test('It should merge the two sorted list in order', () => {
    expect(mergeTwoLists(null, buildReversedListNode(0))).toEqual(
      buildReversedListNode(0)
    );
  });
  test('It should merge the two sorted list in order', () => {
    const list1 = buildReversedListNode(9876543);
    const list2 = buildReversedListNode(9876543);
    const list3 = buildReversedListNode(99887766554433);
    expect(mergeTwoLists(list1, list2)).toEqual(list3);
  });
});
