import { NaryTree } from '../../dataTypes/NAryTree/NAryTree';
import {
  bfsIterative,
  bfsRecursive,
  dfsPreorderIterative,
  dfsPreorderRecursive,
} from './NAryTreeTraversalTechniques';

describe('N-ary traversal techniques', () => {
  test('#1 It should traverse the tree in the desired order bfs iteratively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(3)];
    root.children[0].children = [new NaryTree(4), new NaryTree(5)];
    root.children[1].children = [new NaryTree(6), new NaryTree(7)];
    expect(bfsIterative(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('#2 It should traverse the tree in the desired order bfs iteratively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(3)];
    root.children[1].children = [new NaryTree(6), new NaryTree(7)];
    expect(bfsIterative(root)).toEqual([1, 2, 3, 6, 7]);
  });
  test('#3 It should traverse the tree in the desired order bfs recursively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(3)];
    root.children[0].children = [new NaryTree(4), new NaryTree(5)];
    root.children[1].children = [new NaryTree(6), new NaryTree(7)];
    expect(bfsRecursive(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('#4 It should traverse the tree in the desired order bfs recursively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(3)];
    root.children[1].children = [new NaryTree(6), new NaryTree(7)];
    expect(bfsRecursive(root)).toEqual([1, 2, 3, 6, 7]);
  });
  test('#5 It should traverse the tree in the desired order dfs preorder recursively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(3)];
    root.children[0].children = [new NaryTree(4), new NaryTree(5)];
    root.children[1].children = [new NaryTree(6), new NaryTree(7)];
    expect(dfsPreorderRecursive(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  test('#6 It should traverse the tree in the desired order dfs preorder recursively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(3)];
    root.children[1].children = [new NaryTree(6), new NaryTree(7)];
    expect(dfsPreorderRecursive(root)).toEqual([1, 2, 3, 6, 7]);
  });
  test('#7 It should traverse the tree in the desired order dfs(pre-order) iteratively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(3)];
    root.children[0].children = [new NaryTree(4), new NaryTree(5)];
    root.children[1].children = [new NaryTree(6), new NaryTree(7)];
    expect(dfsPreorderIterative(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  test('#8  It should traverse the tree in the desired order dfs(pre-order) iteratively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(3)];
    root.children[1].children = [new NaryTree(6), new NaryTree(7)];
    expect(dfsPreorderIterative(root)).toEqual([1, 2, 3, 6, 7]);
  });
  test('#9  It should traverse the tree in the desired order dfs(pre-order) iteratively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(6), new NaryTree(10)];
    root.children[0].children = [
      new NaryTree(3),
      new NaryTree(4),
      new NaryTree(5),
    ];
    root.children[1].children = [
      new NaryTree(7),
      new NaryTree(8),
      new NaryTree(9),
    ];
    root.children[2].children = [
      new NaryTree(11),
      new NaryTree(12),
      new NaryTree(13),
    ];
    expect(dfsPreorderIterative(root)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    ]);
  });
  test('#9  It should traverse the tree in the desired order dfs(pre-order) recursively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(6), new NaryTree(10)];
    root.children[0].children = [
      new NaryTree(3),
      new NaryTree(4),
      new NaryTree(5),
    ];
    root.children[1].children = [
      new NaryTree(7),
      new NaryTree(8),
      new NaryTree(9),
    ];
    root.children[2].children = [
      new NaryTree(11),
      new NaryTree(12),
      new NaryTree(13),
    ];
    expect(dfsPreorderRecursive(root)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    ]);
  });
  test('#10  It should traverse the tree in the desired order bfs iteratively', () => {
    const root = new NaryTree(1);
    root.children = [new NaryTree(2), new NaryTree(6), new NaryTree(10)];
    root.children[0].children = [
      new NaryTree(3),
      new NaryTree(4),
      new NaryTree(5),
    ];
    root.children[1].children = [
      new NaryTree(7),
      new NaryTree(8),
      new NaryTree(9),
    ];
    root.children[2].children = [
      new NaryTree(11),
      new NaryTree(12),
      new NaryTree(13),
    ];
    expect(bfsIterative(root)).toEqual([
      1, 2, 6, 10, 3, 4, 5, 7, 8, 9, 11, 12, 13,
    ]);
  });
});
