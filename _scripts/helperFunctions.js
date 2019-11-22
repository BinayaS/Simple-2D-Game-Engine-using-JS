function rectInRect(_object1, _object2) {

    findObjectsDementions(_object1, _object2);

    if (object1x < object2x + object2width &&
        object1x + object1width > object2x &&
        object1y < object2y + object2height &&
        object1y + object1height > object2y) {
         // collision detected!
         return true;
     }
     return false;
}

function pointInRect(x, y, _object2) {
    
    findObjectsDementions(undefined, _object2);

    if (x < object2x + object2width &&
        x > object2x &&
        y < object2y + object2height &&
        y > object2y) {
         // collision detected!
         return true;
     }
     return false;
}

function placeMeeting(hspd, vspd, _object1, _object2) {
    
    findObjectsDementions(_object1, _object2);

    if (object1x + hspd < object2x + object2width &&
        object1x + hspd + (object1width) > object2x &&
        object1y + vspd < object2y + object2height &&
        object1y + vspd + (object1height) > object2y) {
         // collision detected!
         return true;
     }
     return false;

}

function findObjectsDementions(_object1, _object2) {
    if(_object1 != undefined) {
        if(_object1.sprite.img != undefined) {
            object1x = _object1.xPos - _object1.sprite.xOrigin;
            object1y = _object1.yPos - _object1.sprite.yOrigin;
            object1width = _object1.sprite.img.width;
            object1height = _object1.sprite.img.height;
        } else {
            object1x = _object1.xPos - _object1.sprite.xOrigin;
            object1y = _object1.yPos - _object1.sprite.yOrigin;
            object1width = _object1.width;
            object1height = _object1.height;
        }
    }
    
    if(_object2 != undefined) {
        if(_object2.sprite.img != undefined) {
            object2x = _object2.xPos - _object2.sprite.xOrigin;
            object2y = _object2.yPos - _object2.sprite.yOrigin;
            object2width = _object2.sprite.img.width;
            object2height = _object2.sprite.img.height;
        } else {
            object2x = _object2.xPos - _object2.sprite.xOrigin;
            object2y = _object2.yPos - _object2.sprite.yOrigin;
            object2width = _object2.width;
            object2height = _object2.height;
        }
    }
}

function sign(int) {
    if(int > 0) {
        return 1;
    } else if(int < 0) {
        return -1;
    }
    return 0;
}