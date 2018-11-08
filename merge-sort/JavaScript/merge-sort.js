
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let middle = Math.ceil(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];

    while(left.length || right.length){
        if(left.length && right.length){
            if(left[0] < right[0]){
                result.push(left.shift());
            }
            else {
                result.push(right.shift());
            }
        }
        else if(left.length){
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }

    return result;
}

let unsorted = [6,8,3,5,1,9,2,7,4,10];
let sorted = mergeSort(unsorted);
console.log(sorted);