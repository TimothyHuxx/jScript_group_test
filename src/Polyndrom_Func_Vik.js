function polyndrom(string){
  console.debug(`testing value ` + string);
let  new_string = string.split('').reverse().join('');
  console.debug(' new value : ' + new_string);
  return new_string;
}
module.exports = polyndrom;