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

export function mergeSort(arr) {
    const events = []; // Used for visual events during the sorting process
    if (arr.length <= 1) return arr;
    const tempArr = arr.slice();  // Clone used for overwritting values freely
    preMerge(arr, 0, arr.length - 1, tempArr, events);
    return events;
  }
  
  function preMerge(arr,currentPos,n,tempArr,events) {
    if (currentPos === n) return; // Stop once at the end of the array
    const midpoint = Math.floor((currentPos + n) / 2);
    preMerge(tempArr, currentPos, midpoint, arr, events);
    preMerge(tempArr, midpoint + 1, n, arr, events);
    merge(arr, currentPos, midpoint, n, tempArr, events);
  }
  
  function merge(arr,currentPos,midpoint,n,tempArr,events) {
    // Push values to the event array when:
          // Comparing values
          // Swapping values
    let k = currentPos;
    let i = currentPos;
    let j = midpoint + 1;
  
     // Left and Right
    while (i <= midpoint && j <= n) {
      // Comparing values - Highlight
      events.push([i, j]);
      // Comparing values - Revert Colour
      events.push([i, j]);
      if (tempArr[i] <= tempArr[j]) {
        // Overwrite value with value at tempArr[x]
        events.push([k, tempArr[i]]);
        arr[k++] = tempArr[i++];
      } else {
        // Overwrite value with value at tempArr[z]
        events.push([k, tempArr[j]]);
        arr[k++] = tempArr[j++];
      }
    }
  
    // Left Side
    while (i <= midpoint) {
      // Comparing values - Highlight
      events.push([i, i]);
      // Comparing values - Revert Colour
      events.push([i, i]);
      // Overwrite value
      events.push([k, tempArr[i]]);
      arr[k++] = tempArr[i++];
    }
  
    // Right Side
    while (j <= n) {
      // Comparing values - Highlight
      events.push([j, j]);
      // Comparing values - Revert Colour
      events.push([j, j]);
      // Overwrite value
      events.push([k, tempArr[j]]);
      arr[k++] = tempArr[j++];
    }
  }