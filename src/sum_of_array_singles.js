/*Return the sum of the numbers  of array that occur only once.*/

function repeats(arr){
    return  arr.reduce((acc, el) => acc+(arr.indexOf(el) == arr.lastIndexOf(el) ? el :0),0)
   }

  module.exports = repeats;