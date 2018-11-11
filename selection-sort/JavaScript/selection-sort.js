
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let currentMinIndex = i;
        for(let j = currentMinIndex+1; j < arr.length; j++){
            if(arr[j] < arr[currentMinIndex]){
                currentMinIndex = j;
            }
        }

        if(currentMinIndex != i){
            let originalMinValue = arr[i];
            arr[i] = arr[currentMinIndex];
            arr[currentMinIndex] = originalMinValue;
        }
    }

    return arr;
}

let unsorted = [12,2,7,4,5,6,3,8,1,0,9,10,11];
let sorted = selectionSort(unsorted);
console.log(sorted);
