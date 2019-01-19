//  CHALLENGE:
//  Write a function that takes two or more arrays and returns a new array 
//  of unique values in the order of the original provided arrays.
//
//  In other words, all values present from all arrays should be included 
//  in their original order, but with no duplicates in the final array.
//
//  The unique numbers should be sorted by their original order, but the 
//  final array should not be sorted in numerical order.

function uniteUnique1(...arr) {
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[0].indexOf(arr[i][j]) < 0){
                arr[0].push(arr[i][j]);
            }  
        }
    }
    
    return arr[0];
}

function uniteUnique2(...arr) {
    let map = new Map();
    let result = [];
    for(let sub of arr){
        for(let s of sub){
            map.set(s);
        }
    }
    
    map.forEach((val, key) => result.push(key));
  
    return result;
  }
  
console.log(uniteUnique1([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique1([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
console.log(uniteUnique1([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique1([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].