def sum13(nums):
  if len(nums) == 0:
    return 0
  sum = sum(nums)
  for i in range(0, len(nums)):
    if nums[i] == 13 and (nums[i - 1] == 13 and i - 1 >= 0):
      sum -= nums[i]
      sum -= nums[i - 1]
  return sum
print(sum13([1, 2, 13, 2, 1, 13]))