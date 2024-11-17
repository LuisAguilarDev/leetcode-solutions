import { canVisitAllRooms } from './keysAndRooms';

describe('841. Keys And Rooms', () => {
  test('#1 Should return true if all rooms where visited', () => {
    expect(canVisitAllRooms([[1], [2], [3], []])).toEqual(true);
  });
  test('#2 Should return true if all rooms where visited', () => {
    expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toEqual(false);
  });
});
