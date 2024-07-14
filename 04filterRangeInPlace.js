// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

function filterRangeInPlace(arr,a,b){
    // loop through all the elements in array
for(let i=0;i<arr.length;i++){
    // put element  inside val for every iteration
    let val = arr[i] 
if(val<a ||val>b){
    // if value is less than a or b then remove the element from array
    arr.splice(i,1)
    // as array first element is deleted the elements will shift  so decrease the value of i
    i--;
}

}
return arr
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]