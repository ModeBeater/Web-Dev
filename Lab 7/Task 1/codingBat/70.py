def sum13(nums):
  sum1 = 0
  i = 0

  while i < len(nums):
    if nums[i] == 13:
        i += 2
        continue
    sum1 += nums[i]
    i += 1
  return sum1