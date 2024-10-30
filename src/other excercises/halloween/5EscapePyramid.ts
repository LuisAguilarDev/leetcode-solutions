export function escapePyramidHead(room: string[][]) {
  const player = 'T';
  const piramidHead = '▲';
  let start: undefined | number[];
  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (room[i][j] === player || room[i][j] === piramidHead) {
        start = [i, j];
      }
      if (start) {
        break;
      }
    }
    if (start) {
      break;
    }
  }
  if (!start) return -1;
  const targetDic: { '▲': string; T: string } = { '▲': 'T', T: '▲' };
  const target = targetDic[room[start[0]][start[1]] as '▲' | 'T'];
  const queue = [[...start, 0]];
  const visited = new Set(start[0].toString() + start[1].toString());
  while (queue.length) {
    const [deep, level, step] = queue.pop()!;
    if (room[deep][level] === target) {
      return step;
    }
    const directions = [
      [1, 0],
      [0, 1],
      [0, -1],
      [-1, 0],
    ];
    for (const [x, y] of directions) {
      const position = room[deep + x]?.[level + y];
      if (
        position &&
        position !== '#' &&
        !visited.has((deep + x).toString() + (level + y))
      ) {
        visited.add((deep + x).toString() + (level + y));
        queue.unshift([deep + x, level + y, step + 1]);
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
