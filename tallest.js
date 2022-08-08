 
// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest)

// const size = [12, 14, 15, 16, 17, 18, 19, 20];
// let largest=size[0];
// for(let i=0;i<size.length;i++){
//     const index=i;
//     const element=size[i];
//     if(element>largest){
//         largest=element;
//     }
// }
// console.log(largest)

// function mostTallest(arry){
//     let largest=element[0];
//   for(let i=0;i<arry.length;i++){
//      const index=i;
//      const element=arry[index];
//      if(element>largest){
//         largest=element
//      }
//   }
//   return largest;
// }
// let size=[12,13,14,15,16];
// let checktall=mostTallest(size);
// console.log(checktall);

// function mostTallest(arry){
//     let largest=arry[0];
//   for(let i=0;i<arry.length;i++){
//     //  const index=i;
//     //  const element=arry[index];
//      if(arry[i]>largest){
//         largest=arry[i]
//      }
//   }
//   return largest;
// }
// let size=[12,13,14,15,16];
// let checktall=mostTallest(size);
// console.log(checktall);

let arry=[11,12,13,14,15,16,17];
let lowest=arry[0];
for(let i=0;i<arry.length;i++){
    if(arry[i]<lowest){
        lowest=arry[i]
    }
}
console.log(lowest)