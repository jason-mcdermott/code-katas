// CHALLENGE: 
//
// Create a function that takes two or more arrays and returns an array 
// of the symmetric difference (△ or ⊕) of the provided arrays.

// original solution...
function sym(...args) {
    let arrays = [];
    args.forEach(arr => arrays.push(arr));
    let map = new Map();
    let final = [];

    arrays.forEach((arr, num) => {
        arr.forEach(val => {
            let test = map.get(val);
            if(test){
                if(test.set !== num){
                    map.set(val, { set: num, count: test.count + 1 });
                }
            }
            else {
                map.set(val, { set: num, count: 1 });
            }
        })
    });

    map.forEach((val, key) => {
        if(val.count % 2 !== 0) {
            final.push(key);
        }
    });
        
    return final;
}

// more elegant solution...
function diffArray(arr1, arr2) {
    let final = [];
    for(let item of arr1){
        let index = arr2.indexOf(item);
        if(index === -1){
            final.push(item);
        }
        else {
            arr2.splice(index, 1);
        }
    }
  
    return final.concat(arr2);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
  
// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.