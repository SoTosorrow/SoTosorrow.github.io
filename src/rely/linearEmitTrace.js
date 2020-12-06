function linearEmitTrace(canvas){
    var position = new Vector2(10,200);
    var velocity = new Vector2(50,-50);
    var acceleration = new Vector2(0,10);
    var dt=0.1;
    var c,ctx;
    var i=1;
    c = document.getElementById(canvas);
    c.width = screen.availWidth;
    c.height = screen.availHeight;
    // 可见区域宽高
    // c.width = document.documentElement.clientWidth;
    // 窗口宽高
    // window.innerWidth;
    // 屏幕显示宽高
    // screen.width
    console.log(c.width,c.height);
    ctx = c.getContext("2d");
    console.log(ctx);
    step();
    function step(){
        position = position.add(velocity.multiply(dt));
        velocity = velocity.add(acceleration.multiply(dt));
        //笔触的颜色、渐变、模式
        ctx.strokeStyle = "#000000";
        //填充的颜色、渐变、模式
        ctx.fillStyle = "#FFFFFF";
        // 起始一条路径，或重置当前路径
        ctx.beginPath();
        // 创建弧/曲线（用于创建圆形或部分圆）
        ctx.arc(position.x,position.y,5,0,Math.PI*2,true);
        // 创建从当前点回到起始点的路径
        ctx.closePath();
        //填充当前绘图（路径）
        ctx.fill();
        // 绘制已定义的路径
        ctx.stroke();
        i++;
        //console.log(i);
        if(i<100){
            // console.log(i);
            // 10ms后调用函数、此处递归自己以一直运行
            setTimeout(step,10);
        }
    }
}


function l(){
    console.log(999);
}