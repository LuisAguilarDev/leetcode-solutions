import { removeDuplicates } from './removeDuplicatesFromSortedArray';
describe('26. Remove Duplicates from Sorted Array', () => {
  test('#1 it should return the array with no duplicates at start', () => {
    const nums = [1, 1, 2];
    const expectedNums = [1, 2];

    const k = removeDuplicates(nums);
    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });
  test('#1 it should return the array with no duplicates at start', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expectedNums = [0, 1, 2, 3, 4];

    const k = removeDuplicates(nums);
    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });
});
