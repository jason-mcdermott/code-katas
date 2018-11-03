def find_largest_int(numbers):
    print(numbers)
    for idx, val in enumerate(numbers):
        if idx+1 < len(numbers):
            next = numbers[idx+1]
            if val > next:
                swap(idx, numbers)
        
    return numbers[-1]


def swap(index, array):
    next = array[index+1]
    curr = array[index]
    array[index] = next
    array[index+1] = curr
    print(array)

numbers = [3, 2, 1, 10, 6, 4, 7, 5, 8, 9]

print(find_largest_int(numbers))
