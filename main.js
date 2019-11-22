
var height = 400;
var width = 800;

const canvasHeight = height;
const canvasWidth = width;

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var canvasFillColor = "rgb(255, 255, 255)";

var updateArray = [];
var drawArray = [];

var lastRender = 0;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var lastFrameTimeMs = 0;
const maxFPS = 120;
var delta = 0;
var timestep = 1000 / 60;


function startLoop() {
    window.requestAnimationFrame(loop);
}

function whenAvailable(name, callback) {
    var interval = 10; // ms
    window.setTimeout(function() {
        if (window[name]) {
            callback(window[name]);
        } else {
            window.setTimeout(arguments.callee, interval);
        }
    }, interval);
}

function loop(timestamp) {
    // Throttle the frame rate.    
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(loop);
        return;
    }
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    var numUpdateSteps = 0;
    while (delta >= timestep) {
        update(timestep);
        delta -= timestep;
        if (++numUpdateSteps >= 240) {
            panic(numUpdateSteps);
            break;
        }
    }
    draw(ctx);
    window.requestAnimationFrame(loop);
}

function panic(numUpdateSteps) {
    console.log("Panic!");
    numUpdateSteps -= 240;
}

function draw(ctx) {
    ctx.fillStyle = canvasFillColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    drawArray.forEach(element => {
        element.draw(ctx);
    });
}

function update(delta) {
    updateArray.forEach(element => {
        element.update(delta);
    });

}