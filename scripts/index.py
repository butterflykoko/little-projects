import matplotlib.pyplot as plt
from scipy import stats

x = [0, 0.75, 1, 1.5, 2, 3, 3.5, 4]
y = [0.67, 0.99, 1.15, 1.29, 1.21, 1.16, 1.19, 1.15]

slope, intercept, r, p, std_err = stats.linregress(x, y)


def myfunc(x):
    return slope * x + intercept


year = 5
price = myfunc(year)
txt = "The price for the apples is {} for {} year(s)"

model = list(map(myfunc, x))

plt.scatter(x, y)
plt.plot(x, model)
plt.show()

print(txt.format(round(price, 2), year))
