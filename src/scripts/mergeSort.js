export default function mergeSort(arr){
    const midpoint = Math.floor(arr.length/2);

    if (arr.length <= 1) {
        return arr;
    }

    const leftArr = arr.splice(0,midpoint);
    const rightArr = arr;

    return merge(mergeSort(leftArr),mergeSort(rightArr));
}

function merge(left,right){
    var result = [];

    while ((left.length != 0) && (right.length != 0)){
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result,...left,...right];
}