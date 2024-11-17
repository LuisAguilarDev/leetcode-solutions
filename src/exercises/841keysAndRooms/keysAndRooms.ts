export function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set();
  visited.add(0);
  const pocket: number[] = [...rooms[0]];
  while (pocket.length) {
    const key = pocket.pop()!;
    if (visited.has(key)) continue;
    visited.add(key);
    for (const keyToRoom of rooms[key])
      if (!visited.has(keyToRoom)) {
        pocket.push(keyToRoom);
      }
  }
  return visited.size === rooms.length;
}
