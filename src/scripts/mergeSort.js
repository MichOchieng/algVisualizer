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
    const events = []; // Used for visual events during the sorting process
    if (arr.length <= 1) {
        return arr;
    }
    const tempArr = arr.slice();  // Clone used for overwritting values freely
    preMerge(arr,tempArr,0,arr.length,events)
    return events;
}

function preMerge(arr,tempArr,currentPos,n,events) {
    if (currentPos == n) {
        return; // Stop once at the end of the array
    }
    const midpoint = Math.floor(arr.length/2);
    preMerge(arr,tempArr,currentPos,midpoint,events);
    preMerge(arr,tempArr,(midpoint + 1),(n - 1),events);
    merge();
}

function merge(arr,tempArr,events,currentPos,midpoint,n){
    // Push values to the event array when:
        // Comparing values
        // Swapping values

    
}

