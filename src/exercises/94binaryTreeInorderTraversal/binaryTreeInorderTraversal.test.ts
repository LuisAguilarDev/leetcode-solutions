import {
  arrayToTreeNode,
  buildTreeFromArray,
  inorderTraversalIterative,
  inorderTraversalRecursive,
  levelOrderTraversalIterative,
  levelOrderTraversalRecursive,
  postorderTraversalIterative,
  postorderTraversalRecursive,
  preorderTraversalIterative,
  preorderTraversalRecursive,
} from './binaryTreeInorderTraversal';

describe('94. Binary Tree Inorder Traversal', () => {
  test("#1 Given the root of a binary tree, return the inorder traversal of its nodes' values.", () => {
    expect(
      inorderTraversalIterative(arrayToTreeNode([1, null, 2, null, null, 3]))
    ).toEqual([1, 3, 2]);
  });
  test("#2 Given the root of a binary tree, return the inorder traversal of its nodes' values.", () => {
    expect(
      inorderTraversalIterative(
        arrayToTreeNode([
          1,
          2,
          3,
          4,
          5,
          null,
          8,
          null,
          null,
          6,
          7,
          null,
          null,
          9,
        ])
      )
    ).toEqual([4, 2, 6, 5, 7, 1, 3, 9, 8]);
  });
  test("#3 Given the root of a binary tree, return the inorder traversal of its nodes' values.", () => {
    expect(inorderTraversalIterative(arrayToTreeNode(null))).toEqual([]);
  });
  test("#4 Given the root of a binary tree, return the inorder traversal of its nodes' values.", () => {
    expect(inorderTraversalIterative(arrayToTreeNode([1]))).toEqual([1]);
  });
  test('#5 testing the leet code array builder', () => {
    const arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
    expect(buildTreeFromArray(arr)).toEqual(
      arrayToTreeNode([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, null, null, 9])
    );
  });
  test("#6 Given the root of a binary tree, return the inorder traversal of its nodes' values.", () => {
    expect(
      inorderTraversalRecursive(arrayToTreeNode([1, null, 2, null, null, 3]))
    ).toEqual([1, 3, 2]);
  });
  test("#7 Given the root of a binary tree, return the inorder traversal of its nodes' values.", () => {
    expect(
      inorderTraversalRecursive(
        arrayToTreeNode([
          1,
          2,
          3,
          4,
          5,
          null,
          8,
          null,
          null,
          6,
          7,
          null,
          null,
          9,
        ])
      )
    ).toEqual([4, 2, 6, 5, 7, 1, 3, 9, 8]);
  });
  test("#8 Given the root of a binary tree, return the inorder traversal of its nodes' values.", () => {
    expect(inorderTraversalRecursive(arrayToTreeNode(null))).toEqual([]);
  });
  test("#9 Given the root of a binary tree, return the inorder traversal of its nodes' values.", () => {
    expect(inorderTraversalRecursive(arrayToTreeNode([1]))).toEqual([1]);
  });
  test("#10 Given the root of a binary tree, return the preorder traversal of its nodes' values.", () => {
    expect(
      preorderTraversalIterative(arrayToTreeNode([1, 2, 3, 4, 5, 6, 7]))
    ).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  test("#11 Given the root of a binary tree, return the preorder traversal of its nodes' values.", () => {
    expect(
      preorderTraversalRecursive(arrayToTreeNode([1, 2, 3, null, null, 6, 7]))
    ).toEqual([1, 2, 3, 6, 7]);
  });
  test("#12 Given the root of a binary tree, return the preorder traversal of its nodes' values.", () => {
    expect(
      preorderTraversalRecursive(arrayToTreeNode([1, 2, 3, 4, 5, 6, 7]))
    ).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  test("#13 Given the root of a binary tree, return the preorder traversal of its nodes' values.", () => {
    expect(
      preorderTraversalRecursive(arrayToTreeNode([1, 2, 3, null, null, 6, 7]))
    ).toEqual([1, 2, 3, 6, 7]);
  });
  test("#14 Given the root of a binary tree, return the postorder traversal of its nodes' values.", () => {
    expect(
      postorderTraversalIterative(arrayToTreeNode([1, 2, 3, 4, 5, 6, 7]))
    ).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });
  test("#15 Given the root of a binary tree, return the postorder traversal of its nodes' values.", () => {
    expect(
      postorderTraversalIterative(arrayToTreeNode([1, 2, 3, null, null, 6, 7]))
    ).toEqual([2, 6, 7, 3, 1]);
  });
  test("#16 Given the root of a binary tree, return the postorder traversal of its nodes' values.", () => {
    expect(
      postorderTraversalRecursive(arrayToTreeNode([1, 2, 3, 4, 5, 6, 7]))
    ).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });
  test("#17 Given the root of a binary tree, return the postorder traversal of its nodes' values.", () => {
    expect(
      postorderTraversalRecursive(arrayToTreeNode([1, 2, 3, null, null, 6, 7]))
    ).toEqual([2, 6, 7, 3, 1]);
  });
  test("#18 Given the root of a binary tree, return the level order traversal of its nodes' values.", () => {
    expect(
      levelOrderTraversalIterative(arrayToTreeNode([1, 2, 3, 4, 5, 6, 7]))
    ).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  test("#19 Given the root of a binary tree, return the level order traversal of its nodes' values.", () => {
    expect(
      levelOrderTraversalIterative(arrayToTreeNode([1, 2, 3, 4, 5, 6, 7]))
    ).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  test("#20 Given the root of a binary tree, return the level order traversal of its nodes' values.", () => {
    expect(
      levelOrderTraversalRecursive(arrayToTreeNode([1, 2, 3, 4, 5, 6, 7]))
    ).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  test("#21 Given the root of a binary tree, return the level order traversal of its nodes' values.", () => {
    expect(
      levelOrderTraversalRecursive(arrayToTreeNode([1, 2, 3, 4, 5, 6, 7]))
    ).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
