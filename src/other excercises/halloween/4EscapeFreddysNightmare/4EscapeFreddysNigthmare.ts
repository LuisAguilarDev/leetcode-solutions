export function findSafestPathLast(dream: number[][]) {
  const [NROWS, NCOLS] = [dream.length, dream[0].length];
  const lastRow = [dream[0][0]];
  for (let c = 1; c < NCOLS; c++) {
    lastRow[c] = lastRow[c - 1] + dream[0][c];
  }
  for (let r = 1; r < NROWS; r++) {
    lastRow[0] += dream[r][0];
    for (let c = 1; c < NCOLS; c++) {
      lastRow[c] = Math.min(lastRow[c - 1], lastRow[c]) + dream[r][c];
    }
  }
  return lastRow[NCOLS - 1];
}
export function findSafestPathQueue(dream: number[][]) {
  let safestPath = Infinity;
  const maxDeepth = dream.length - 1;
  const maxLevel = dream[0].length - 1;
  const queue = [[0, 0, 0]];
  while (queue.length > 0) {
    const [currentDeep, currentLevel, danger] = queue.shift()!;
    if (dream[currentDeep + 1]) {
      queue.push([
        currentDeep + 1,
        currentLevel,
        danger + dream[currentDeep][currentLevel],
      ]);
    }
    if (dream[currentDeep][currentLevel + 1]) {
      queue.push([
        currentDeep,
        currentLevel + 1,
        danger + dream[currentDeep][currentLevel],
      ]);
    }
    if (currentDeep === maxDeepth && currentLevel === maxLevel) {
      if (danger + dream[currentDeep][currentLevel] < safestPath) {
        safestPath = danger + dream[currentDeep][currentLevel];
      }
    }
  }
  return safestPath;
}
