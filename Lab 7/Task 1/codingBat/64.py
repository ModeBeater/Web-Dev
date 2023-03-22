def end_other(a, b):
  if a[len(a) - len(b):].lower() == b.lower() or b[len(b) - len(a):].lower() == a.lower():
    return True
  return False
