import { describe, expect, test } from '@jest/globals';
import { twoSum } from './twoSum';

describe('two sum', () => {
  test('two sum should return indices of the two numbers such that they add up to target.', () => {
    const result = twoSum([3, 3], 6);
    expect(result).toEqual([0, 1]);
  });
  test('two sum should return indices of the two numbers such that they add up to target.', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });
  test('two sum should return indices of the two numbers such that they add up to target.', () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result).toEqual([1, 2]);
  });
  test('Empty array should have length 0', () => {
    const emptyArray = [];
    expect(emptyArray.length).toBe(0);
  });
});
