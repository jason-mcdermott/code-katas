//  CHALLENGE:
// 
//  Return the lowest index at which a value (second argument) should be 
//  inserted into an array (first argument) once it has been sorted. The 
//  returned value should be a number.

function getIndexToIns(arr, num) {
  arr.sort((x, y) => x - y);
  let curr = 0;
  let next = 1;

  if(num >= arr[0]){
    while(next < arr.length){
      if(num <= arr[curr]){
        return curr;
      }
      if(num > arr[curr] && num <= arr[next]){
        return next;
      }
      curr += 1;
      next += 1;
    }
    // greater than last item
    return arr.length;
  }
  else {
    // lower than first item
    return 0;
  }
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5))  // should return 2.
console.log(getIndexToIns([2, 20, 10], 19)) // should return 2.
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // should return 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // should return 2.
console.log(getIndexToIns([40, 60], 50)) //should return 1.
console.log(getIndexToIns([3, 10, 5], 3)) //should return 0.
console.log(getIndexToIns([5, 3, 20, 3], 5)) //should return 2.
console.log(getIndexToIns([2, 20, 10], 19)) //should return 2.
console.log(getIndexToIns([2, 5, 10], 15)) //should return 3.