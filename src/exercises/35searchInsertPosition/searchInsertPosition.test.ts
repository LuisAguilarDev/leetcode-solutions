import {
  recursiveSearchInsert,
  iterableSearchInsert,
} from './searchInsertPosition';
describe('35. Search Insert Position', () => {
  // Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
  test('#1 it should return the current index or the index where it would be if it were inserted in order', () => {
    expect(recursiveSearchInsert([1, 3, 5, 6], 5)).toEqual(2);
  });
  test('#2 it should return the current index or the index where it would be if it were inserted in order', () => {
    expect(recursiveSearchInsert([1, 3, 5, 6], 2)).toEqual(1);
  });
  test('#3 it should return the current index or the index where it would be if it were inserted in order', () => {
    expect(recursiveSearchInsert([1, 3, 5, 6], 7)).toEqual(4);
  });

  test('#4 it should return the current index or the index where it would be if it were inserted in order', () => {
    expect(recursiveSearchInsert([3, 4, 5, 6], 1)).toEqual(0);
  });
  test('#1 it should return the current index or the index where it would be if it were inserted in order', () => {
    expect(iterableSearchInsert([1, 3, 5, 6], 5)).toEqual(2);
  });
  test('#2 it should return the current index or the index where it would be if it were inserted in order', () => {
    expect(iterableSearchInsert([1, 3, 5, 6], 2)).toEqual(1);
  });
  test('#3 it should return the current index or the index where it would be if it were inserted in order', () => {
    expect(iterableSearchInsert([1, 3, 5, 6], 7)).toEqual(4);
  });

  test('#4 it should return the current index or the index where it would be if it were inserted in order', () => {
    expect(iterableSearchInsert([3, 4, 5, 6], 1)).toEqual(0);
  });
});
