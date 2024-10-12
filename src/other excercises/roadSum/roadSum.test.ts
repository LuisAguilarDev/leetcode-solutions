import { buildNaryTreeFromArray } from '../longestPath/longestPath';
import { roadSumIterative, roadSumRecursive } from './roadSum';

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
    expect(roadSumIterative(root)).toEqual([7, 16, 29, 44, 61, 10, 21, 22, 52]);
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
    expect(roadSumIterative(tree)).toEqual([7, 24, 10, 52]);
  });
  test('#3 It should return the longest path of the tree', () => {
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
    expect(roadSumRecursive(root)).toEqual([7, 16, 29, 44, 61, 10, 21, 22, 52]);
  });
  test('#4 It should return the longest path of the tree', () => {
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
    expect(roadSumRecursive(tree)).toEqual([7, 24, 10, 52]);
  });
});
