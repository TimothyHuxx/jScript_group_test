/*
You are given a string containing a sequence of character sequences
separated by commas.
Write a function which returns a new string containing the same 
character sequences except the first and the last ones 
but this time separated by spaces.
*/
function removeFirstLastCharacter(arr){  
    return arr.split(",").length <= 2 ? null : arr.split(",").filter((el, i, arr) => i != 0 && i != arr.length - 1).join(" ");
}
module.exports = removeFirstLastCharacter;
