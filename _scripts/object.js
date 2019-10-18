class Object {

    constructor(sprite, x, y) {
        this.sprite = sprite;
        this.xPos = x;
        this.yPos = y;
        this.scripts = [];
        this.ranStart = false;
        this.start();
    }

    draw(ctx) {
        if(this.sprite.img != undefined) {
            ctx.drawImage(this.sprite.img, this.xPos - this.sprite.xOrigin, this.yPos - this.sprite.yOrigin)
        } else {
            ctx.fillStyle = this.sprite.color;
            ctx.fillRect(this.xPos - this.sprite.xOrigin, this.yPos - this.sprite.yOrigin, this.sprite.width, this.sprite.height);
        }
    }

    start() {
        updateArray.push(this);
        drawArray.push(this);
    }

    runStart() {
    }
    run(){
    }

    update(delta) {

        if(this.ranStart === false) {
            this.runStart();
            this.ranStart = true;
        }

        this.run(delta);
    }
}