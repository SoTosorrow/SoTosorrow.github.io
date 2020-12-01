var VerletPhysics2D = toxi.physics2d.VerletPhysics2D;
var VerletParticle2D = toxi.physics2d.VerletParticle2D;
var AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior;
var GravityBehavior = toxi.physics2d.behaviors.GravityBehavior;
var Vec2D = toxi.geom.Vec2D;
var Rect = toxi.geom.Rect;

/*
function setup(){
    createCanvas(400,300);
}
function draw(){
    background(100);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(0,0,255);
    fill(0,255,0);
    rect(200,150,150,150);

    noStroke()
    fill(255,0,0,175)
    eclipse(150,250,100,75);
}
*/
let cnv;
let d;
let g;
function setup() {
  cnv = createCanvas(100, 100);
  cnv.touchStarted(changeGray); // attach listener for
  // canvas click only
  d = 10;
  g = 100;
}

function draw() {
  background(g);
  ellipse(width / 2, height / 2, d, d);
}

// this function fires with any touch anywhere
function touchStarted() {
  d = d + 10;
}

// this function fires only when cnv is clicked
function changeGray() {
  g = random(0, 255);
}