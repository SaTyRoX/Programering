function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    ax = windowWidth/2;
    ay = windowHeight/10;
    bx = windowWidth/5;
    by = windowHeight/1.5;
    cx = windowWidth/1.25;
    cy = windowHeight/1.5;
    x = random(width);
    y = random(height);
    mængde = 0;
  
    // Punkt a
  let a = createVector(ax, ay);
  stroke(255)
  strokeWeight(10);
  point(a);

  
  // Punkt b
  let b = createVector(bx, by);
  strokeWeight(10);
  point(b);

  
  // Punkt c
  let c = createVector(cx, cy);
  strokeWeight(10);
  point(c);

  
  stroke(0);
  fill(255)
  textSize(30);
  text("A", windowWidth/2 + 10, windowHeight/10);
  textSize(30);
  text("B", windowWidth/5 - 28, windowHeight/1.5);
  textSize(30);
  text("C", windowWidth/1.25 + 10, windowHeight/1.5);
  
  button = createButton('Slow');
  button.position(20, 20);
  button.mousePressed(slow);
  
  button = createButton('Medium');
  button.position(70, 20);
  button.mousePressed(medium);

  button = createButton('Fast');
  button.position(140, 20);
  button.mousePressed(fast);
  
  button = createButton('Info');
  button.position(80, 50);
  button.mousePressed(info);
}

function draw() {
  
  for (let i = 0; i < mængde; i++) {
  stroke(255,0,0)
  strokeWeight(3)
  point(x, y);
  
  let punkter = ['a', 'b', 'c'];
  let punkt = random(punkter);
  console.log(punkt)  
  

  if (punkt == 'a') {
    x = lerp(x, ax, 0.5);
    y = lerp(y, ay, 0.5);
    
  } else if (punkt == 'b') {
    x = lerp(x, bx, 0.5);
    y = lerp(y, by, 0.5);
             
  } else if (punkt == 'c') {
    x = lerp(x, cx, 0.5);
    y = lerp(y, cy, 0.5);
    
    }
  }                    
}


function slow() {
  mængde = 1;

}

function medium() {
  mængde = 10;

}

function fast() {
  mængde = 100;

}

function info() {
  textSize(15);
  textAlign(CENTER);
  text("3 hvide vilkårlige punkter er blevet placeret på kanvas. Et fjerde punkt bliver også placeret tilfældigt. Derefter bliver der udvalgt et tilfældigt punk, A, B eller C. Fra det fjerde punkt, til det nu udvalgte punkt, bliver der tegnet en prik i midten.", windowWidth/4, windowHeight/1.2, windowWidth/2, windowHeight/1.1);
}

