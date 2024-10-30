import { escapePyramidHead } from './5EscapePyramid';

describe('Escape Pyramid', () => {
  test('#1 It should count pyramid steps to reach the player', () => {
    const result = escapePyramidHead([
      ['.', '.', '#', '.', '▲'],
      ['#', '.', '#', '.', '#'],
      ['.', '.', '.', '.', '.'],
      ['#', '#', '#', '.', '#'],
      ['T', '.', '.', '.', '.'],
    ]);
    expect(result).toEqual(8);
  });
  test('#2 It should count pyramid steps to reach the player', () => {
    const result = escapePyramidHead([
      ['T', '.', '#', '.'],
      ['.', '.', '.', '.'],
      ['▲', '.', '.', '#'],
      ['.', '#', '#', '#'],
    ]);
    expect(result).toEqual(2);
  });
  test('#3 It should count pyramid steps to reach the player', () => {
    const result = escapePyramidHead([
      ['#', '#', '#'],
      ['▲', '.', '#'],
      ['.', '#', 'T'],
    ]);
    expect(result).toEqual(-1);
  });
  test('#3 It should count pyramid steps to reach the player', () => {
    const result = escapePyramidHead([
      ['.', '.', '.', '.'],
      ['.', '.', '#', '.'],
      ['#', '.', '#', '.'],
      ['▲', '.', '#', 'T'],
    ]);
    expect(result).toEqual(9);
  });
});
