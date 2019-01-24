//  CHALLENGE:
//
//  Sum all the prime numbers up to and including the provided number.
//
//  A prime number is defined as a number greater than one and having 
//  only two divisors, one and itself. For example, 2 is a prime number 
//  because it's only divisible by one and two.
//
//  The provided number may not be a prime.

function getPrimes(n) {
    let primes = [];
    let start = 2;
  
    for(let i = start; i <= n; i++){
      primes.push(i);
    }
  
    let current = start;
    while(current <= n){
      primes.forEach((p) => {
        if(p > current && (p % current === 0 || p === (current * current))){
          primes.splice(primes.indexOf(p), 1);
        }
      });
      current = primes[primes.indexOf(current)+1];
    }
  
    return primes;
  }
  
  function sumPrimes(num) {
    let primes = getPrimes(num);
    return primes.reduce((x, y) => x + y);
  }

console.log(sumPrimes(10)); // should return a number.
console.log(sumPrimes(10)); // should return 17.
console.log(sumPrimes(977)); // should return 73156.