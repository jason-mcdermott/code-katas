from math import ceil

def merge_sort(items):
    if len(items) <= 1:
        return items

    middle =  ceil(len(items) / 2)
    left = items[0:middle]
    right = items[middle:]

    return merge(merge_sort(left), merge_sort(right))

def merge(left, right):
    result = []

    while len(left) > 0 or len(right) > 0:
        if len(left) > 0 and len(right) > 0:
            if left[0] < right[0]:
                result.append(left.pop(0))
            else:
                result.append(right.pop(0))
        elif len(left) > 0:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))

    return result
             
unsorted = [6,8,3,5,1,9,2,7,4,10]
sorted = merge_sort(unsorted)
print(sorted)