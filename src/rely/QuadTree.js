//TODO父节点分裂时的数据转移（是否需要？即分裂的父节点是否还储存数据）
//TODO删除节点
//TODO重复顶点为同一坐标问题
//TODOClear
//TODO碰撞检测
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;

    }
}

//范围检测
class Rectangle{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    // insert(p){
    //     if(p.x <)
    // }

    get left(){
        return this.x - this.w/2;
    }    
    get right(){
        return this.x + this.w/2;
    }
    get top(){
        return this.y - this.h/2;
    } 
    get bottom(){
        return this.y + this.h/2;
    }

    isContain(point){
        return(point.x >= this.x -this.w &&
            point.x <= this.x + this.w &&
            point.y >= this.y - this.h &&
            point.y <= this.y + this.h);
    }

    intersects(range){
        //range 是html文档中的区域，如用户鼠标拖动选中的区域
        return(range.x -range.w > this.x + this.w ||
            range.x +range.w < this.x - this.w ||
            range.y -range.h > this.y + this.h ||
            range.y +range.h < this.y - this.h);    
    }
}


class Circle{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.square = this.r * this.r;
    }

    isContain(point){
        // 某点到选择圈的欧式距离
        let dis = Math.pow((point.x - this.x),2) + Math.pow((point.y - this.y),2);
        return dis<= this.square;
    }

    intersects(range){
        
    }
}

class QuadTree{
    constructor(boundary, n){
        //边界
        this.boundary = boundary;
        this.capacity = n; 
        this.points = [];
        this.divided = false;//分裂标志
        this.depth = 1;  // depth from 0 or 1?
    }

    //当容量到达上限，分裂四叉树
    subdivide(){
        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.w/2;
        let h = this.boundary.h/2;

        let ne = new Rectangle(x + w, y - h, w, h);
        this.northeast = new QuadTree(ne, this.capacity);
        let nw = new Rectangle(x - w, y - h, w, h);
        this.northwest = new QuadTree(nw, this.capacity);
        let se = new Rectangle(x + w, y + h, w, h);
        this.southeast = new QuadTree(se, this.capacity);
        let sw = new Rectangle(x - w, y + h, w, h);
        this.southwest = new QuadTree(sw, this.capacity);
        
        let next_depth = this.depth +1;
        this.northeast.depth =next_depth;
        this.northwest.depth =next_depth;
        this.southeast.depth =next_depth;
        this.southwest.depth =next_depth;


        this.divided = true;
    }

    insert(p){

        if(!this.boundary.isContain(p)){
            return false;
        }

        // if(this.points.length < this.capacity){
        //     this.points.push(p);
        //     return true;
        // }
        // if(!this.divided){
        //     this.subdivide();
        // }

        if(!this.divided){
            this.points.push(p);
            if(this.points.length > this.capacity){
                this.subdivide();
                for(let p of this.points){
                    this.northeast.insert(p);
                    this.northwest.insert(p);
                    this.southeast.insert(p);
                    this.southwest.insert(p);
                }
                this.points = [];
            }
            return true;            
        }

        return (this.northeast.insert(p)||this.northwest.insert(p)||
                this.southeast.insert(p)||this.southwest.insert(p));
    }

    query(range,found){
        if(!found){
            found = [];
        }
        if(!range.intersects(this.boundary)){
            return found;
        }
        for(let p of this.points){
            if(range.isContain(p)){
                found.push(p);
            }
        }
        if(this.divided){
            this.northeast.query(range.found);
            this.northwest.query(range.found);
            this.southeast.query(range.found);
            this.southwest.query(range.found);
        }
    }

    show(){
        stroke(255);
        strokeWeight(1);
        noFill();
        rectMode(CENTER);
        rect(this.boundary.x, this.boundary.y, this.boundary.w*2, this.boundary.h*2);
        if(this.divided){
            this.northwest.show();
            this.northeast.show();
            this.southeast.show();
            this.southwest.show();
        }
        for(let p of this.points){
            strokeWeight(4);
            point(p.x, p.y);
        }
    }


}



