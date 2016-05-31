// Will calculate any number in the fibonacci sequence that is sooner than the 1477th position

var inputIndex = 1476;

function fibonacci(desiredIndex) {
  fibonacciSequnce = [0,1];

  for (var i = 0; i < desiredIndex; i++) {
    fibonacciSequnce[i+2] = fibonacciSequnce[i]+fibonacciSequnce[i+1]
  }
  return fibonacciSequnce[desiredIndex]
};

console.time('time');
console.log(fibonacci(inputIndex));
console.timeEnd('time');
