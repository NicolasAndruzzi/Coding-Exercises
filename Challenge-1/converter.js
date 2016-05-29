// Write some code that will accept an amount and convert it to the
// appropriate string representation.
//
// Example:
// Convert 2523.04
// to "Two thousand five hundred twenty-three and 04/100dollars"


//Use a prompt() on the web to get input
//Allow input to only take numbers and decimal places, no commas or $ or anything else
var input = 100030001.00
var num = input.toFixed(2).toString();

function convert(value) {
  var split = value.split('.');
  var numberValue = split[0];
  var decimalValue = split[1];
  var baseWords = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var prefixWords = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  var powerWords = ['','thousand','million','billion','trillion','quadrillion','quintillion','sextillion','septillion','octillion','nonillion','decillion']

  var englishNumber = [];
  var englishDecimal = [];

  if (numberValue == 0) {
    englishNumber.push('zero');
  }
  else if (numberValue <= 19) {
    englishNumber.push(baseWords[numberValue]);
  }
  else {
    var numberValue = numberValue.split('').reverse().join('');
    var pieceValue = numberValue.match(/.{1,3}/g);
    for (var i = 0; i < pieceValue.length; i++) {
      pieceValue[i] = pieceValue[i].split('').reverse().join('');
      var englishPiece = [];
      var englishDouble = [];
      if (pieceValue[i].length === 3 && pieceValue[i] != '000') {
        for (var j = 0; j < pieceValue[i].length; j++) {
          if (j === 0 && pieceValue[i][j] != 0) {
            englishPiece.push(baseWords[pieceValue[i][j]]);
            englishPiece.push('hundred');
          }
          else if (j === 1) {
            if (pieceValue[i][j] < 2) {
              var temp = [];
              temp.push(pieceValue[i][j]);
              temp.push(pieceValue[i][j+1]);
              temp = parseInt(temp.join(''), 10);
              console.log(temp);
              englishDouble.push(baseWords[temp])
            }
            else if (pieceValue[i][j] >= 2){
              englishDouble.push(prefixWords[pieceValue[i][j]]);
              if (pieceValue[i][j+1] != 0) {
                englishDouble.push('-');
              }
            }
            else if (j === 2 && pieceValue[i][j] != 0) {
              englishDouble.push(baseWords[pieceValue[i][j]]);
            }
            }
        }
        if (englishDouble != '') {
          englishPiece.push(englishDouble.join(''));
        }
        if (powerWords[i] != '') {
          englishPiece.push(powerWords[i]);
        }
      }
      else if (pieceValue[i].length === 2) {
        if (pieceValue[i] <= 19) {
          englishDouble.push(baseWords[pieceValue[i]])
        }
        else {
          for (var j = 0; j < pieceValue[i].length; j++) {
            if (j === 0) {
              englishDouble.push(prefixWords[pieceValue[i][j]]);
              if (pieceValue[i][j+1] != 0) {
                englishDouble.push('-');
              }
            }
            else if (j === 1) {
              englishDouble.push(baseWords[pieceValue[i][j]]);
            }
          }
        }
        englishPiece.push(englishDouble.join(''));
        englishPiece.push(powerWords[i]);
      }
      else if (pieceValue[i].length === 1) {
        englishPiece.push(baseWords[pieceValue[i][0]]);
        englishPiece.push(powerWords[i]);
      }
      if (pieceValue[i] != '000') {
        englishNumber.push(englishPiece.join(' '));
      }
    }
  }


// --------------------------- DECIMAL ---------------------------

  if (decimalValue == 0) {
    englishDecimal.push('zero')
  }
  else if (decimalValue <= 19) {
    englishDecimal.push(baseWords[parseInt(decimalValue, 10)])
  }
  else{
    for (var i = 0; i <= decimalValue.length - 1; i++) {
      if (i === 0) {
        englishDecimal.push(prefixWords[decimalValue[i]])
      }
      if (i === 1) {
        englishDecimal.push(baseWords[decimalValue[i]])
      }
    }
  }

// --------------------------- DECIMAL ---------------------------


  return englishNumber.reverse().join(' ') + ' dollars and ' + englishDecimal.join('-') + ' cents';
}

console.log(convert(num));
