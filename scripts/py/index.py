import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

x = np.array([2, 2, 4, 4, 4,  5, 6, 6])
y = np.array([3, 3, 3, 4, 4, 5, 5, 5])

slope, intercept, r, std_err = stats.linregress(x,y)

def myfunc(x):
  return slope * x + intercept

model = list(map(myfunc, x))

plt.scatter(x, y)
plt.plot(x, model)
plt.show()
