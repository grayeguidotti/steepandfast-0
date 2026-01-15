let from;
let to;
let interA;
let interB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  from = color(255, 0, 0);
  to = color(0, 0, 0);

  interA = lerpColor(from, to, 0.33);
  interB = lerpColor(from, to, 0.66);
}

function draw() {
  background(255, 255, 255);
  fill(from);
  myTriangle(.3, width/7, height/1);
  fill(interA);
  myTriangle(.1, width/6, height/2);
  fill(interB);
  myTriangle(.1,width/6, height/4);
  fill(to);
  myTriangle(.3, width/4, height/1);
}
  //console.log("mouseX: "+mouseX, "mouseY: "+mouseY);
  function myTriangle (amountOfWindow, x, y){
    push();
    const size = width * amountOfWindow;
    translate(x,y);
    triangle(0, -size, size, size, -size, size);
    pop(); 
}
