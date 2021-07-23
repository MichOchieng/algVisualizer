// Initial Merge Sort logic
//  Correctly sorted array but difficult to portray visually
// ---------------------------------------------------------
// export default function mergeSort(arr){
//     const midpoint = Math.floor(arr.length/2);

//     if (arr.length <= 1) {
//         return arr;
//     }

//     const leftArr = arr.splice(0,midpoint);
//     const rightArr = arr;

//     return merge(mergeSort(leftArr),mergeSort(rightArr));
// }

// function merge(left,right){
//     const result = [];
   
//     while ((left.length != 0) && (right.length != 0)){
//         if (left[0] < right[0]) {
//             result.push(left.shift());

//         } else {
//             result.push(right.shift()); 
//         }
        
//     }

//     while (left.length != 0) {
        
//         result.push(left.shift());
//     }

//     while (right.length != 0) {
        
//         result.push(right.shift()); 
//     }
 
//     return [...result,...left,...right];
// }

// Revised Merge Sort logic 
//  Should be easier to visualize sorting process 

export default function mergeSort(arr){
    const eventStack = []; // Used for visual events during the sorting process
    if (arr.length <= 1) {
        return arr;
    }
    const tempArr = arr.slice();  // Clone used for overwritting values freely
    const n = arr.length - 1;
    preMerge(arr,tempArr,0,n,eventStack)
    return eventStack;
}

function preMerge(arr,tempArr,currentPos,n,eventStack) {
    if (currentPos === n) {
        return; // Stop once at the end of the array
    }
    const midpoint = Math.floor((currentPos + n)/2);
    preMerge(arr,tempArr,currentPos,midpoint,eventStack);
    preMerge(arr,tempArr,(midpoint + 1),n,eventStack);
    merge(arr,tempArr,eventStack,currentPos,midpoint,n);
}

function merge(arr,tempArr,eventStack,currentPos,midpoint,n){
    // Push values to the event array when:
        // Comparing values
        // Swapping values

    var x,y = currentPos;
    var z   = (midpoint + 1);
    //     k = x     y = i    j = z
    // Left and Right
    while (y <= midpoint && z <= n ) {
        // Comparing values - Highlight
        eventStack.push([y,z]);
        // Comparing values - Revert Colour
        eventStack.push([y,z]);
        if(tempArr[y] <= tempArr[z]){
            // Overwrite value with value at tempArr[x]
            eventStack.push([x,tempArr[y]]);
            arr[x++] = tempArr[y++];
        }else{
            // Overwrite value with value at tempArr[z]
            eventStack.push([x,tempArr[z]]);
            arr[x++] = tempArr[z++];
        }
    }
    // Left Side
    while (y <= midpoint ) {
        // Comparing values - Highlight
        eventStack.push([y,y]);
        // Comparing values - Revert Colour
        eventStack.push([y,y]);
        // Overwrite value
        eventStack.push([x,tempArr[y]]);
        arr[x++] = tempArr[y++];
    }
    // Right Side
    while (z <= n) {
        // Comparing values - Highlight
        eventStack.push([z,z]);
        // Comparing values - Revert Colour
        eventStack.push([z,z]);
        // Overwrite value
        eventStack.push([x,tempArr[z]]);
        arr[x++] = tempArr[z++];
    }
}

// Causes infinite loop
function partitionPush(x,y,arr,tempArr,eventStack){
    // Comparing values - Highlight
    eventStack.push([x,x]);
    // Comparing values - Revert Colour
    eventStack.push([x,x]);
    // Overwrite value
    eventStack.push([y,tempArr[x]]);
    arr[y++] = tempArr[x++];
}   
