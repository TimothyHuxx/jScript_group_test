// simple function that determines if a plural is needed or not

function plural(n) {
    if (n !=1) {
      return true;
    } else {
      return false;
    }
  }
  
  module.exports = plural;