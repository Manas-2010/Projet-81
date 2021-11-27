canvas = document.getElementById("myCanvas")
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "grey"
ctx.lineWidth = 2;
ctx.rect(150 , 143 , 430 , 200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";
ctx.arc(250 , 210 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.arc(340 , 210 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.arc(430 , 210 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "yellow";
ctx.arc(295 , 260 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.arc(385 , 260 , 40 , 0 , 2*Math.PI);
ctx.stroke();

console.log("Red =");
console.log("X = 380 " + "Y = 260");
console.log("Blue =");
console.log("X = 250 " + "Y = 40 ");
console.log("Black =");
console.log("X = 340 " + "Y = 210");
console.log("Yellow =");
console.log("X = 295 " + "Y = 260");
console.log("Green =");
console.log("X = 385 " + "Y = 260");