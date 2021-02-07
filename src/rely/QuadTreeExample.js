function setup(){
    cn = createCanvas(400,400);
    //单击
    //cn.touchStarted(what);

    let boundary = new Rectangle(200,200,200,200);
    number = 0;
    tree = new QuadTree(boundary,4);


    // for(let i=0; i< 300; i++){
    //     let p = new Point(random(width),random(height));
    //     tree.insert(p);
    // }

    // background(0);
    // tree.show();
}

function draw(){

    background(0);

    if(mouseIsPressed){
        number ++;
        let p = new Point(mouseX,mouseY);
        tree.insert(p);
    }
    tree.show();

    //检测矩阵
    stroke(255,0,0);
    strokeWeight(2);
    rectMode(CENTER);
    //let range = new Rectangle(random(width),random(height),100,100);
    let range = new Rectangle(mouseX,mouseY,30,30);
    rect(range.x,range.y,range.w*2 ,range.h*2);
    let points = []
    tree.query(range, points);
    for(let p of points){
        strokeWeight(8);
        stroke(255,0,0);
        point(p.x, p.y);
    }
}


//     let range = new Circle(mouseX,mouseY,64);

//     stroke("pink");
//     strokeWeight(1);
//     ellipse(range.x,range.y,range.r * 2);
    
    
    
// }




function touchStarted(){
    number ++;
    let p = new Point(mouseX,mouseY);
    //console.log(mouseX,mouseY);
    tree.insert(p);
    console.log(number);
    console.log(tree.length);

}

function what(){
    console.log("clicked");
}