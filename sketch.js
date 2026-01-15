function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  myTriangle(.1,mouseX, mouseY)
  
  function myTriangle (amountOfWindow, x, y){
    push();
    const size = width * amountOfWindow;
    translate(x,y);
    triangle(0, 0, size, size*2, -size, size*2);
    pop(); 
  }


}
