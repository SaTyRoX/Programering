let img;
let grader;
grader = 0;

function preload() {
  img = loadImage('Dino2.png');
}


function setup() {  
  imageMode(CENTER);
  createCanvas(innerWidth, innerHeight);
 
  }

function draw() {
  background(247);

  grader+=0.05;

  translate(innerWidth/2, innerHeight/2);
  rotate(grader);
  image(img, 0, 0, 600, 300);
  
}

