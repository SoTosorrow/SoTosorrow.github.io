//var myVector = new toxi.geom.Vec2D( 2, 3 ).scaleSelf(0.5);
//var myColor = toxi.color.TColor.newRGB(128/255,64/255,32/255);

var circle = 200;
var rot;
var col;
var freq = 0.000005; 
var cont = 0;
var r;
function setup() {
  createCanvas(600, 600);	//定义画面大小
}
function draw() {
  background(242);              
  translate(300, 300);          //转换坐标位置
  rotate(radians(rot));         //旋转坐标
  ellipseMode(RADIUS);          //以半径模式画圆
  for (var i=0; i<500; i ++) {     //设立一个循环范围
    circle= 200 + 50*sin(millis()*freq*i);    
            //【关键步骤】circle 会在之后的圆位置与圆半径中用到
            //这里的三角函数控制了圆运动位置的波动变化
            //使用不断变化的i错开圆位置的变化
    col=map(circle,150,250,255,60);  //颜色的计算，由远及近变红
    r=map(circle,150,250,5,2);       //圆半径的计算，由远及近变大
    fill(col,0,74);
    noStroke();
    ellipse(circle*cos(i), circle*sin(i),r,r);  
            //【关键步骤】这里的三角函数决定了作品直观的圆形效果  
    rot=rot+0.00005; 	         //增加旋转角度
 }	
}
