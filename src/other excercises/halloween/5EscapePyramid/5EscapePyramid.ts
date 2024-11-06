export function escapePyramidHead(room: string[][]) {
  const [startSymbol, endSymbol] = ['▲', 'T'];
  const NROWS = room.length;
  const NCOLS = room[0].length;
  // prettier-ignore
  const directions = [[1, 0],[0, 1],[0, -1],[-1, 0]]; // down, up, right, left
  function findPiramid() {
    for (let r = 0; r < NROWS; r++) {
      for (let c = 0; c < NCOLS; c++) {
        if (room[r][c] === startSymbol) {
          return [r, c];
        }
      }
    }
  }
  const start = findPiramid()!;
  const target = endSymbol;
  const queue = [[...start, 0]];
  const visited = new Set();
  visited.add(start.toString());
  while (queue.length) {
    const [r, c, n] = queue.shift()!;
    if (room[r][c] === target) {
      return n;
    }
    for (const [dr, dc] of directions) {
      const [nr, nc] = [r + dr, c + dc];
      const position = room[nr]?.[nc];
      if (!position) continue;
      if (position === '#') continue;
      const index = [nr, nc].toString();
      if (!visited.has(index)) {
        visited.add(index);
        queue.push([nr, nc, n + 1]);
      }
    }
  }
  return -1;
}

export function findPathToTarget(grid: string[][]): number {
  const [startSymbol, endSymbol] = ['▲', 'T'];
  const NROWS = grid.length;
  const NCOLS = grid[0]?.length || 0; // Handle case where grid might be empty
  let start: [number, number] | undefined;

  // Find the coordinates of the start position
  for (let r = 0; r < NROWS; r++) {
    for (let c = 0; c < NCOLS; c++) {
      if (grid[r][c] === startSymbol) {
        start = [r, c];
        break; // Exit inner loop if start is found
      }
    }
    if (start) break; // Exit outer loop if start is found
  }

  if (!start) return -1; // Start not found

  return bfs(grid, start, endSymbol); // Call BFS with the starting coordinates
}

// BFS function to find the shortest path to the end
function bfs(grid: string[][], start: [number, number], end: string): number {
  // prettier-ignore
  const directions = [[1, 0],[-1, 0],[0, 1],[0, -1]]; // down, up, right, left

  const queue: [number, number, number][] = [[...start, 0]];
  const visited = new Set<string>([start.toString()]); //hashable
  while (queue.length) {
    const [r, c, steps] = queue.shift()!; // Use shift for BFS
    if (grid[r][c] === end) {
      return steps; // Return number of steps when end is found
    }
    for (const [dr, dc] of directions) {
      const [nr, nc] = [r + dr, c + dc];
      // boundary check
      if (grid[nr]?.[nc] === undefined) continue;
      // Is a wall
      if (grid[nr][nc] === '#') continue;
      // already visited?
      const id = [nr, nc].toString();
      if (visited.has(id)) continue;
      visited.add(id);
      queue.push([nr, nc, steps + 1]);
    }
  }

  return -1; // Return -1 if end not reachable
}

//HANDLING CONDITIONS
// const isInBound = grid[nr]?.[nc] !== undefined;
// const isNotWall = grid[nr]?.[nc] !== '#';
// const isNotVisited = !visited.has([nr, nc].toString());

// if (isInBound && isNotWall && isNotVisited) {
//   visited.add([nr, nc].toString());
//   queue.push([nr, nc, steps + 1]);
// }
