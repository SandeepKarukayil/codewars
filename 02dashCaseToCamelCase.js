// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// *background-color  === backGroundColor
function camelize(str){
// first remove the dashes  and separate words into array 
 let splittedArray= str.split("-")
// make first letter of eachword except the first word  capital and for other words 
let newval =splittedArray.map((val,index)=>index==0?val:val[0].toUpperCase()+val.slice(1))
// join the words 
return newval.join('')
 
}
console.log(camelize('background-color'))