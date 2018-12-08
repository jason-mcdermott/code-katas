# CHALLENGE (taken from Project Euler, no. 4):

# A palindromic number reads the same both ways. The largest palindrome made 
# from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

# SOLUTION: Avoid nested loops by iterating downwards from the max 3 digit number (999)
#         until a palindrome is found. For each number check the product of the number
#         squared AND the number times itself minus one! In this way, you will test 4 possible
#         combinations in only 2 loops: 999 * 999, 999 * 998, 998 * 998, 998 * 997...


def find():
    for i in range(999, 99, -1):
        a = i * i
        b = i * (i - 1)
        if is_palindrome(a): 
            return f'{a} = {i} * {i}'
        elif is_palindrome(b):
            return f'{b} = {i} * {i-1}'
    

def is_palindrome(number):
    input = str(number)
    left = input[0:int(len(input)/2)]
    middle = len(left) if len(input) % 2 == 0 else len(left) + 1
    right = input[middle:]

    i = 0
    j = len(right) - 1

    while i < len(left) and j < len(right):
        if left[i] != right[j]:
            return False
        i += 1 
        j -= 1
        continue
    return True

# 698896 = 836 * 836
print(find())
