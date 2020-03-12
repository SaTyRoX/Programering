let img;
let grader;
let speed;
let text1;
grader = 0.01;
speed = 0.01;

let text = '1234';

function preload() {
  img = loadImage('Dino2.png');
}


function setup() {  
  imageMode(CENTER);
  createCanvas(innerWidth, innerHeight);
 
  }

function draw() {
  background(247);

  grader = grader + speed;

  translate(innerWidth/2, innerHeight/2);
  rotate(grader);
  image(img, 0, 0, 600, 300);

}

function keyPressed() {
  speed = speed + 0.01;
}

