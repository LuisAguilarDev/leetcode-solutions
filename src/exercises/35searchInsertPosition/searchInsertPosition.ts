export function recursiveSearchInsert(nums: number[], target: number): number {
  function search(startPointer: number, endPointer: number): number {
    if (startPointer >= endPointer) {
      return target > nums[startPointer] ? startPointer + 1 : startPointer;
    }
    const middlePointer = Math.round((startPointer + endPointer) / 2);
    if (target === nums[middlePointer]) {
      return middlePointer;
    }
    if (target > nums[middlePointer]) {
      return search(middlePointer + 1, endPointer);
    } else {
      return search(startPointer, middlePointer - 1);
    }
  }
  return search(0, nums.length - 1);
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
//1. Se puede mejorar la legibilidad del codigo luego de que funciona
//2. Hay que modificar los datos???
export function iterableSearchInsert2(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// def searchInsert(nums, target):
//     left, right = 0, len(nums) - 1

//     while left <= right:
//         mid = left + (right - left) // 2

//         if nums[mid] == target:
//             return mid
//         elif nums[mid] < target:
//             left = mid + 1
//         else:
//             right = mid - 1

//     return left

// def searchInsert(nums, target):
//     def binary_search(left, right):
//         if left > right:
//             return left

//         mid = left + (right - left) // 2

//         if nums[mid] == target:
//             return mid
//         elif nums[mid] < target:
//             return binary_search(mid + 1, right)
//         else:
//             return binary_search(left, mid - 1)

//     return binary_search(0, len(nums) - 1)
