function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 0, 0);
  myTriangle(.1,width/6, height/4);
  //console.log("mouseX: "+mouseX, "mouseY: "+mouseY);
  
  function myTriangle (amountOfWindow, x, y){
    push();
    const size = width * amountOfWindow;
    translate(x,y);
    triangle(0, -size, size, size, -size, size);
    pop(); 

    
  }
}
