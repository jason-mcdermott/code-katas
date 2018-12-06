//  CHALLENGE (taken from Project Euler, no. 4):
//  
//  A palindromic number reads the same both ways. The largest palindrome made 
//  from the product of two 2-digit numbers is 9009 = 91 × 99.
//
//  Find the largest palindrome made from the product of two 3-digit numbers.
//
//  SOLUTION: Avoid nested loops by iterating downwards from the max 3 digit number (999)
//          until a palindrome is found. For each number check the product of the number
//          squared AND the number times itself minus one! In this way, you will test 4 possible
//          combinations in only 2 loops: 999 * 999, 999 * 998, 998 * 998, 998 * 997...

function find () {
    for(let i = 999; i >= 100; i--){
        let a = i * i;
        let b = i * (i - 1);
        if(isPalindrome(a)) {
            return `${a} = ${i} * ${i}`;
        }
        else if(isPalindrome(b)){
            return `${b} = ${i} * ${i-1}`;
        }
    }
}

function isPalindrome (number) { 
    let input = number.toString();
    let lh = input.slice(0, input.length / 2).split('');
    let middle = input.length % 2 === 0 ? lh.length : lh.length + 1;
    let rh = input.slice(middle).split('');

    let i = 0;
    let j = rh.length - 1;

    while(i < lh.length && j < rh.length){
        if(lh[i] !== rh[j]) {
            return false;
        }
        i++; 
        j--;
        continue;
    }

    return true;
}

// Test isPalindrome function:
// console.log(isPalindrome(990099)); // true
// console.log(isPalindrome(99099));  // true
// console.log(isPalindrome(990091)); // false
// console.log(isPalindrome(99091));  // false

// Solution: [ 698896, 836, 836 ]
console.log(find());