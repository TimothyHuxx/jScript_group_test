function palindrome(string){
let  new_string = string.split('').reverse().join('');
  return new_string;
}
module.exports = palindrome;