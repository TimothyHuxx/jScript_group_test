/* check if remove all of the letters 'o' in a string.
There's no need to worry about uppercase letters.
*/

function isRemoveO(string) {
    return string.split('').filter(el => el != 'o').join('');
  }

  module.exports = isRemoveO;