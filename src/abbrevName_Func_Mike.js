//The function to convert a name into initials

function abbrevName(name){
    let initialOne = name[0]
    let initialTwo = ''
    
    let lastName = name.slice(name.indexOf(' ') + 1)
       for (ch in lastName) {
         if (lastName[ch] === lastName[ch]){
             initialTwo += lastName[ch]}
             break;
         }
    let combinedInitials = initialOne + " " + initialTwo
    let combineInitialsWithDot = combinedInitials.replace(" ", ".").toUpperCase()
    
    return combineInitialsWithDot 
    }

  module.exports = abbrevName;