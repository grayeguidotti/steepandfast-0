let from;
let to;
let interA;
let interB;
let interC;

function setup() {
  createCanvas(windowWidth, windowHeight);
  from = color(255, 0, 0);
  to = color(0, 0, 0);

  interA = lerpColor(from, to, 0.22);
  interB = lerpColor(from, to, 0.44);
  interC = lerpColor(from, to, 0.80);
}

function draw() {
  background(255, 255, 255);

  fill(from);
  myTriangle(.4, width/7, height);

  fill(interA);
  myTriangle(.1, width/5, height/10);

  fill(interB);
  myTriangle(.1,width/5, height/6);

  fill(interC);
  myTriangle(.1, width/5, height/2);

  fill(to);
  myTriangle(.4, width/4, height);
}
  //console.log("mouseX: "+mouseX, "mouseY: "+mouseY);
  function myTriangle (amountOfWindow, x, y){
    push();
    const size = width * amountOfWindow;
    translate(x,y);
    triangle(0, -size, size, size, -size, size);
    pop(); 
}
