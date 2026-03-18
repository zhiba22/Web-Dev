def power(a, n):
    result = 1
    for i in range(n):
        result *= a
    return result

a, n = map(float, input().split())
n = int(n)
print(int(power(a, n)) if power(a, n) == int(power(a, n)) else power(a, n))