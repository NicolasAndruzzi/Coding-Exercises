app.controller("challenge4Controller", function($scope){
  console.log("challenge4Controller");

  // Write some code that will evaluate a poker hand and determine its
  // rank.
  //
  // Example:
  // Hand: Ah As 10c 7d 6s (Pair of Aces)
  // Hand: Kh Kc 3s 3h 2d (2 Pair)
  // Hand: Kh Qh 6h 2h 9h (Flush)

  // var input = ['Jack-Spades', 'Queen-Spades', '10-Spades', 'King-Spades', '9-Spades'];
  $scope.inputValue1 = "Ace-Spades";
  $scope.inputValue2 = "King-Spades";
  $scope.inputValue3 = "Queen-Spades";
  $scope.inputValue4 = "Jack-Spades";
  $scope.inputValue5 = "10-Spades";


  var cardValues = {
      Ace:14,
      King:13,
      Queen:12,
      Jack:11,
      10:10,
      9:9,
      8:8,
      7:7,
      6:6,
      5:5,
      4:4,
      3:3,
      2:2
  };
  var valuesCard = {
      14:'Ace',
      13:'King',
      12:'Queen',
      11:'Jack',
      10:10,
      9:9,
      8:8,
      7:7,
      6:6,
      5:5,
      4:4,
      3:3,
      2:2
  };

  $scope.change = function (hand) {
    $scope.inputValueArray = [$scope.inputValue1, $scope.inputValue2, $scope.inputValue3, $scope.inputValue4, $scope.inputValue5];
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

    var p = 0;
    var t = 0;
    var f = 0;
    var s = 0;
    var englishAnswer;

    for (var eachKey in duplicateValues) {
      if (duplicateValues[eachKey] === 2 && p === 0) {
        englishAnswer = "Pair (" + eachKey + ")";
        var Pair = eachKey;
        p++;
      }
      else if (duplicateValues[eachKey] === 2 && p === 1) {
        englishAnswer = "2 Pairs (" + eachKey + " and " + Pair + ")";
      }
      else if (duplicateValues[eachKey] === 3) {
        englishAnswer = "Three of a Kind (" + eachKey + ")";
        var Triple = eachKey;
        t++;
      }
      else if (duplicateValues[eachKey] === 4) {
        englishAnswer = "Four of a Kind (" + eachKey + ")";
      }
    }

    if (p === 1 && t === 1) {
      englishAnswer = "Full House (three " + Triple + "'s and two " + Pair + "'s)";
    }

    for (var eachKey in duplicateSuits) {
      if (duplicateSuits[eachKey] === 5) {
        englishAnswer = "Flush (" + eachKey + ")";
        f++;
      }
    }

    var rankedValues = handValues.map(function(value) {
      return cardValues[value];
    });

    function compareNumbers(a, b) {
      return a - b;
    }

    rankedValues = rankedValues.sort(compareNumbers);

    for (var i = 0; i < rankedValues.length; i++) {
      if (rankedValues[i] == rankedValues[i+1]-1) {
      }
      else if (i === rankedValues.length-1){
        englishAnswer = "Straight (" + valuesCard[rankedValues[rankedValues.length-1]] + " to " + valuesCard[rankedValues[0]] + ")";
        s++;
      }
      else {
        break;
      }
    }

  if (f === 1 & s ===1) {
    englishAnswer = "Straight Flush (" + valuesCard[rankedValues[rankedValues.length-1]] + " to " + valuesCard[rankedValues[0]] + " of " + handSuits[0] + ")"
  }

    if (englishAnswer == undefined) {
      englishAnswer = "Nothing";
    }

    return englishAnswer;
  }

  // console.log(rank(input));

});
