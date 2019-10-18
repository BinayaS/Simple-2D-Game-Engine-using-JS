//---- Test Code ----//
{
    var image = new Image();
    image.src = "/_assets/Player.png";
    
    var s = new Sprite({
        xOrigin: 10,
        yOrigin: 10,
        width: 20,
        height: 20,
        color: "rgba(0, 255, 0, 1)"
    });
    var s2 = new Sprite({
        xOrigin: image.width/2,
        yOrigin: image.height/2,
        img: image
    });
    var sprSolid = new Sprite({
        xOrigin: 0,
        yOrigin: 20,
        width: canvas.width,
        height: 20,
        color: "rgba(255, 0, 0, 0.25)"
    });
    
    var o = new Object(s, 400, 100);
    var o2 = new Object(s2, 200, 100);
    var oSolid = new Object(sprSolid, 0, canvas.height)

    scrRunStart = function() {
        this.vspd = 0;
    }
    scrRun = function() {
        if(this.yPos < (canvasHeight - this.sprite.img.height/2)) {
            this.vspd += 0.1;
        } else {
            this.vspd = 0;
        }
        this.yPos += this.vspd;
    }
    scrRunNoImg = function() {
        if(this.yPos < (canvasHeight - this.sprite.height/2)) {
            this.vspd += 0.1;
        } else {
            this.vspd = 0;
        }
        this.yPos += this.vspd;
    }

    o2.runStart = scrRunStart;
    o2.run = scrRun;
    o.runStart = scrRunStart;
    o.run = scrRunNoImg;
}

startLoop();