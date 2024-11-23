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

export function lockedMaze2(
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
  while (keys.size) {
    const baseRoom = keys.values().next().value!;
    keys.delete(baseRoom);
    if (unlockedRooms.has(baseRoom)) continue;
    const [r, c] = decodeRoom(baseRoom);
    processRoom(r, c, baseRoom);
  }
  return unlockedRooms.size === totalRooms;
}
