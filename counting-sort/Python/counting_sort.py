def counting_sort(numbers):
    tally = {}
    sorted = []
    start = 1
    end = len(numbers) + 1

    for num in numbers:
        value = tally.get(num)
        if value != None:
            tally[num] = value + 1
        else:
            tally[num] = 1

    for i in range(start, end):
        value = tally.get(i)
        if value != None:
            for j in range(1, value + 1):
                sorted.append(i)

    return sorted


numbers = [14,18,18,17,7,13,8,13,3,4,12,8,3,11,14,15,18,15,9,10]

print(counting_sort(numbers))