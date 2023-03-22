def sum67(nums):
  check = True
  sum1 = 0
  for i in nums:
    if i == 6:
        check = False
    if check:
        sum1 += i
        continue
    if i == 7:
        check = True
  return sum1