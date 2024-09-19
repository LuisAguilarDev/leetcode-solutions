export function searchInsert(nums: number[], target: number): number {
  let index = 0;
  for (const num of nums) {
    if (num >= target) {
      return index;
    }
    index++;
  }
  return index;
}
