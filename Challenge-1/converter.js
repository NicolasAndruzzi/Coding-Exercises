// Write some code that will accept an amount and convert it to the
// appropriate string representation.
//
// Example:
// Convert 2523.04
// to "Two thousand five hundred twenty-three and 04/100dollars"


//Use a prompt() on the web to get input
//Allow input to only take numbers and decimal places, no commas or $ or anything else
var input = 99
var num = input.toFixed(2).toString();

function convert(value) {
  var split = value.split('.');
  var numberValue = split[0];
  var decimalValue = split[1];
  // console.log(numberValue);
  // console.log(decimalValue);
  var baseWords = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var prefixWords = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  var englishNumber = [];
  var englishDecimal = [];

  if (numberValue == 0) {
    englishNumber.push('zero')
  }
  else if (numberValue <= 19) {
    englishNumber.push(baseWords[numberValue])
  }
  else{
    for (var i = 0; i <= numberValue.length - 1; i++) {
      // numberValue[i]
      // console.log(numberValue);
      // console.log(numberValue.length-1);
      // console.log(i);
      // console.log(numberValue[i]);
      if (i === 0) {
        englishNumber.push(prefixWords[numberValue[i]])
      }
      if (i === 1) {
        englishNumber.push(baseWords[numberValue[i]])
      }
    }
  }

  // console.log(englishDecimal);
  return englishNumber.join('-') + englishDecimal.join('');
}

console.log(convert(num));
