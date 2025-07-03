
/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// function findLargestElement(numbers) {
    
// }

// module.exports = findLargestElement;


function findlargestelement(numbers){
let max= numbers[0];
for( let i =0; i< numbers.length; i++){
    if(numbers[i]>max){
        max= numbers[i];
    }
 
}  
 return max;

}
let num = [3,7,2,9,1];
// console.log(findlargestelement(num)); 
module.exports= findlargestelement(num)


