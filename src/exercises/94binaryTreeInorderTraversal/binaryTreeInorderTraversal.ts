import { TreeNode } from '../../dataTypes/binaryTree/binaryTree';
import { dynamicStack } from '../../dataTypes/stack/stackFixed';

export function inorderTraversal(root: TreeNode | null): number[] {
  const stack = new dynamicStack<TreeNode>();
  let current = root;
  let response = [];
  while (current || !stack.isEmpty()) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    response.push(current!.val);
    current = current!.right;
  }
  return response;
}

export function inorderTraversalRecursive(node: TreeNode | null): number[] {
  if (!node) return [];
  function recursiveFunc(node: TreeNode | null): any {
    if (!node) return [];
    return [
      ...recursiveFunc(node?.left),
      node.val,
      ...recursiveFunc(node?.right),
    ];
  }
  return recursiveFunc(node);
}

export function preorderTraversalRecursive(node: TreeNode | null): number[] {
  if (!node) return [];
  function recursiveFunc(node: TreeNode | null): any {
    if (!node) return [];
    return [
      node.val,
      ...recursiveFunc(node?.left),
      ...recursiveFunc(node?.right),
    ];
  }
  return recursiveFunc(node);
}

export function postorderTraversalIterative(node: TreeNode | null): number[] {
  //TODO:
  if (!node) return [];
  function recursiveFunc(node: TreeNode | null): any {
    if (!node) return [];
    if (!node.left && !node.right) {
      return [node.val, ...recursiveFunc(node)];
    }
    return [
      ...recursiveFunc(node?.left || null),
      ...recursiveFunc(node?.right || null),
    ];
  }
  return [...recursiveFunc(node)];
}

export function levelOrderTraversalIterative(node: TreeNode | null): number[] {
  //TODO:
  if (!node) return [];
  function recursiveFunc(
    node: TreeNode | null,
    direction: 'left' | 'rigth'
  ): any {
    if (!node) return [];
    return [
      node.val,
      ...recursiveFunc(node?.left || null, 'left'),
      ...recursiveFunc(node?.right || null, 'rigth'),
    ];
  }
  return [
    node.val,
    ...recursiveFunc(node.left, 'left'),
    ...recursiveFunc(node.right, 'rigth'),
  ];
}

export function arrayToTreeNode(data: any[] | null): TreeNode | null {
  if (!data) return null;
  if (!data.length) return null;
  function builder(index: number): TreeNode | null {
    if (index >= data!.length || data![index] === null) return null;
    const node = new TreeNode(data![index]);
    node.left = builder(2 * index + 1);
    node.right = builder(2 * index + 2);
    return node;
  }
  return builder(0);
}

export function buildTreeFromArray(arr: Array<number | null> | null) {
  //??[1, 2, 3, 4, 5, null, 8, null, null, 6, 7, null, null, 9]
  if (!arr) return null;
  if (arr.length === 0) return null;
  const root = new TreeNode(arr[0]!);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const currentNode = queue.shift();
    if (arr[i] !== null) {
      currentNode!.left = new TreeNode(arr[i]!);
      queue.push(currentNode!.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      currentNode!.right = new TreeNode(arr[i]!);
      queue.push(currentNode!.right);
    }
    i++;
  }

  return root;
}
