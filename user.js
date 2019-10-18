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
        this.xPos += 0.2;
    }
    o2.runStart = function() {
        this.vspd = 0;
    }
    o2.run = function() {
        if(this.yPos < (canvasHeight - this.sprite.img.height/2)) {
            this.vspd += 0.1;
        } else {
            this.vspd = 0;
        }
        this.yPos += this.vspd;
    }
}

startLoop();