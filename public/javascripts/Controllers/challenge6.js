app.controller("challenge6Controller", function($scope){
  console.log("challenge6Controller");

  // The input must be in the range of 1 - 4999, or I to MMMMCMXCIX
$scope.inputValueRoman = "";

  $scope.change = function (romanString){
    var value = 0;
    var romanArray = [];

    romanArray = romanString.toUpperCase().split("")
    romanArray.forEach(function(x,i,a){
      if(a[i] === "M"){
        a[i] = 1000;
      }
      else if(a[i] === "D"){
        a[i] = 500;
      }
      else if(a[i] === "C"){
        a[i] = 100;
      }
      else if(a[i] === "L"){
        a[i] = 50;
      }
      else if(a[i] === "X"){
        a[i] = 10;
      }
      else if(a[i] === "V"){
        a[i] = 5;
      }
      else if(a[i] === "I"){
        a[i] = 1;
      }
    })
    for (var i = 0; i < romanArray.length; i++){
      if(romanArray[i] > romanArray[i+1]){
        value = value + romanArray[i];
      }
      else if(romanArray[i] < romanArray[i+1]){
        value = value + (romanArray[i+1] - romanArray[i]);
        i++
      }
      else if(romanArray[i] === romanArray[i+1]){
        value = value + romanArray[i];
      }
      else if(romanArray[i+1] === undefined){
        value = value + romanArray[i];
      }
    }
    return(value);
  }




  // console.log(fromRoman("MMMMCMXCIX"));


});
