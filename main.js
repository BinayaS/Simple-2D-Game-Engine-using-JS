
//---- Init. Vars ----//
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var canvasHeight = 400;
    var canvasWidth = 800;
}

//---- Setup Canvas ----//
{
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}


//---- Test Code ----//
{
    var img = new Image();
    img.src = "/_assets/Player.png";
    
    var s = new Sprite(2.5, 2.5, 5, 5, "rgb(0, 255, 0)");
    var s2 = new Sprite(img.width/2, img.height/2, undefined, undefined, undefined, img);
    
    var o = new Object(s, 200, 100);
    var o2 = new Object(s2, 200, 100);
}



//---- Game Loop ----//
{
    function update(progress) {
    }
    
    function draw(ctx) {
        o2.draw(ctx);
        o.draw(ctx);
    }
    
    function loop(timestamp) {
        var progress = timestamp - lastRender;
    
        update(progress);
        draw(ctx);
    
        lastRender = timestamp;
        window.requestAnimationFrame(loop);
    }
}


//---- Start Loop ----//
{
    var lastRender = 0;
    window.requestAnimationFrame(loop);
}
