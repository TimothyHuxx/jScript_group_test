/* Each floating-point number should be formatted
that only the first two decimal places are returned.
*/

function twoDecimalPlaces(number) {
    return +number.toFixed(4).slice(0, -2);
  }

  module.exports = twoDecimalPlaces;