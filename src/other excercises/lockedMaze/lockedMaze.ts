// const mazeMap = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

export function lockedMaze(
  maze: Array<Array<number[]>>,
  startRoom: number,
): boolean {
  //prettier-ignore
  const directions = [[1,0],[-1,0],[0,1],[0,-1]]
  const [ROWS, COLS] = [maze.length, maze[0].length];
  function decodeRoom(roomNumber: number): [number, number] {
    return [Math.floor((roomNumber - 1) / ROWS), (roomNumber - 1) % ROWS];
  }
  function encodeRoom([indexRow, indexCol]: number[]): number {
    return ROWS * indexRow + indexCol + 1;
  }
  const totalRooms = ROWS * COLS;
  const start: [number, number] = decodeRoom(startRoom);
  const keys = new Set<number>();
  const stack: Array<[number, number, number[]]> = [[...start, [startRoom]]];
  const unlockedRooms = new Set<number>([startRoom]);
  while (stack.length && unlockedRooms.size !== totalRooms) {
    const [r, c, visited] = stack.shift()!;
    for (const key of maze[r][c]) {
      if (!unlockedRooms.has(key)) {
        keys.add(key);
      }
    }
    for (const [dr, dc] of directions) {
      const [nr, nc] = [r + dr, c + dc];
      const position = maze[nr]?.[nc];
      if (!position) continue;
      const roomNumber = encodeRoom([nr, nc]);
      const newVisited = [...visited];
      if (unlockedRooms.has(roomNumber) && !newVisited.includes(roomNumber)) {
        newVisited.push(roomNumber);
        stack.push([nr, nc, newVisited]);
        continue;
      }
      if (keys.has(roomNumber)) {
        unlockedRooms.add(roomNumber);
        keys.delete(roomNumber);
        stack.push([nr, nc, [roomNumber]]);
      }
    }
  }
  return unlockedRooms.size === totalRooms;
}
