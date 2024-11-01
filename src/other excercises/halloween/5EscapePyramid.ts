export function escapePyramidHead(room: string[][]) {
  function findPiramid() {
    for (let i = 0; i < room.length; i++) {
      for (let j = 0; j < room[i].length; j++) {
        if (room[i][j] === '▲') {
          return [i, j];
        }
      }
    }
  }
  const start = findPiramid()!;
  const target = 'T';
  const queue = [[...start, 0]];
  const visited = new Set();
  visited.add(start[0] * room[0].length + start[1]);
  while (queue.length) {
    const [row, column, step] = queue.shift()!;
    if (room[row][column] === target) {
      return step;
    }
    const directions = [
      [1, 0],
      [0, 1],
      [0, -1],
      [-1, 0],
    ];
    for (const [x, y] of directions) {
      const position = room[row + x]?.[column + y];
      if (!position || position === '#') continue;
      const index = (row + x) * room[0].length + (column + y);
      if (!visited.has(index)) {
        visited.add(index);
        queue.push([row + x, column + y, step + 1]);
      }
    }
  }
  return -1;
}

export function escapePyramidHead2(room: string[][]) {
  function find_coord() {
    const piramidHead = '▲';
    const [NROWS, NCOLS] = [room.length, room[0].length];
    for (let r = 0; r < NROWS; r++) {
      for (let c = 0; c < NCOLS; c++) {
        if (room[r][c] == piramidHead) {
          return [r, c];
        }
      }
    }
  }
  const start = find_coord();
  const target = 'T';
  const queue = [[...start!, 0]];
  const visited = new Set(start!.toString());
  while (queue.length) {
    let [r, c, n] = queue.pop()!;
    if (room[r][c] === target) {
      return n;
    }
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (const [x, y] of directions) {
      const newR = r + x;
      const newC = c + y;
      const position = room[newR]?.[newC];
      if (!position) continue;
      const posStr = [newR, newC].toString();
      if (position !== '#' && !visited.has(posStr)) {
        visited.add(posStr);
        queue.unshift([newR, newC, n + 1]);
      }
    }
  }
  return -1;
}
