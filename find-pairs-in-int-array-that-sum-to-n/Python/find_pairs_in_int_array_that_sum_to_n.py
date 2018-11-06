def find_pairs(numbers, n):
    results = []
    for idx, val in enumerate(numbers):
        if val is not None and val <= n:
            remainder = n - val
            if remainder <= n:
                # remove current value so it's not included in search
                numbers[idx] = None
                if val not in results and remainder not in results:
                    if remainder in numbers:
                        if val < remainder:
                            results.insert(val, [val, remainder]) 
                        else:
                            results.insert(remainder, [remainder, val]) 
                        # remove remainder so it's not included in search
                        r = numbers.index(remainder)
                        numbers[r] = None
    return results


numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12]
print(find_pairs(numbers, 10))