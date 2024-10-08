import { buildNaryTreeFromArray, longestPathIterative } from './longestPath';

describe('Longest Path', () => {
  test('#1 It should return the longest path of the tree', () => {
    const root = buildNaryTreeFromArray([
      [1, 3],
      [2, 2],
      [3, 2],
      [25, 1],
      [4, 0],
      [5, 2],
      [6, 0],
      [7, 2],
      [26, 0],
      [8, 0],
      [9, 2],
      [10, 0],
      [11, 0],
      [12, 0],
      [13, 2],
      [14, 0],
      [15, 1],
      [16, 0],
    ]);
    expect(longestPathIterative(root)).toEqual([1, 2, 5, 9, 13, 15, 16]);
  });
  test('#2 It should return the longest path of the tree', () => {
    const tree = buildNaryTreeFromArray([
      [1, 3],
      [2, 1],
      [3, 2],
      [25, 1],
      [4, 0],
      [5, 1],
      [6, 0],
      [26, 0],
      [7, 1],
      [8, 0],
    ]);
    expect(longestPathIterative(tree)).toEqual([1, 3, 5, 7, 8]);
  });
});
