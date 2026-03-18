n = int(input())

def fib(n):
    fibs = [0, 1]
    for i in range(2, n):
        fibs.append(fibs[-1] + fibs[-2])
    return fibs[:n]

cube = lambda x: x ** 3
print(list(map(cube, fib(n))))