//---- Load Variables----//
{
    var keyboardLeft = 0;
    var keyboardRight = 0;
    var keyboardUp = 0;
    var keyboardDown = 0;
}

//---- Load Images ----//
{
    var image = new Image();
    image.src = "/_assets/Player.png";
}

//---- Load Sprites ----//
{
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
        yOrigin: 0,
        width: 100,
        height: 100,
        color: "rgba(255, 0, 0, 0.25)"
    });
}

//---- Load objects ----//
{
    var objPlayer = new Object(s, 150, 100);
    var oSolid = new Object(sprSolid, 100, 200);
    var oSolid2 = new Object(sprSolid, 250, 250, 200, 50);
    var oSolid3 = new Object(sprSolid, 300, 100, 50, 50);
    var oSolid4 = new Object(s2, 400, 200);
}

//---- Setup Arrays ----//
{
    var solidArray = [];
    solidArray.push(oSolid);
    solidArray.push(oSolid2);
    solidArray.push(oSolid3);
    solidArray.push(oSolid4);
}

//---- Keyboard Inputs ----//
{
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37 || event.keyCode == 65) {
            keyboardLeft = 1;
        }

        if(event.keyCode == 39 || event.keyCode == 68) {
            keyboardRight = 1;
        }

        if(event.keyCode == 38 || event.keyCode == 87) {
            keyboardUp = 1;
        }

        if(event.keyCode == 40 || event.keyCode == 83) {
            keyboardDown = 1;
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 37 || event.keyCode == 65) {
            keyboardLeft = 0;
        }

        if(event.keyCode == 39 || event.keyCode == 68) {
            keyboardRight = 0;
        }

        if(event.keyCode == 38 || event.keyCode == 87) {
            keyboardUp = 0;
        }

        if(event.keyCode == 40 || event.keyCode == 83) {
            keyboardDown = 0;
        }
    });
}

//---- Player Scripts ----//
{
    //Run on creation
    objPlayer.runStart = function() {
        this.hspd = 0;
        this.vspd = 0;
        this.horizontal = 0;
        this.vertical = 0;

        this.spd = 3;
        this.jumpPower = 13;
        this.canJump = false;
        this.grav = 0.8;
    }

    //Run every frame
    objPlayer.run = function() {
        var horizontal = keyboardRight - keyboardLeft;

        //moving right
        if(horizontal == 1) {
            this.hspd = this.spd;
            //moving left
        } else if(horizontal == -1) {
            this.hspd = -this.spd;
            //stoped
        } else if(horizontal == 0){
            this.hspd = 0;
        }

        if(keyboardUp && this.canJump == true) {
            this.canJump = false;
            this.vspd -= this.jumpPower;
        }

        if(keyboardUp == 0 && this.vspd < 0) {
            this.vspd += this.grav * 1.5;
        }

        this.vspd += this.grav;

        for(var i = 0; i < solidArray.length; i++) {
            //horizontal collision detection
            if(placeMeeting(this.hspd, 0, this, solidArray[i])) {
                while(!placeMeeting(sign(this.hspd), 0, this, solidArray[i])) {
                    this.xPos += sign(this.hspd)/2;
                }
                this.hspd = 0;
            }

            //vertical collision detection
            if(placeMeeting(0,this.vspd, this, solidArray[i])) {
                while(!placeMeeting(0, sign(this.vspd), this, solidArray[i])) {
                    this.yPos += sign(this.vspd)/2;
                }
                this.vspd = 0;
                if(pointInRect(this.xPos, this.yPos + this.height/2 + 1, solidArray[i])) {
                    this.canJump = true;
                }
            }
        }

        this.xPos += this.hspd;
        this.yPos += this.vspd;
        
    }
}

window.onload = startLoop;