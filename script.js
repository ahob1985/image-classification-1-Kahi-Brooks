// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;

// Global ML Variables
let mobilenet;
let img; 

function setup() {
canvasDiv = createDiv();
canvas = createCanvas(640, 480);
canvas.parent(canvasDiv);
textDiv = createDiv();
textP = createP("Model loading, please wait...");
textP.parent(textDiv);
img = loadImage("images/guinea-pig.jpg");
}

function draw() {

}

function imageLoaded() {

}

function modelReady() {
mobilenet.classify(canvas, gotResults);
}

function gotResults(error, results) {

let label = results[0].label;
let confidence = results[0].confidence;

textP.html("Label: " + label + " - Confidence " + confidence);

  if(error) {

    console.error(error);

  } else {

    

  }

}
