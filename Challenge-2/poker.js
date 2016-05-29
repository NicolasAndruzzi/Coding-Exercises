// Write some code that will evaluate a poker hand and determine its
// rank.
//
// Example:
// Hand: Ah As 10c 7d 6s (Pair of Aces)
// Hand: Kh Kc 3s 3h 2d (2 Pair)
// Hand: Kh Qh 6h 2h 9h (Flush)

var input = ['A-h', 'A-s', 'A-c', '7-d', '6-s'];

var value = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
var suit = ['s', 'h', 'd', 'c'];

function rank (hand) {
  var handValues = [];
  var handSuits = [];

  for (var i = 0; i < hand.length; i++) {
    card = hand[i].split('-')
    handValues.push(card[0])
    handSuits.push(card[1])
  }

  var duplicateValues = {};
  var duplicateSuits = {};

  handValues.forEach(function(x) { duplicateValues[x] = (duplicateValues[x] || 0)+1; });
  handSuits.forEach(function(x) { duplicateSuits[x] = (duplicateSuits[x] || 0)+1; });

  console.log(duplicateValues);
  console.log(duplicateSuits);

  return hand
}

console.log(rank(input));
