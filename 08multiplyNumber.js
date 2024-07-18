// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

function multiplyNumberWithFive(number){

    // take  number convert it to string and calculate its length if minus sign is found replace it with empty  space and count digits by .length property 
    
return   number*5**number.toString().replace("-","").length

}

console.log(multiplyNumberWithFive(-3))