export function removeDuplicates(nums: number[]): number {
  let lastItem: number | null;
  const newNums = nums.filter((item) => {
    if (lastItem === item) {
      return false;
    }
    lastItem = item;
    return true;
  });
  newNums.forEach((item, index) => {
    nums[index] = item;
  });
  return newNums.length;
}
