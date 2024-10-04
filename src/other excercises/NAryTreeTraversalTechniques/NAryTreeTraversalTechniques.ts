import { NaryTree } from '../../dataTypes/NAryTree/NAryTree';
import { DinamycQueue } from '../../dataTypes/queue/queue';
import { DynamicStack } from '../../dataTypes/stack/stackFixed';
//bfs && dfs(pre-order) //iterativo y recursivo
export function bfsIterative(root: NaryTree): number[] {
  if (!root) return [];
  const response: number[] = [];
  const queue = new DinamycQueue<NaryTree>();
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const current = queue.dequeue()!;
    response.push(current.val);
    current.children.forEach((node) => {
      queue.enqueue(node);
    });
  }
  return response;
}
export function bfsRecursive(root: NaryTree | null): number[] {
  const response: number[] = [];
  function recursiveFn(root: Array<NaryTree | null>) {
    if (root.length === 0) return;
    let nextLevel: Array<NaryTree | null> = [];
    root.forEach((node) => {
      response.push(node!.val);
      nextLevel = [...nextLevel, ...node!.children];
    });
    recursiveFn(nextLevel);
  }
  recursiveFn([root]);
  return response;
}
//1) preorder 2)level order 3) inorder
export function dfsPreorderIterative(root: NaryTree | null): number[] {
  if (!root) return [];
  const response: number[] = [];
  const stack = new DynamicStack<NaryTree>();
  stack.push(root);
  while (!stack.isEmpty()) {
    let current = stack.pop()!;
    response.push(current.val);
    for (let i = current.children.length - 1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
  }
  return response;
}
export function dfsPreorderRecursive(root: NaryTree | null): number[] {
  if (!root) return [];
  const response: number[] = [];
  function recursiveFunction(root: NaryTree | null): void {
    if (!root) return;
    response.push(root.val);
    root.children.forEach((node) => {
      recursiveFunction(node);
    });
  }
  recursiveFunction(root);
  return response;
}
