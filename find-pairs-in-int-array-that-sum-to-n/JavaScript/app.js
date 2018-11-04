// CHALLENGE: Given an array of integers, find the pairs that exist which sum to
//            a specified number (for example, 10).
// ASSUMPTIONS: integers only appear once in array.

// SOLUTION: loop through array and create a new array of arrays
// - get the number's counterpart in the pair (i.e. the remainder of n - number)
// - try to find the remainder value int the arry, and if found, add the pair to
//   the array of arrays, using the number (or the remainder - whichever is smaller) 
//   as the index.
// - remove the number and remainder from the original array while keeping the array's
//   length intact (here, I'm replacing the number with null)


const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12];
const n = 10;
let results = [];
let counter = 0;


numbers.map(function(val, idx, arr){
    counter++;
    let remainder = n - val;
    // remove value so it's not included in search
    arr[idx] = null;
    // ensures pair only added once
    if(results[val] == null && results[remainder] == null){
        if(find(remainder, arr)){
            // ensures no empty slots in results array
            if(val < remainder){
                results[val] = [val, remainder];
            }
            else {
                results[remainder] = [remainder, val];
            }
            // remove remainder so it's not included in search
            let r = arr.indexOf(remainder);
            arr[r] = null;
        }
    }
})

function find(target, arr){
    counter++;
    let isFound = false;
    arr.map(function(val, idx, arr){
        if(val === target){
            isFound = true;
        }
    });

    return isFound;
}

console.log(results)
console.log(counter)