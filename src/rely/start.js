var canvas, ctx, isContinue, timeoutID;

function start(canvasName, func) {
    if (timeoutID)
        stop();

    canvas = document.getElementById(canvasName);
    ctx = canvas.getContext("2d");
    isContinue = true;

    var loop = function() {
        func();
        if (isContinue)
            timeoutID = setTimeout(loop, 10);
    }

    loop();
}

function stop() {
    clearTimeout(timeoutID);
    isContinue = false;
}

function clearCanvas() {
    if (ctx != null)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function start2(str){
    cxt.fillStyle=str;
    cxt.fillRect(0,0,150,75);
    
}