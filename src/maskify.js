// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.
// Your task is to create a function that takes a string, transforms all but the last four characters into '#' and returns the new masked string.
// Examples

// "4556364607935616" ➞ "############5616"

// "64607935616" ➞ "#######5616"

// "1" ➞ "1"

// "" ➞ ""
// Notes

// The maskify function must accept a string of any length.

function maskify(str) {
    var transformDigits = str.slice(0, -4);
    var nonTransformDigits = str.slice(-4);
      var transformArray = transformDigits.split('').map(function(letter) {
      return letter = "#"
    });
    
    var transformArray = transformArray.join('');
    return transformArray.concat(nonTransformDigits);
  }
  
  const maskify = str => str.replace(/.(?=.{4})/g, '#');
  
  function maskify(str) {
      return str.length > 4 ? '#'.repeat(str.length - 4) + str.substr(str.length - 4) : str;
  }
  
  function maskify(str) {
    if(str.length > 5)
      {
        return "#".repeat(str.length -4) + str.substring(str.length -4);
      }
    return str;
  }
  
  function maskify(str) {
    var len = str.length;
    
    if (len < 5) {
      return str;
    }
    
    return str.split('').map(function(val, idx){
      return (len - idx < 5) ? val : '#';
    }).join('');
  }
  
  function maskify(str) {
    var x = str.length;
    var output = "";
    for(var i = 0; i< x - 4;i++)
      {
        output += "#";
      }
     return output + str.substring(x-4,x);
    
  }
  
  
  console.log(maskify("4556364607935616"));