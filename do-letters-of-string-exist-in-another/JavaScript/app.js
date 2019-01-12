//  CHALLENGE:
//
//  Return true if the string in the first element of the array contains all
//  of the letters of the string in the second element of the array.

function mutation(arr) {
  let str1 = arr[0].toLowerCase().split('');
  let str2 = arr[1].toLowerCase().split('');

  for(let s of str2){
    if(str1.indexOf(s) < 0){
      return false;
    }
  }

  return true;
}


console.log(mutation(['hello', 'Hello']));  //should return true
console.log(mutation(['hello', 'hey']));    //should return false
console.log(mutation(['Alien', 'line']));   //should return true