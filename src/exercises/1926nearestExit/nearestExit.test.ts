import { nearestExit } from './nearesExit';

describe('Escape Pyramid', () => {
  test('#1 It should return the nearest exit from entrance in mace', () => {
    const result = nearestExit(
      [
        ['+', '+', '.', '+'],
        ['.', '.', '.', '+'],
        ['+', '+', '+', '.'],
      ],
      [1, 2],
    );
    expect(result).toEqual(1);
  });
  test('#2 It should return the nearest exit from entrance in mace', () => {
    const result = nearestExit(
      [
        ['+', '+', '+'],
        ['.', '.', '.'],
        ['+', '+', '+'],
      ],
      [1, 0],
    );
    expect(result).toEqual(2);
  });
  test('#3 It should return the nearest exit from entrance in mace', () => {
    const result = nearestExit([['.', '+']], [0, 0]);
    expect(result).toEqual(-1);
  });
  test('#4 It should return the nearest exit from entrance in mace', () => {
    const result = nearestExit(
      [
        ['+', '.', '+', '+', '+'],
        ['+', '.', '+', '.', '.'],
        ['+', '.', '+', '.', '+'],
        ['+', '.', '+', '.', '+'],
        ['+', '.', '+', '.', '+'],
        ['+', '.', '+', '.', '+'],
        ['+', '.', '.', '.', '+'],
        ['+', '+', '+', '+', '+'],
      ],
      [0, 1],
    );
    expect(result).toEqual(14);
  });
});
