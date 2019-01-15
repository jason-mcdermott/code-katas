//  CHALLENGE:
//  Find the missing letter in the passed letter range and return it.
//
//  If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let series = "abcdefghijklmnopqrstuvwxyz".split('');
    let letters = str.split('');
    let subset = series.slice(series.indexOf(letters[0]));

    for(let i = 0; i < letters.length; i++){
        if(subset[i].toLowerCase() !== letters[i].toLowerCase()){
            return subset[i];
        } 
    }

    return undefined;
}

console.log(fearNotLetter("abce"))  // should return "d".
console.log(fearNotLetter("abcdefghjklmno"))    // should return "i".
console.log(fearNotLetter("stvwx")) // should return "u".
console.log(fearNotLetter("bcdf"))  // should return "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // should return undefined.
  