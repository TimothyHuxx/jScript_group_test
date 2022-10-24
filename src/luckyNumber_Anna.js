/*If the sum of all digits is 0 or multiple of 9 then the number is lucky
*/

function isLucky(n) {
    if (n % 9 == 0 || n == 0){
      return true;
    }
    else {
      return false;
    }
  }

module.exports = isLucky;