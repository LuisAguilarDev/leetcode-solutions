export function recursiveSearchInsert(nums: number[], target: number): number {
  function search(
    nums: number[],
    target: number,
    startPointer: number,
    endPointer: number
  ): number {
    if (startPointer === endPointer) {
      return target > nums[startPointer] ? ++startPointer : startPointer;
    }
    const middlePointer = Math.round((endPointer - startPointer) / 2);
    if (target === nums[middlePointer]) {
      return middlePointer;
    }
    if (target > nums[middlePointer]) {
      return search(nums, target, middlePointer + 1, endPointer);
    } else {
      return search(nums, target, startPointer, middlePointer - 1);
    }
  }
  return search(nums, target, 0, nums.length - 1);
}

export function iterableSearchInsert(nums: number[], target: number): number {
  let startPointer = 0;
  let endPointer = nums.length - 1;
  while (startPointer !== endPointer) {
    const middlePointer = Math.round((startPointer + endPointer) / 2);
    if (target > nums[middlePointer]) {
      startPointer = middlePointer;
    } else {
      endPointer = middlePointer - 1;
    }
  }
  return target > nums[startPointer] ? ++startPointer : startPointer;
}
