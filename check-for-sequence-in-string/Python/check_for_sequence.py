# CHALLENGE: Determine if the sequence of characters of the sample string 
#            occurs in the same order in the longer text string. 

def find(sample, target):
    start = 0
    for i in range(0, len(target)): 
        current = target[i]
        for j in range(start, len(sample)):
            if current != sample[j].upper():
                continue
            else: 
                start = j + 1
                # if we've reached the end...
                if i == (len(target) - 1):
                    return True
                
                break

    # if we got here, then not a complete match...
    return False


sample = 'abcNjhgAhGjhfhAljhRkhgRbhjbevfho'
target = 'NAGARRO'

print(find(sample, target))