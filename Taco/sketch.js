let img;

function preload() {
  const imgUrl = 'Dino.jpg';
  img = loadImage('imgUrl');
}


function setup() {  
  
  createCanvas(400, 400);
  
  image(img, 0, 0);
}

function draw() {
  noLoop()
  background(220);
}

