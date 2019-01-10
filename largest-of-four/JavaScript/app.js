//  CHALLENGE:
//
//  Return an array consisting of the largest number from each provided sub-array. 
//  For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    let final = [];
    for(let set of arr){
        let largest = set[0];
        for(let s of set){
            if(s > largest){
                largest = s;
            }
        }
        final.push(largest);
    }
    return final;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));