// CHALLENGE: find the largest number in a list of numbers (i.e., array)
// SOLUTION: sort the array (or at least move the largest int to the end)
// - then return the last element of the array


// loop through array, sorting largest int to
// the end then returning that value
function findGreatest(arr){
    arr.map(sort);
    return arr[arr.length-1];
}

// this just sorts the greatest integer to the 
// end of the array
function sort(val, idx, arr){
    let next = arr[idx+1];
    if(val > next){
        swap(idx, arr)
    }
}

// swaps two items in array
function swap(idx, arr){
  let next = arr[idx+1];
  let curr = arr[idx];
  arr[idx] = next;
  arr[idx+1] = curr;
}

let arr = [3, 2, 1, 10, 6, 4, 7, 5, 8, 9];

console.log(findGreatest(arr))