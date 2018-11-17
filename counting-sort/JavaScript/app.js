// CHALLENGE: Given an array of integers that fall within a bounded-range (like 1 to 100) 
//      and may include duplicates, sort the numbers.
// ASSUMPTIONS: integers fall within a bounded-range. may include duplicates

// SOLUTION: loop through array and tally the occurrence of each number, storing in a dictionary. 
//      then loop through the integers of the range and insert from the dictionary where applicable.
//      - when a dictionary item has duplicates loop through those to insert as well.



// for simplicity example set sorts 1 - 20
const numbers = [14,18,18,17,7,13,8,13,3,4,12,8,3,11,14,15,18,15,9,10];
let tally = new Map();
let sorted = [];

numbers.map((x) => { 
    let found = tally.get(x);
    if(found){
        tally.set(x, found += 1);
    } else {
        tally.set(x , 1);
    }
})

for(let i = 1; i <= numbers.length; i++){
    let values = tally.get(i);
    if(values){
        for(let j = 0; j < values; j++){
            sorted.push(i);
        }
    }
}

console.log(sorted)