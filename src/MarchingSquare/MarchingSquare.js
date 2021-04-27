// 2d of marching cube
// 问题：二义性
// TODO :加速结构
canves = document.getElementById('canvas'); // get canvas
ctx = canves.getContext('2d');
canvas.width = 1920;
canvas.height = 1080; 

class Point{
    constructor(x,y,v){
        this.x = x;
        this.y = y;
        this.v = v;
    }
}

function drawLine(x1,y1,x,y){
    //ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x,y);
    //ctx.closePath();
    //ctx.stroke();
}
function feature(plt,prt,plb,prb){
    lt = plt.v;
    lb = plb.v;
    rt = prt.v;
    rb = prb.v;
    ctx.beginPath();
    if(lt==0&&lb==0&&rt==0&&rb==0){
        // case1
    }
    else if(lt==0&&lb==1&&rt==0&&rb==0){
        //case2
        x1 = plt.x;
        y1 = (plt.y+plb.y)/2;
        x2 = (plt.x+prt.x)/2;
        y2 = plb.y;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==0&&lb==0&&rt==0&&rb==1){
        //case3
        x1 = (plt.x+prt.x)/2;
        y1 = plb.y;
        x2 = prb.x;
        y2 = (prt.y+prb.y)/2;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==0&&lb==1&&rt==0&&rb==1){
        //case4
        x1 = plt.x;
        y1 = (plt.y+plb.y)/2;
        x2 = prt.x;
        y2 = (plt.y+plb.y)/2;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==0&&lb==0&&rt==1&&rb==0){
        // case5
        x1 = (plt.x+prt.x)/2;
        y1 = plt.y;
        x2 = prt.x;
        y2 = (prt.y+prb.y)/2;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==0&&lb==1&&rt==1&&rb==0){
        // case6
        x1 = plt.x;
        y1 = (plt.y+plb.y)/2;
        x2 = (plt.x+prt.x)/2;
        y2 = plt.y;
        drawLine(x1,y1,x2,y2);
        x1 = (plt.x+prt.x)/2;
        y1 = plb.y;
        x2 = prb.x;
        y2 = (prt.y+prb.y)/2;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==0&&lb==0&&rt==1&&rb==1){
        // case7
        x1 = (plt.x+prt.x)/2;
        y1 = plt.y;
        x2 = (plt.x+prt.x)/2;
        y2 = plb.y;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==0&&lb==1&&rt==1&&rb==1){
        // case8
        x1 = plt.x;
        y1 = (plt.y+plb.y)/2;
        x2 = (plt.x+prt.x)/2;
        y2 = plt.y;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==1&&lb==0&&rt==0&&rb==0){
        // case9 = 8
        x1 = plt.x;
        y1 = (plt.y+plb.y)/2;
        x2 = (plt.x+prt.x)/2;
        y2 = plt.y;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==1&&lb==1&&rt==0&&rb==0){
        // case10 = 7
        x1 = (plt.x+prt.x)/2;
        y1 = plt.y;
        x2 = (plt.x+prt.x)/2;
        y2 = plb.y;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==1&&lb==0&&rt==0&&rb==1){
        // case11
        x1 = plt.x;
        y1 = (plt.y+plb.y)/2;
        x2 = (plt.x+prt.x)/2;
        y2 = plb.y;
        drawLine(x1,y1,x2,y2);
        x1 = (plt.x+prt.x)/2;
        y1 = plt.y;
        x2 = prt.x;
        y2 = (prt.y+prb.y)/2;
        drawLine(x1,y1,x2,y2);

 
    }
    else if(lt==1&&lb==1&&rt==0&&rb==1){
        // case12 = 5
        x1 = (plt.x+prt.x)/2;
        y1 = plt.y;
        x2 = prt.x;
        y2 = (prt.y+prb.y)/2;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==1&&lb==0&&rt==1&&rb==0){
        // case13
        x1 = plt.x;
        y1 = (plt.y+plb.y)/2;
        x2 = prt.x;
        y2 = (plt.y+plb.y)/2;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==1&&lb==1&&rt==1&&rb==0){
        // case14 = 3
        x1 = (plt.x+prt.x)/2;
        y1 = plb.y;
        x2 = prb.x;
        y2 = (prt.y+prb.y)/2;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==1&&lb==0&&rt==1&&rb==1){
        //case15 = case2
        x1 = plt.x;
        y1 = (plt.y+plb.y)/2;
        x2 = (plt.x+prt.x)/2;
        y2 = plb.y;
        drawLine(x1,y1,x2,y2);
    }
    else if(lt==1&&lb==1&&rt==1&&rb==1){
        // case16
    }
    ctx.closePath();
    ctx.stroke();
}


function random(){
    num = Math.floor(Math.random()*10)
    if(num>5)
        return 1;
    else
        return 0;
}

const border = 200;
const accuracy = 8;


var p = new Array(border);
for(var n=0;n<border;n++){
    p[n] = new Array(border);
}

function init(){
    for(var i=0;i<border;i++){
        for(var j=0;j<border;j++){
            x = i*accuracy;
            y = j*accuracy;
            //p[i][j] = new Point(x,y,random());
            p[i][j] = new Point(x,y,0);
            //console.log(i,j,p[i][j]);
            //drawLine(x,y,x+1,y+1);
            
        }
    }


    for(var j=0;j<border-1;j++){
        for(var i=0;i<border-1;i++){
            feature(p[i][j],p[i+1][j],p[i][j+1],p[i+1][j+1]);
            
        }
    }

}
function draw(){
    for(var j=0;j<border-1;j++){
        for(var i=0;i<border-1;i++){
            feature(p[i][j],p[i+1][j],p[i][j+1],p[i+1][j+1]);
            
        }
    }
}


canves.addEventListener("click",function(e){
    console.log("click");  // can be mousemove
    var value = 1;
    //if(e.button==1){
    //    value = 0;
    //}
    var startx = e.pageX - accuracy*2;
    var endx = e.pageX + accuracy*2;
    var starty = e.pageY - accuracy*2;
    var endy = e.pageY + accuracy*2;
    for(var i=startx;i<endx;i+=accuracy){
        for(var j=starty;j<endy;j+=accuracy){
            roundi = Math.round(i/accuracy);
            roundj = Math.round(j/accuracy);
            p[roundi][roundj].v = value;
        }
    }
    
    canves = document.getElementById('canvas'); // get canvas
    ctx = canves.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;  
    draw();

});
init();
//var timer = setInterval(init,10);




