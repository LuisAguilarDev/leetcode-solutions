import { arrayToListNode, insertList, listNodeToArray } from './insertList';

describe('insert list', () => {
  test('#1 It should insert the list in the desired order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list3 = arrayToListNode([5, 4, 3, 2, 1]);
    expect(insertList(list1, null, 0, 'der')).toEqual(list3);
  });

  test('#2 It should insert the list in the desired order', () => {
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([4, 6]);
    expect(insertList(null, list2, 4, 'izq')).toEqual(list3);
  });

  test('#3 It should insert the list in the desired order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([5, 4, 3, 2, 4, 6, 1]);
    expect(insertList(list1, list2, 3, 'der')).toEqual(list3);
  });

  test('#4 It should insert the list in the desired order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([5, 4, 3, 4, 6, 2, 1]);
    expect(insertList(list1, list2, 3, 'izq')).toEqual(list3);
  });
  test('#5 It should insert the list in the desired order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([4, 6, 5, 4, 3, 2, 1]);
    expect(insertList(list1, list2, 0, 'izq')).toEqual(list3);
  });
  test('#6 It should insert the list in the desired order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([5, 4, 3, 2, 4, 6, 1]);
    expect(insertList(list1, list2, 4, 'izq')).toEqual(list3);
  });
  test('#7 It should insert the list in the desired order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([5, 4, 6, 4, 3, 2, 1]);
    expect(insertList(list1, list2, 1, 'izq')).toEqual(list3);
  });
  test('#8 It should insert the list in the desired order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([5, 4, 4, 6, 3, 2, 1]);
    expect(insertList(list1, list2, 2, 'izq')).toEqual(list3);
  });

  test('#9 It should insert the list in the desired order', () => {
    const list1 = arrayToListNode([5, 4, 3, 2, 1]);
    const list2 = arrayToListNode([4, 6]);
    const list3 = arrayToListNode([5, 4, 6, 4, 3, 2, 1]);
    expect(insertList(list1, list2, 0, 'der')).toEqual(list3);
  });
});
