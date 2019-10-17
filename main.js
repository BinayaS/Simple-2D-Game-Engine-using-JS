
//---- Init. Vars ----//
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var canvasHeight = 400;
    var canvasWidth = 800;
    var canvasFillColor = "rgb(255, 255, 255)";

    var updateArray = [];
    var drawArray = [];
}

//---- Setup Canvas ----//
{
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}


//---- Test Code ----//
{
    var image = new Image();
    image.src = "/_assets/Player.png";
    
    var s = new Sprite({
        xOrigin: 2.5,
        yOrigin: 2.5,
        width: 5,
        height: 5,
        color: "rgb(0, 255, 0)"
    });
    var s2 = new Sprite({
        xOrigin: image.width/2,
        yOrigin: image.height/2,
        img: image
    });
    
    var o = new Object(s, 400, 100);
    var o2 = new Object(s2, 200, 100);

    o.run = function() {
        this.xPos += 0.5
    }

}

//---- Game Loop ----//
{
    function update(progress) {

        updateArray.forEach(element => {
            element.update(progress);
        });

    }

    function draw(ctx) {
        ctx.fillStyle = canvasFillColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        drawArray.forEach(element => {
            element.draw(ctx);
        });
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
