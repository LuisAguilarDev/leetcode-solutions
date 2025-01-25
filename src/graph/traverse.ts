import {
  buildAdjacency_matrixWG,
  buildAdjacencyListWG,
  buildAdjacencyMatrixUW,
} from './utils.graph';
// El  objetivo es llegar a G.  Tu punto de partida es S.  Tienes que devolver el camino con DFS and BFS y el coste total.
// El orden correcto es :

// BFS : S A B C D E G
// DFS : S A D F E H G

// Tienes que pensar en como ordenar los hijos de cada nodo ya que quiero que visites les nodos en orden alfabético. Por ejemplo,
// los hijos de S son A, C y C.  Tienes que procesar A antes de B. Es importante llegar al mismo orden indicado más arriba.

// Aquí está el grafo - es un grafo no dirigido.

// Mientras resuelves estos problemas, aprovecha el tiempo para escribir varias utilidades para visualizar, convertir, construir grafos.

// unweighted
// const NODES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'S'];
const EDGESUW: [string, string][] = [
  ['A', 'S'],
  ['A', 'D'],
  ['S', 'B'],
  ['S', 'C'],
  ['C', 'E'],
  ['B', 'E'],
  ['B', 'D'],
  ['B', 'G'],
  ['D', 'F'],
  ['F', 'E'],
  ['E', 'H'],
  ['F', 'G'],
  ['H', 'G'],
];
// weighted
const NODES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'S'];
const EDGES: [string, string, number][] = [
  ['A', 'S', 3],
  ['A', 'D', 3],
  ['S', 'B', 6],
  ['S', 'C', 2],
  ['C', 'E', 1],
  ['B', 'E', 2],
  ['B', 'D', 4],
  ['B', 'G', 9],
  ['D', 'F', 5],
  ['F', 'E', 6],
  ['E', 'H', 5],
  ['F', 'G', 5],
  ['H', 'G', 8],
];

// directed - undirected
//unweighted graph cuadratic time
//prettier-ignore
// const adjacency_matrix: number[][] = [
//     // A B C D
//       [0,1,1,0],//A
//       [1,0,0,0],//B
//       [1,0,0,1],//C
//       [0,0,1,0],//D
//     ];
// const adjacency_list: { [key: string]: string[] } = {
//   A: ['B', 'C'],
//   B: ['A'],
//   C: ['A', 'D'],
//   D: ['C'],
// };

const adjacencyList = buildAdjacencyListWG(NODES,EDGES)
// console.log('🚀 ~ adjacencyList:', adjacencyList);
// BFS
function bfs(
  adjacencyList: Map<string, { node: string; weight: number }[]>,
  start: string,
  end: string,
): [string[], string, number] {
  const queue: [string, string, number][] = [[start, start, 0]];
  const visited = [start];
  while (queue.length) {
    const [node, path, cost] = queue.shift()!;
    const neighbors = adjacencyList.get(node)!;
    neighbors.sort((a, b) => {
      return a.node.localeCompare(b.node);
    });
    for (const next of neighbors) {
      if (next.node === end) {
        visited.push(next.node);
        return [visited, path + next.node, cost + next.weight];
      }
      if (!visited.includes(next.node)) {
        visited.push(next.node);
        queue.push([next.node, path + next.node, next.weight + cost]);
      }
    }
  }
  return [[], '', -1];
}

function dfs(
  adjacencyList: Map<string, { node: string; weight: number }[]>,
  start: string,
  end: string,
): [string[], string, number] {
  const stack: [string, string, number][] = [[start, start, 0]];
  const visited: string[] = [];
  while (stack.length) {
    const [node, path, cost] = stack.pop()!;
    visited.push(node);
    const neighbors = adjacencyList.get(node)!;
    if (node === end) return [visited, path, cost];
    neighbors.sort((a, b) => {
      return b.node.localeCompare(a.node);
    });
    for (const next of neighbors) {
      if (
        !visited.includes(next.node) &&
        (!stack.some(([node]) => node == next.node) || next.node == end)
      ) {
        stack.push([next.node, path + next.node, next.weight + cost]);
      }
    }
  }
  return [[], '', -1];
}

const [visited, path, cost] = bfs(adjacencyList, 'S', 'G');
console.log('🚀 ~ path:', visited);
console.log('isValidbfs:', visited.join('') == 'SABCDEG');
const [visited2, path2, cost2] = dfs(adjacencyList, 'S', 'G');
console.log('🚀 ~ path:', visited2, path2, cost2);
console.log('isValiddfs:', visited2.join('') == 'SADFEHG');

// const adjacencyMatrix = buildAdjacencyMatrixUW(NODES, EDGESUW);
// console.log('🚀 ~ adjacencyMatrix:', adjacencyMatrix);

const adjacencyMatrix = buildAdjacencyMatrixUW(
  ['A', 'B', 'C', 'D'],
  [
    ['A', 'B'],
    ['A', 'C'],
    ['C', 'D'],
  ],
);
console.log('🚀 ~ adjacencyMatrix:', adjacencyMatrix);
const adjacencyMatrixWG = buildAdjacency_matrixWG(
  ['A', 'B', 'C', 'D', 'E'],
  [
    ['A', 'B', 6],
    ['A', 'C', 5],
    ['C', 'D', 9],
    ['B', 'E', 7],
    ['B', 'D', 4],
    ['E', 'D', 3],
  ],
);
console.log('🚀 ~ adjacencyMatrix:', adjacencyMatrixWG);
