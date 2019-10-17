class Sprite {
    
    constructor(x, y, width, height, color, img) {
        
        if(img != undefined) {
            this.img = img;
        } else {
            this.width = width;
            this.height = height;
            this.color = color;
        }

        this.xOrigin = x;
        this.yOrigin = y;
    }

}