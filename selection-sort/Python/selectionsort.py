
def selection_sort(items):
    for i in range(len(items)):
        currentMinIndex = i
        for j in range(i + 1, len(items)):
            if items[j] < items[currentMinIndex]:
                currentMinIndex = j
        
        if currentMinIndex != i:
            originalMinValue = items[i]
            items[i] = items[currentMinIndex]
            items[currentMinIndex] = originalMinValue
        
    return items


unsorted = [12,2,7,4,5,6,3,8,1,0,9,10,11]
sorted = selection_sort(unsorted)
print(sorted)