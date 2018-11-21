// CHALLENGE: Determine if the sequence of characters of the sample string 
//            occurs in the same order in the longer text string. 

let sample = 'abcNjhgAhGjhfhAljhRkhgRbhjbevfho';
let target = 'NAGARRO'

function find(sample, target) {
    let start = 0;
    for(let i = 0; i < target.length; i++){
        let current = target[i];
        for(let j = start; j < sample.length; j++){
            if(current != sample[j].toUpperCase()){
                continue;
            }
            else {
                start = j + 1;
                // if we've reached the end...
                if(i == target.length - 1){
                    return true;
                }
                break;
            }
        }
    }

    // if we got here, then not a complete match...
    return false;
}

console.log(find(sample, target));
