// CHALLENGE: find the number that appears the most times in a list of numbers (i.e., array)

// SOLUTION: recursively loop through array and create a new array of objects
// - use the number as the key for each object
// - if the key doesn't yet exist add number as key with count 1
// - else, increment the 'count' property by 1 for that key
// - sort the results in descending order
// - pull off the top result and you have the answer (the key is the answer)

// e.g.
let arr = [0,1,2,3,4,5,6,7,8,1,2,1];

let result = [];

function tally(val, arr){
    if(arr.length === 0){
        return;
    }
    
    if(result[val] == null){
        result[val] = { num: val, count: 1 };
    }
    else {
        let count = result[val].count + 1;
        result[val] = { num: val, count: count }
    }

    arr.shift();
    
    tally(arr[0], arr)
}

tally(arr[0], arr);

console.log(result)

// sort the resulting array by 'count' property
result.sort(function(a, b){
    if(a.count < b.count){
        return 1;
    }
    if(a.count > b.count){
        return -1;
    }
    return 0;
})

// take a look at what you got
console.log(result)
// [{ num: 0, count: 1 },
//  { num: 1, count: 3 },
//  { num: 2, count: 2 },
//  { num: 3, count: 1 },
//  { num: 4, count: 1 },
//  { num: 5, count: 1 },
//  { num: 6, count: 1 },
//  { num: 7, count: 1 },
//  { num: 8, count: 1 }]

// sort the resulting array by 'count' property
result.sort(function(a, b){
    if(a.count < b.count){
        return 1;
    }
    if(a.count > b.count){
        return -1;
    }
    return 0;
})
// [{ num: 1, count: 3 },
//  { num: 2, count: 2 },
//  { num: 0, count: 1 },
//  { num: 3, count: 1 },
//  { num: 4, count: 1 },
//  { num: 5, count: 1 },
//  { num: 6, count: 1 },
//  { num: 7, count: 1 },
//  { num: 8, count: 1 }]

// you've sorted the array descending, so pick the first object
let winner = result.shift();
console.log(winner)
//  { num: 1, count: 3 }

// finally...the answer!
console.log(winner.num)
// 1