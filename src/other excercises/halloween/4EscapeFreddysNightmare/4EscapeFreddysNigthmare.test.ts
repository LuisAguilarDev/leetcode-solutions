import {
  findSafestPathLast,
  findSafestPathQueue,
} from './4EscapeFreddysNigthmare';

describe("Escape from Freddy's nightmare", () => {
  test('#1 It should return the safest path to escape', () => {
    const result = findSafestPathLast([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]);
    expect(result).toEqual(7);
  });
  test('#2  It should return the safest path to escape', () => {
    const result = findSafestPathLast([
      [1, 2, 3],
      [4, 6, 7],
      [5, 8, 9],
    ]);
    expect(result).toEqual(22);
  });
  test('#3  It should return the safest path to escape', () => {
    const result = findSafestPathQueue([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]);
    expect(result).toEqual(7);
  });
  test('#4  It should return the safest path to escape', () => {
    const result = findSafestPathQueue([
      [1, 2, 3],
      [4, 6, 7],
      [5, 8, 9],
    ]);
    expect(result).toEqual(22);
  });
});
