/*  The function shown below that takes an order amount and splits it into
 four even installments.
 For example:100.08 = 25.02, 25.02, 25.02, 25.02 or 50.02 = 12.50, 12.50, 12.50, 12.50
*/

function calculateInstallments(orderAmount) { 
  let num = orderAmount * 100;
  
  while(num % 4 !== 0) {
    num--;
  }
  return Array.from(Array(4).fill(num / 100 / 4))
}

  module.exports = calculateInstallments;
