// Write some code that accepts an integer and prints the integers
// from 0 to that input integer in a spiral format.
//
// For example, if I supplied 24 the output would be:
// 20 21 22 23 24
// 19 6 7 8 9
// 18 5 0 1 10
// 17 4 3 2 11
// 16 15 14 13 12

var input = 4;
//
// for (var i = 0; i < input.length; i++) {
//   input[i]
// }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx.font = "16px Arial";
ctx.fillStyle = "darkgreen";
ctx.textAlign = "center";
ctx.fillText("0", canvas.width/2, canvas.height/2);
ctx.fillText("1", (canvas.width/2+50), canvas.height/2);
ctx.fillText("2", (canvas.width/2+50), canvas.height/2+30);
ctx.fillText("3", (canvas.width/2), canvas.height/2+30);
ctx.fillText("4", (canvas.width/2-50), canvas.height/2+30);


// for (var i = 0; i <= input; i++) {
//   for (var j = 0; j < 2; j++) {
//     ctx.fillText(x, canvas.width/2+10*x, canvas.height/2+10*x);
//     x++;
//     console.log(j);
//   }
// }

var count = 0;
for(var i = 1; i<=input; i++) {
    switch(count)
    {
        case 0:
            // 1stitem
            ctx.fillText(i, (canvas.width/2+50), canvas.height/2);
            break;
        case 1:
            // 2nd item
            ctx.fillText(i, (canvas.width/2+50), canvas.height/2+30);
            break;
        case 2:
            // 3rd item
            ctx.fillText(i, (canvas.width/2), canvas.height/2+30);
            break;
        case 3:
            // 4th item
            ctx.fillText(i, (canvas.width/2-50), canvas.height/2+30);
            count = 0;
            break;
    }
    count++;
}


// for 2 loops use 1, then 2, then 3
