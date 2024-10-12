import { NaryTree } from '../../dataTypes/NAryTree/NAryTree';
import { DynamicStack } from '../../dataTypes/stack/stackFixed';

//Encontrar el camino mas largo de un arbol muchos children, devolver el camino desde el inicio
//Memoria y Velocidad? cuanto puedo guardar en mi memoria
//slice - shallow copy not a deep copy
//slice es una copia superficial no una copia profunda por lo que los elementos anidados seguirian estando vinculados
//Depth Clone -> let arrayCopy = JSON.parse(JSON.stringify(initialArray));
export function longestPathIterative(root: NaryTree | null): number[] {
  if (!root) return [];
  let longestPath: number[] = [];
  let currentPath: number[] = [];
  const stack = new DynamicStack<[NaryTree, number]>(); //Node,depth
  stack.push([root, 0]);
  while (!stack.isEmpty()) {
    const [node, depth] = stack.pop()!;
    currentPath[depth] = node.val;
    const currentDepth = depth + 1;
    if (node.children.length === 0) {
      if (currentDepth > longestPath.length) {
        longestPath = currentPath.slice(0, currentDepth);
      }
    }
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push([node.children[i], currentDepth]);
    }
  }
  return longestPath;
}
export function longestPathRecursive(root: NaryTree | null): number[] {
  if (!root) return [];
  let longestPath: number[] = [];
  let currentPath: number[] = [];
  function recursiveFn(node: NaryTree | null, depth: number) {
    if (!node) return;
    currentPath[depth] = node.val;
    const currentDepth = depth + 1;
    if (node.children.length === 0) {
      if (currentDepth > longestPath.length) {
        longestPath = currentPath.slice(0, currentDepth);
      }
    }
    for (let i = 0; i <= node.children.length - 1; i++) {
      recursiveFn(node.children[i], currentDepth);
    }
  }
  recursiveFn(root, 0);
  return longestPath;
}
export function buildNaryTreeFromArray(
  arr: [number, number][]
): NaryTree | null {
  if (arr.length === 0) return null;
  const root = new NaryTree(arr[0][0]);
  const queue: Array<[NaryTree, number]> = [[root, arr[0][1]]];
  let index = 1;
  while (queue.length > 0) {
    const [currentNode, childrenCount] = queue.shift()!;
    for (let i = 0; i < childrenCount; i++) {
      const [value, childCount] = arr[index++];
      const childNode = new NaryTree(value);
      currentNode.children.push(childNode);
      queue.push([childNode, childCount]);
    }
  }
  return root;
}

//consecuencias del estado con algoritmos  //Memoria orden de magnitud velocidad, iterativo recursivo //ventajas y desventajas

// export function longestPathIterativePrimer(root: TreeNode | null): number[] {
//   if (!root) return [];
//   const response: Array<number[]> = [];
//   const stack = new DynamicStack<[TreeNode, number[]]>(); // Pila que guarda el nodo actual y el camino
//   stack.push([root, []]);
//   while (!stack.isEmpty()) {
//     const [currentNode, path] = stack.pop()!;
//     const newPath = [...path, currentNode.val];
//     if (!currentNode.left && !currentNode.right) {
//       response.push(newPath);
//     }
//     if (currentNode.right) {
//       stack.push([currentNode.right, newPath]);
//     }
//     if (currentNode.left) {
//       stack.push([currentNode.left, newPath]);
//     }
//   }
//   let longestArray: number[] = [];
//   response.forEach((item) => {
//     if (item.length > longestArray.length) {
//       longestArray = item;
//     }
//   });
//   return longestArray;
// }
