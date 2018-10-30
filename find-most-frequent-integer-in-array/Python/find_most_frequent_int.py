def tally(numbers):
    result = {}
    for num in numbers:
        if(num in result):
            result[num] += 1
        else:
            result[num] = 1

    return sorted(result, key=result.get, reverse=True)[0]
    

numbers = [0,1,2,3,4,5,6,7,8,1,8,8]
answer = tally(numbers)
print(answer)