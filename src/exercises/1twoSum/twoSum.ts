// export const twoSum = function (
//   nums: Array<number>,
//   target: number
// ): Array<number> {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let current = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (current + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

export const twoSum = function (
  nums: Array<number>,
  target: number
): Array<number> {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
};
