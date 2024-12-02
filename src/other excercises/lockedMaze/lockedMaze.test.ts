import { lockedMazeDFS, lockedMaze2, lockedMazeBFS } from './lockedMaze';

describe('Locked Maze', () => {
  test('#1 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [[]],
      ];
    expect(lockedMazeDFS(maze, 1)).toEqual({ unlockAll: true, path: [1] });
  });
  test('#2 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [[1,2,3,4],[]],
        [     [],[]],
      ];
    expect(lockedMazeDFS(maze, 1)).toEqual({
      unlockAll: true,
      path: [1, 2, 4, 3],
    });
  });
  test('#3 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [[3,4],[]],
        [   [],[]],
      ];
    const response = lockedMazeDFS(maze, 2);
    expect(response).toEqual({
      unlockAll: false,
      path: null,
    });
  });
  test('#4 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [[],[]],
        [[],[]],
      ];
    const response = lockedMazeDFS(maze, 2);
    expect(response).toEqual({
      unlockAll: false,
      path: null,
    });
  });
  test('#5 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [[2,3,4,5,6,7,8,9],[],[]],
        [               [],[],[]],
        [               [],[],[]],
      ];
    const response = lockedMazeDFS(maze, 1);
    expect(response.unlockAll).toEqual(true);
    expect(response.path).toEqual([1, 2, 3, 6, 5, 4, 7, 8, 9]);
  });
  test('#6 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [[1,2,3,4,5,6,7,8,9],[],[]],
        [                 [],[],[]],
        [                 [],[],[]],
      ];
    const response = lockedMazeDFS(maze, 2);
    expect(response.unlockAll).toEqual(false);
  });
  test('#7 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [[2,3,4,5,6,7,9],[],[]],
        [[],[],[]],
        [[],[],[]],
      ];
    const response = lockedMazeDFS(maze, 1);
    expect(response.unlockAll).toEqual(false);
  });
  test('#8 It should return if all cells were visited DFS', () => {
    //prettier-ignore
    const maze = [
        [[4, 2],[9,3],[5, 6]],
        [    [],   [],   [7]],
        [   [8],  [9],    []],
      ];
    const response = lockedMazeDFS(maze, 1);
    expect(response.unlockAll).toEqual(true);
    console.log(response.path);
    expect(response.path).toEqual([
      1, 2, 1, 2, 3, 2, 1, 4, 5, 6, 5, 4, 7, 8, 7, 4, 5, 6, 9,
    ]);
  });
  test('#8 It should return if all cells were visited BFS', () => {
    //prettier-ignore
    const maze = [
        [[4, 2],[9,3],[5, 6]],
        [    [],   [],   [7]],
        [   [8],  [9],    []],
      ];
    const response = lockedMazeBFS(maze, 1);
    expect(response.unlockAll).toEqual(true);
    expect(response.path).toEqual([1, 2, 3, 6, 5, 4, 7, 8, 9]);
  });
  test('#9 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [[2,3,6,9],[],    []],
        [       [],[],    []],
        [      [5],[],[4, 7]],
      ];
    const response = lockedMazeDFS(maze, 1);
    expect(response.unlockAll).toEqual(false);
  });
  test('#10 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
      [[4, 2],[9,3],[5, 6]],
      [    [],   [],   [7]],
      [   [8],  [9],    []],
      ];
    const response = lockedMazeDFS(maze, 2);
    expect(response.unlockAll).toEqual(false);
  });
  test('#11 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [[4],[9,8], [],[5, 6]],
        [ [],  [3],[7],    []],
        [ [],   [], [],    []],
      ];
    const response = lockedMazeDFS(maze, 2);
    expect(response.unlockAll).toEqual(false);
  });
  test('#12 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [  [4, 2],[9, 8],[],[],[],[],[],[],[],[]],
        [      [],   [3],[],[],[],[],[],[],[],[]],
        [     [8],    [],[],[],[],[],[],[],[],[]],
        [     [8],    [],[],[],[],[],[],[],[],[]],
        [[31, 42],[2, 9],[],[],[],[],[],[],[],[]],
        [      [],[6, 5],[],[],[],[],[],[],[],[]],
        [      [],[2, 9],[],[],[],[],[],[],[],[]],
        [      [],[2, 9],[],[],[],[],[],[],[],[]],
        [      [],[2, 9],[],[],[],[],[],[],[],[]],
        [      [],[2, 9],[],[],[],[],[],[],[],[]]
      ];
    const response = lockedMaze2(maze, 41);
    expect(response.unlockAll).toEqual(false);
  });
  test('#13 It should return if all cells were visited', () => {
    //prettier-ignore
    const maze = [
        [       [11, 21],   [23, 33, 43],    [72, 71],[81, 91],[61, 62],    [82, 77],    [83, 78],    [84, 79],     [85,80],[92, 93, 94, 95]],
        [[2, 13, 14, 15],  [100, 99, 98],    [19, 20],[89, 76],    [88],        [86],        [87],        [90], [89,90, 93],        [63, 69]],
        [      [3, 4, 5],       [24, 30],    [53, 37],[49, 56],[35, 36],    [47, 48],[51, 54, 65],    [64, 66],[69, 58, 45],        [53, 37]],
        [   [31, 22, 59],   [25, 29, 39],[46, 56, 57],[55, 45],    [26],        [28],        [27],          [],    [49, 40], [1, 2, 4, 5, 6]],
        [   [31, 42, 51],[23, 1, 10, 12],[16, 17, 18],      [],      [],          [],          [],[58, 60, 68],          [],[12, 48, 75, 23]],
        [    [32, 22, 2],        [71, 3],        [35],      [],      [],          [],          [],          [],          [],        [44, 45]],
        [       [52, 72],       [81, 59],    [25, 65],      [],      [],          [],          [],          [],          [],              []],
        [       [34, 38],       [62, 52],    [49, 68],      [],      [],[1, 2, 9, 7],[1, 4, 8, 7],          [],          [],              []],
        [       [40, 30],   [50, 60, 70],    [45, 12],      [],      [],    [96, 97],          [],        [37],          [],              []],
        [   [6, 7, 8, 9],   [25, 98, 24],        [36],      [],      [],          [],          [],[36, 38, 39],[65, 66, 67],    [73, 74, 75]],
      ];
    const response = lockedMaze2(maze, 41);
    expect(response.unlockAll).toEqual(true);
    //prettier-ignore
    expect(response.path).toEqual([                                                                                                                                                                     
      41, 31, 42, 51, 32, 22, 23, 12,  2,  1,  24, 25,
      33, 43, 53, 11, 21, 35, 36, 37, 46, 56,  57, 13,
      14, 15, 16, 17, 18,  3,  4,  5, 26, 28,  29, 39,
      49, 59, 30, 27, 19, 20, 10, 61, 71, 72,  81, 91,
      62, 47, 48, 66, 76, 86, 87, 88, 98, 99, 100, 90,
      89, 69, 58, 45, 40, 54, 64, 65, 63, 92,  93, 94,
      95, 52, 34, 38,  6,  7,  8,  9, 60, 68,  96, 97,
      67, 73, 74, 75, 55, 82, 77, 83, 78, 84,  79, 85,
      80, 44, 50, 70
    ]);
  });
});
