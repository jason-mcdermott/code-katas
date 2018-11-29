# CHALLENGE (taken from Project Euler, no. 1):

# If we list all the natural numbers below 10 that 
# are multiples of 3 or 5, we get 3, 5, 6 and 9. The 
# sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# SOLUTION:  

# This approach minimizes the total number of loops by using 
# two separate loops simply decrement by 3 and 5 respectively. 
# The first loop starts at 999 (the largest multiple of 3 that 
# is less than 1000) and the second loop starts at 995 (the 
# largest multiple of 5 that is less than 1000. A dictionary
# (in JavaScript, a Map) is used to ensure that no numbers are
# are summed twice. There is a little overhead added by adding
# dictionary lookups but the loop count is essentially halved 
# (from 999 to 466). Also, the first loop really doesn't need 
# to lookup the keys in the dictionary, but I included it just
# in case the second loop was run first.
          
def optimized():
    dict = {}
    sum = 0
    
    for i in range(999, 2, -3):
        # check to make sure value has not been included already
        if dict.get(i) == None:
            dict[i] = i
            sum += i
        
    for i in range(995, 4, -5):
        # check to make sure value has not been included already
        if dict.get(i) == None:
            dict[i] = i
            sum += i

    return sum


# 233,168
print(optimized())