
let cn;
var mis;
var last_mouseX;
var last_mouseY;

function setup(){
  console.log(0);
  cn = createCanvas(300,300);
  cn.touchStarted(doNothing);
  last_mouseX =0;
  last_mouseY =0;
}

function draw(){

  background(200);
  mis = millis();
  var distance = Math.sqrt((mouseX-last_mouseX)*(mouseX-last_mouseX)
    +(mouseY-last_mouseY)*(mouseY-last_mouseY));
  console.log(distance);

  
}

function touchStarted(){
  console.log("touchStarted");
  last_mouseX = mouseX;
  last_mouseY = mouseY;

}
function doNothing(){
  console.log("doNothing");
}