app.controller("challenge3Controller", function($scope){
  console.log("challenge3Controller");

  // Write some code that accepts an integer and prints the integers
  // from 0 to that input integer in a spiral format.
  //
  // For example, if I supplied 24 the output would be:
  // 20 21 22 23 24
  // 19 6 7 8 9
  // 18 5 0 1 10
  // 17 4 3 2 11
  // 16 15 14 13 12

  // var input = 2500;
  // $scope.inputValueSpiral = 0;
  $scope.change = function (input) {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;


    if (input <= 109) {
      var  spacingX = 4.25;
      var  spacingY = 5.5;
      ctx.font = "25px Arial";
    }
    else if (input <= 811) {
      var  spacingX = 1.6;
      var  spacingY = 2.3;
      ctx.font = "15px Arial";
    }
    else if (input <= 2549) {
      var  spacingX = .9;
      var  spacingY = 1.3;
      ctx.font = "9px Arial";
    }
    else if (input <=50000){
      var  spacingX = .4;
      var  spacingY = 1.1;
      ctx.font = "5px Arial";
    }
    else {
      $scope.inputValueSpiral = 0;
    }

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("0", canvas.width/2, canvas.height/2);

    var count = 0;
    var lineLength = 1;
    var xJump = 0;
    var yJump = 0;
    for(var i = 1; i<=input;) {
        switch(count)
        {
            case 0:
                // Right
                for (var j = 1; j <= lineLength; j++) {
                  if (i<=input) {
                    xJump++;
                    ctx.fillText(i, canvas.width/2+xJump*30*spacingX, canvas.height/2+yJump*10*spacingY);
                    i++;
                    console.log('right');
                  }
                  else {
                    break;
                  }
                }
                count++;
                break;
            case 1:
                // Down
                for (var j = 1; j <= lineLength; j++) {
                  if (i<=input) {
                    yJump++;
                    ctx.fillText(i, canvas.width/2+xJump*30*spacingX, canvas.height/2+yJump*10*spacingY);
                    i++;
                    console.log('down');
                  }
                  else {
                    break;
                  }
                }
                lineLength++
                count++;
                break;
            case 2:
                // Left
                for (var j = 1; j <= lineLength; j++) {
                  if (i<=input) {
                    xJump--;
                    ctx.fillText(i, canvas.width/2+xJump*30*spacingX, canvas.height/2+yJump*10*spacingY);
                    i++;
                    console.log('left');
                  }
                  else {
                    break;
                  }
                }
                count++;
                break;
            case 3:
                // Up
                for (var j = 1; j <= lineLength; j++) {
                  if (i<=input) {
                    yJump--;
                    ctx.fillText(i, canvas.width/2+xJump*30*spacingX, canvas.height/2+yJump*10*spacingY);
                    i++;
                    console.log('up');
                  }
                  else {
                    break;
                  }
                }
                lineLength++
                count++;
                break;
            default:
                count = 0;
        }
    }

  }
});
