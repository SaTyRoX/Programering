

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200, 100, 100)
  line(200, 175, 50, mouseY)
  line(200, 175, 350, mouseX)
  line(200, 150, 200, 300)
  line(200, 300, 150, 400)
  line(200, 300, 250, 400)
  circle(175, 90, 25)
  circle(225, 90, 25)
  line(175, 125, 225, 125)
}