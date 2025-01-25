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
