function setup(){
    createCanvas(400,400);

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
    //TODO 鼠标单击
    if(mouseIsPressed){
        number ++;
        let p = new Point(mouseX,mouseY);
        tree.insert(p);
    }
    tree.show();
    console.log(number);
}