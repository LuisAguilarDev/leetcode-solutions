export function removeDuplicates(nums: number[]): number {
  // let lastItem: number | null;
  // const newNums = nums.filter((item) => {
  //   if (lastItem === item) {
  //     return false;
  //   }
  //   lastItem = item;
  //   return true;
  // });
  // newNums.forEach((item, index) => {
  //   nums[index] = item;
  // });
  // return newNums.length;
  let current = 0;
  for (let i = 1; i < nums.length; i++) {
    const lastValue = nums[current];
    const actual = nums[i];
    if (actual > lastValue) {
      current++;
      nums[current] = actual;
    }
  }
  return current + 1;
}

// function removeDuplicates2(nums: number[]): number {
//   const temp = [...new Set(nums)]
//   nums.length = 0;
//   nums.push(...temp);
//   return nums.length;
// };
