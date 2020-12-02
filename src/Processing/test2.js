var  VerletPhysics2D = toxi.physics2d.VerletPhysics2D;
var VerletParticle2D = toxi.physics2d.VerletParticle2D;
var VerletSpring2D = toxi.physics2d.VerletSpring2D;
var AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior;
var GravityBehavior = toxi.physics2d.behaviors.GravityBehavior;
var Vec2D = toxi.geom.Vec2D;
var Rect = toxi.geom.Rect;
var width = 200;
var height =200;


class Particle extends VerletParticle2D{
    constructor(loc){
        super(loc);
    }
    display() {
        fill(175);
        stroke(0);
        ellipse(x,y,16,16);
    }
}
class Connection extends VerletSpring2D{
    constructor(p1,p2,len,strength){
        super(p1,p2,len,strength);
    }
    display(){
        console.log("Connection display");
        stroke(0,0,0);
        line(this.a.x,this.a.y,this.b.x,this.b.y);
    }
}
var physics = new VerletParticle2D();
class Blanket{
    constructor(){
        this.particles = new Array();
        this.springs = new Array();

        var w = 20;
        var h = 20;
        var len =10;
        var strength = 0.125;

        for(var y=0;y<h;y++){
            console.log(y);
            for(var x=0; x < w; x++) {
  
                var p = new Particle(new Vec2D(width/2+x*len-w*len/2,y*len));
                //p.lock();
                physics.addParticle(p);
                this.particles.push(p);
        
                if (x > 0) {
                  var previous = this.particles[this.particles.length-2];
                  var c = new Connection(p,previous,len,strength);
                  physics.addSpring(c);
                  this.springs.push(c);
                }
        
                if (y > 0) {
                  var above = this.particles[this.particles.length-w-1];
                  var c=new Connection(p,above,len,strength);
                  physics.addSpring(c);
                  this.springs.push(c);
                }
              }
        }
        var topleft= this.particles[0];
        topleft.lock();
        //topleft.isLocked= true;
    
        var topright = this.particles[w-1];
        topright.lock();
        //topright.isLocked = true;
        //console.log(this.springs[0].display());
    }
    display() {
        //console.log("springs:",this.springs.length);
        
        for (var i=0;i<this.springs.length;i++) {
          this.springs[i].display();
        }
      }
}

function setup() {
    createCanvas(640,360);
    frameRate(60);
    physics=new VerletPhysics2D();
    physics.addBehavior(new GravityBehavior(new Vec2D(0,0.1)));

    b = new Blanket();
}

function draw() {

    background(255);

    physics.update();

    b.display();
}
