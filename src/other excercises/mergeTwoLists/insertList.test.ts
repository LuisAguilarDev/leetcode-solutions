import { arrayToListNode, insertList, listNodeToArray } from './insertList';

describe('Merge two sorted list', () => {
  test('It should merge the two sorted list in order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([5, 4, 3, 2, 4, 6, 1]);
    expect(insertList(list1, list2, 3, 'der')).toEqual(list3);
  });
  test('It should merge the two sorted list in order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([5, 4, 3, 4, 6, 2, 1]);
    expect(insertList(list1, list2, 3, 'izq')).toEqual(list3);
  });
  test('It should merge the two sorted list in order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([4, 6, 5, 4, 3, 2, 1]);
    expect(insertList(list1, list2, 0, 'der')).toEqual(list3);
  });
  test('It should merge the two sorted list in order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([5, 4, 3, 2, 1, 4, 6]);
    expect(insertList(list1, list2, 4, 'izq')).toEqual(list3);
  });
  test('It should merge the two sorted list in order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list3 = arrayToListNode([5, 4, 3, 2, 1]);
    expect(insertList(list1, null, 0, 'der')).toEqual(list3);
  });
  test('It should merge the two sorted list in order', () => {
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([4, 6]);
    expect(insertList(null, list2, 4, 'izq')).toEqual(list3);
  });
});