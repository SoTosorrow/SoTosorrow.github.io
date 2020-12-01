// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

let s;
let scl = 20;
let food;
let cn;

function setup() {
  cn = createCanvas(600, 600);
  cn.touchStarted(what);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
/*
function mousePressed() {
  s.total++;
}
*/
function draw() {
  background(51);
  if (s.eat(food)) {
    console.log(s.xspeed,s.yspeed);
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function touchStarted(){
  console.log("touchStarted");
  console.log(s.xspeed,s.yspeed);
  if(s.xspeed==0&&s.yspeed==1)
    s.dir(-1,0);
  else if(s.xspeed==-1&&s.yspeed==0)
    s.dir(0,-1);
  else if(s.xspeed==0&&s.yspeed==-1)
    s.dir(1,0);
  else if(s.xspeed==1&&s.yspeed==0)
    s.dir(0,1);
}

function keyPressed() {
  console.log("keyPressed");
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}


function what(){
  console.log("clicked");
}