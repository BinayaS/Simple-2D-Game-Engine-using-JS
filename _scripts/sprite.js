class Sprite {
    constructor(object = {  
        xOrigin: 0,
        yOrigin: 0,
        width: 0,
        height: 0,
        color: "rgb(0, 0, 0)",
        img: new Image })
        {
            if(object.img != undefined) {
                this.img = object.img;
            } else {
                this.width = object.width;
                this.height = object.height;
                this.color = object.color;
            }
            this.xOrigin = object.xOrigin;
            this.yOrigin = object.yOrigin;
        }

}