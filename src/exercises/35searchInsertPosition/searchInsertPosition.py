def searchInsert(nums, target):
     left, right = 0, len(nums) - 1

     while left <= right:
         mid = left + (right - left) // 2

         if nums[mid] == target:
             return mid
         elif nums[mid] < target:
             left = mid + 1
         else:
             right = mid - 1

     return left

def searchInsert(nums, target):
    def binary_search(left, right):
         if left > right:
             return left

         mid = left + (right - left) // 2

         if nums[mid] == target:
             return mid
         elif nums[mid] < target:
             return binary_search(mid + 1, right)
         else:
             return binary_search(left, mid - 1)
    return binary_search(0, len(nums) - 1)