// const mazeMap = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
//O(n^2) :S
export function lockedMazeDFS(
  maze: Array<Array<number[]>>,
  startRoom: number,
): { unlockAll: boolean; path: number[] | null } {
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
  const keys = new Set([...maze[start[0]][start[1]], startRoom]);
  const startVisit = new Set<string>();
  startVisit.add(startRoom.toString() + ',' + [...keys].toString());
  //stack = [r,c,path:number[],cellsVisited]
  const stack: Array<[number, number, number[], Set<string>]> = [
    [...start, [startRoom], startVisit],
  ];
  let firstValidPath = null;
  let stackLength = 0;
  while (stack.length && !firstValidPath) {
    if (stackLength < stack.length) {
      stackLength = stack.length;
    }
    const [r, c, path, cellsVisited] = stack.pop()!;
    for (const key of maze[r][c]) {
      keys.add(key);
    }
    if (new Set(path).size === totalRooms) {
      firstValidPath = path;
    }
    for (const [dr, dc] of directions) {
      const [nr, nc] = [r + dr, c + dc];
      const position = maze[nr]?.[nc];
      if (!position) continue;
      const roomNumber = encodeRoom([nr, nc]);
      const newPath = [...path];
      const newCellsVisited = new Set([...cellsVisited]);
      const hash = roomNumber.toString() + ',' + [...keys].toString();
      if (!newCellsVisited.has(hash) && keys.has(roomNumber)) {
        newCellsVisited.add(hash);
        newPath.push(roomNumber);
        stack.push([nr, nc, newPath, newCellsVisited]);
      }
    }
  }
  const unlockAll = keys.size === totalRooms;
  console.log(stackLength, 'DFS');
  return { unlockAll, path: firstValidPath };
}
export function lockedMazeBFS(
  maze: Array<Array<number[]>>,
  startRoom: number,
): { unlockAll: boolean; path: number[] | null } {
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
  const keys = new Set([...maze[start[0]][start[1]], startRoom]);
  const startVisit = new Set<string>();
  startVisit.add(startRoom.toString() + ',' + [...keys].toString());
  //queue = [r,c,path:number[],cellsVisited]
  const queue: Array<[number, number, number[], Set<string>]> = [
    [...start, [startRoom], startVisit],
  ];
  let firstValidPath = null;
  let stackLength = 0;
  while (queue.length && !firstValidPath) {
    if (stackLength < queue.length) {
      stackLength = queue.length;
    }
    const [r, c, path, cellsVisited] = queue.shift()!;
    for (const key of maze[r][c]) {
      keys.add(key);
    }
    if (new Set(path).size === totalRooms) {
      firstValidPath = path;
    }
    for (const [dr, dc] of directions) {
      const [nr, nc] = [r + dr, c + dc];
      const position = maze[nr]?.[nc];
      if (!position) continue;
      const roomNumber = encodeRoom([nr, nc]);
      const newPath = [...path];
      const newCellsVisited = new Set([...cellsVisited]);
      const hash = roomNumber.toString() + ',' + [...keys].toString();
      if (!newCellsVisited.has(hash) && keys.has(roomNumber)) {
        newCellsVisited.add(hash);
        newPath.push(roomNumber);
        queue.push([nr, nc, newPath, newCellsVisited]);
      }
    }
  }
  console.log(stackLength, 'BFS');
  const unlockAll = keys.size === totalRooms;
  return { unlockAll, path: firstValidPath };
}
//O(n)
export function lockedMaze2(
  maze: Array<Array<number[]>>,
  startRoom: number,
): { unlockAll: boolean; path: number[] } {
  //prettier-ignore
  const directions = [[1,0],[-1,0],[0,1],[0,-1]]
  const [ROWS, COLS] = [maze.length, maze[0].length];
  debugger;
  function decodeRoom(roomNumber: number): [number, number] {
    return [Math.floor((roomNumber - 1) / ROWS), (roomNumber - 1) % ROWS];
  }
  function encodeRoom([indexRow, indexCol]: number[]): number {
    return ROWS * indexRow + indexCol + 1;
  }
  function addKeys(r: number, c: number) {
    for (const key of maze[r][c]) {
      if (!unlockedRooms.has(key)) {
        keys.add(key);
      }
    }
  }
  function processRoom(r: number, c: number, baseRoom: number) {
    const coordinatesThatOpen = [];
    for (const [dr, dc] of directions) {
      const [nr, nc] = [r + dr, c + dc];
      const keysOnRoom = maze[nr]?.[nc];
      if (!keysOnRoom) continue;
      const roomNumber = encodeRoom([nr, nc]);
      if (unlockedRooms.has(roomNumber)) {
        addKeys(...[r, c]);
        unlockedRooms.add(baseRoom);
        //traer las llaves del cuarto cerrado accesible
        getKeysFromAvailableRooms(baseRoom);
        return;
      }
      coordinatesThatOpen.push(roomNumber);
    }
    saveToAccesible(coordinatesThatOpen, baseRoom);
  }
  function getKeysFromAvailableRooms(baseRoom: number) {
    const availableRooms = accesibleLockedRooms.get(baseRoom) ?? new Set();
    accesibleLockedRooms.delete(baseRoom);
    for (const availableRoom of availableRooms) {
      if (unlockedRooms.has(availableRoom)) continue;
      const [r, c] = decodeRoom(availableRoom);
      addKeys(r, c);
      unlockedRooms.add(availableRoom);
      getKeysFromAvailableRooms(availableRoom);
    }
  }
  function saveToAccesible(coordinatesThatOpen: number[], roomNumber: number) {
    //si no abrí nada guardar el cuarto que se puede abrir si se logra conseguir una celda adyacente con llave
    for (const adyacentRoom of coordinatesThatOpen) {
      const currentRooms = accesibleLockedRooms.get(adyacentRoom) ?? new Set();
      currentRooms.add(roomNumber);
      accesibleLockedRooms.set(adyacentRoom, currentRooms);
    }
  }
  const totalRooms = ROWS * COLS;
  const unlockedRooms = new Set<number>([startRoom]);
  const keys = new Set<number>();
  const start: [number, number] = decodeRoom(startRoom);
  const accesibleLockedRooms: Map<number, Set<number>> = new Map();
  addKeys(...start);
  const path = [];
  path.push(startRoom);
  while (keys.size) {
    const baseRoom = keys.values().next().value!;
    keys.delete(baseRoom);
    if (unlockedRooms.has(baseRoom)) continue;
    const [r, c] = decodeRoom(baseRoom);
    processRoom(r, c, baseRoom);
  }
  return { unlockAll: unlockedRooms.size === totalRooms, path };
}
