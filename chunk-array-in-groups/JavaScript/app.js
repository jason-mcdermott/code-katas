//  CHALLENGE:  Write a function that splits an array (first argument) 
//              into groups the length of size (second argument) and returns 
//              them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let results = [];
  let index = 0;
  while(index < arr.length){
    let sub = arr.slice(index, index + size);
    results.push(sub);
    index += size;
  }
  
  return results;
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));