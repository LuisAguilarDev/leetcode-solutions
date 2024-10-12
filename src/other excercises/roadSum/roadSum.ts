import { NaryTree } from '../../dataTypes/NAryTree/NAryTree';
import { DynamicStack } from '../../dataTypes/stack/stackFixed';

//Devolver la suma de cada camino de un arbol
export function roadSumIterative(node: NaryTree | null): number[] {
  if (!node) return [];
  let sumPath: number[] = [];
  const stack = new DynamicStack<[NaryTree, number]>(); //Node,sum
  stack.push([node, 0]);
  while (!stack.isEmpty()) {
    const [node, sum] = stack.pop()!;
    const currentSum = sum + node.val;
    if (node.children.length === 0) {
      sumPath.push(currentSum);
    }
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push([node.children[i], currentSum]);
    }
  }
  return sumPath;
}

export function roadSumRecursive(node: NaryTree | null): number[] {
  if (!node) return [];
  let sumPath: number[] = [];
  function recursiveFn(node: NaryTree | null, sum: number) {
    if (!node) return [];
    const currentSum = sum + node.val;
    if (node.children.length === 0) {
      sumPath.push(currentSum);
    }
    for (let i = 0; i <= node.children.length; i++) {
      recursiveFn(node.children[i], currentSum);
    }
  }
  recursiveFn(node, 0);
  return sumPath;
}
