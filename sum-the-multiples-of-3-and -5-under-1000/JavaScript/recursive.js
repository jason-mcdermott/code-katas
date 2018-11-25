// CHALLENGE:   If we list all the natural numbers below 10 that 
//              are multiples of 3 or 5, we get 3, 5, 6 and 9. The 
//              sum of these multiples is 23.
//
//              Find the sum of all the multiples of 3 or 5 below 1000.
//
// SOLUTION:    Second try uses recursion.

function recursiveSum(x, sum){
    if(x <= 0){
        return sum;
    }
    
    if(x % 3 === 0 || x % 5 === 0){
        sum += x;
    }

    return recursiveSum(x - 1, sum);
}

// 233,168
console.log(recursiveSum(999, 0));