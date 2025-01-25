// All bidirectionals graph

export function buildAdjacencyListUG(
  nodes: string[],
  edges: string[][],
): Map<string, string[]> {
  const adjacencyList: Map<string, string[]> = new Map();
  nodes.forEach((node) => {
    adjacencyList.set(node, []);
  });
  edges.forEach(([start, end]) => {
    adjacencyList.get(start)?.push(end);
    adjacencyList.get(end)?.push(start);
  });
  return adjacencyList;
}

export function buildAdjacencyListWG(
  nodes: string[],
  edges: [string, string, number][],
): Map<string, { node: string; weight: number }[]> {
  const adjacencyList: Map<string, { node: string; weight: number }[]> =
    new Map();
  nodes.forEach((node) => {
    adjacencyList.set(node, []);
  });
  edges.forEach(([from, to, weight]) => {
    adjacencyList.get(from)!.push({ node: to, weight });
    adjacencyList.get(to)!.push({ node: from, weight });
  });

  return adjacencyList;
}

export function buildAdjacencyMatrixUW(
  nodes: string[],
  edges: [string, string][],
): Array<number>[] {
  const adjacencyMatrix: Array<number>[] = Array.from(
    { length: nodes.length },
    () => Array(nodes.length).fill(0),
  );
  const index: { [key: string]: number } = {};
  nodes.forEach((item, i) => {
    index[item] = i;
  });
  edges.forEach(([start, end]) => {
    adjacencyMatrix[index[start]][index[end]] = 1;
    adjacencyMatrix[index[end]][index[start]] = 1;
  });
  return adjacencyMatrix;
}

export function buildAdjacency_matrixWG(
  nodes: string[],
  edges: [string, string, number][],
) {
  const adjacencyMatrix: Array<number>[] = Array.from(
    { length: nodes.length },
    () => Array(nodes.length).fill(0),
  );
  const index: { [key: string]: number } = {};
  nodes.forEach((item, i) => {
    index[item] = i;
  });
  edges.forEach(([start, end, weigth]) => {
    adjacencyMatrix[index[start]][index[end]] = weigth;
    adjacencyMatrix[index[end]][index[start]] = weigth;
  });
  return adjacencyMatrix;
}
