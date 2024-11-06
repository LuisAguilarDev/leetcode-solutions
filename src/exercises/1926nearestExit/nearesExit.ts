//empty .
//walls +
//entrance(E) [Er,Ec]

export function nearestExit(
  maze: string[][],
  entrance: number[],
): number[] | number {
  // prettier-ignore
  const directions = [[1, 0],[-1, 0],[0, 1],[0, -1],];
  const IROWS = maze.length - 1;
  const ICOLS = maze[0].length - 1;
  const queue = [[...entrance, 0]];
  const visited = new Set();
  visited.add(entrance.toString());
  while (queue.length) {
    const [r, c, n] = queue.shift()!;
    const isStart = n === 0;
    const isExitRow = r === 0 || r === IROWS;
    const isExitCol = c === 0 || c === ICOLS;
    if (!isStart && (isExitRow || isExitCol)) {
      return n;
    }
    for (const [dr, dc] of directions) {
      const [nr, nc] = [r + dr, c + dc];
      const position = maze[nr]?.[nc];
      if (!position) continue;
      if (position === '+') continue;
      const index = [nr, nc].toString();
      if (!visited.has(index)) {
        visited.add(index);
        queue.push([nr, nc, n + 1]);
      }
    }
  }
  return -1;
}
