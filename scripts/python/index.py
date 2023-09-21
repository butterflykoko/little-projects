import numpy as np
import matplotlib.pyplot as plt
# from scipy import stats

x = np.array([2, 2, 4, 4, 4,  5, 6, 6])
y = np.array([3, 3, 3, 4, 4, 5, 5, 5])

plt.scatter(x, y)
plt.show()



def slope(x1, y1, x2, y2):
  rise = y2 - y1
  run = x2 - x1
  k = rise/run
  print(k)

slope(1, 2, 3, 4)
