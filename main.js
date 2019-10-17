

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

//get DPI
let dpi = window.devicePixelRatio;
function fix_dpi() {
    //get CSS height
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    //get CSS width
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    //scale the canvas
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
}

var img = new Image();
img.src = "/_assets/Player.png";

var s = new Sprite(5, 5, 10, 10, "rgb(0, 255, 0)");
var s2 = new Sprite(img.width/2, img.height/2, undefined, undefined, undefined, img);

var o = new Object(s, 200, 100);
var o2 = new Object(s2, 200, 100);


function update(progress) {
}

function draw(ctx) {
    o2.draw(ctx);
    o.draw(ctx);
}

function loop(timestamp) {
    var progress = timestamp - lastRender

    update(progress)
    draw(ctx)

    lastRender = timestamp
    window.requestAnimationFrame(loop)
}

var lastRender = 0
window.requestAnimationFrame(loop)