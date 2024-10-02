import { TreeNode } from '../../dataTypes/binaryTree/binaryTree';
import { DynamicStack } from '../../dataTypes/stack/stackFixed';
import { DinamycQueue } from '../../dataTypes/queue/queue';

export function inorderTraversalIterative(root: TreeNode | null): number[] {
  const response: number[] = [];
  const stack = new DynamicStack<TreeNode>();
  let current = root;
  while (current || !stack.isEmpty()) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    response.push(current!.val);
    current = current?.right ?? null;
  }
  return response;
}

export function inorderTraversalRecursive(node: TreeNode | null): number[] {
  const result: number[] = [];
  function recursiveFunc(node: TreeNode | null) {
    if (!node) return [];
    recursiveFunc(node.left);
    result.push(node.val);
    recursiveFunc(node.right);
  }
  recursiveFunc(node);
  return result;
}

export function preorderTraversalIterative(node: TreeNode | null): number[] {
  if (!node) return [];
  const response: number[] = [];
  const stack = new DynamicStack<TreeNode>();
  stack.push(node);
  while (!stack.isEmpty()) {
    let current = stack.pop();
    response.push(current!.val);
    if (current?.right) {
      stack.push(current.right);
    }
    if (current?.left) {
      stack.push(current.left);
    }
  }
  return response;
}

export function preorderTraversalRecursive(node: TreeNode | null): number[] {
  if (!node) return [];
  const response: number[] = [];
  function recursiveFunction(node: TreeNode | null): void {
    if (!node) return;
    response.push(node.val);
    recursiveFunction(node.left);
    recursiveFunction(node.right);
  }
  recursiveFunction(node);
  return response;
}

export function postorderTraversalIterative(node: TreeNode | null): number[] {
  if (!node) return [];
  const response: number[] = [];
  const stack = new DynamicStack<[TreeNode, boolean]>(); //[Node - firstVisit]
  stack.push([node, true]);
  while (!stack.isEmpty()) {
    const [current, firstVisit] = stack.pop()!;
    if (firstVisit) {
      stack.push([current, false]);
      if (current.right) {
        stack.push([current.right, true]);
      }
      if (current.left) {
        stack.push([current.left, true]);
      }
    } else {
      response.push(current.val);
    }
  }
  return response;
}

export function postorderTraversalRecursive(node: TreeNode | null): number[] {
  if (!node) return [];
  const response: number[] = [];
  function recursiveFunction(node: TreeNode | null): void {
    if (!node) return;
    recursiveFunction(node.left);
    recursiveFunction(node.right);
    response.push(node.val);
  }
  recursiveFunction(node);
  return response;
}

export function levelOrderTraversalIterative(node: TreeNode | null): number[] {
  if (!node) return [];
  const response: number[] = [];
  const queue = new DinamycQueue<TreeNode>();
  queue.enqueue(node);
  while (!queue.isEmpty()) {
    const current = queue.dequeue()!;
    response.push(current.val);
    if (current.left) {
      queue.enqueue(current.left);
    }
    if (current.right) {
      queue.enqueue(current.right);
    }
  }
  return response;
}
export function levelOrderTraversalRecursive(node: TreeNode | null): number[] {
  if (!node) return [];
  const response: number[] = [];
  function recursiveFunction(nodes: TreeNode[]): void {
    if (!nodes.length) return;
    const nextNodes: TreeNode[] = [];
    nodes.forEach((node) => {
      response.push(node.val);
      if (node.left) {
        nextNodes.push(node.left);
      }
      if (node.right) {
        nextNodes.push(node.right);
      }
    });
    recursiveFunction(nextNodes);
  }
  recursiveFunction([node]);
  return response;
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

//arbol con n hijos
//node.val Node.childre:node[] = []
//bfs && dfs(pre-order) //iterativo y recursivo
