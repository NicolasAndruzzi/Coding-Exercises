app.controller("challenge1Controller", function($scope){
  console.log("challenge1Controller");

  // Will calculate any number in the fibonacci sequence that is sooner than the 1477th position

  // var inputIndex = 2;

  $scope.inputValueFibonacci = 0;
  $scope.change = function (desiredIndex) {
    if ($scope.inputValueFibonacci > 1476) {
      $scope.inputValueFibonacci = 0;
    }

    fibonacciSequnce = [0,1];

    for (var i = 0; i < desiredIndex; i++) {
      fibonacciSequnce[i+2] = fibonacciSequnce[i]+fibonacciSequnce[i+1]
    }
    return fibonacciSequnce[desiredIndex]
  };

  // console.time('time');
  // console.log(fibonacci(inputIndex));
  // console.timeEnd('time');


});
