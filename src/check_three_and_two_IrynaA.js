/* Given an array with exactly 5 strings "a", "b" or "c" , 
check if the array contains three and two of the same values.*/

function checkThreeAndTwo(array) {
    let a = array.join().split('a').length - 1;
    let b = array.join().split('b').length - 1;
    let c = array.join().split('c').length - 1;
    
    return (a > 3 || a < 2) && ((a != 0))|| (b > 3 || b < 2) && (b != 0) || (c > 3 || c < 2)&&(c != 0) ? false : true
    }


  module.exports = checkThreeAndTwo;