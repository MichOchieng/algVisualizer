export default function router(){
   var alg = document.getElementById('algMenu').value;
   switch (alg) {
       case '1':
           console.log("Merge sort selected");
           break;
       case '2':
           console.log("Quick sort selected");
           break;
       case '3':
           console.log("Heap sort selected");
           break;
       case '4':
           console.log("Bubble sort selected");  
           break;           
       default:
           console.log("No algorithm selected");
           break;
   }
}