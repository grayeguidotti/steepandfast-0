function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 0, 0);
  myTriangle(.1,width/6, height/4);
  myTriangle(.5, width/4, height/1);
  myTriangle(.1, width/6, height/2);
  myTriangle(.3, width/7, height/1);
  

  //console.log("mouseX: "+mouseX, "mouseY: "+mouseY);
  
  function myTriangle (amountOfWindow, x, y){
    push();
    const size = width * amountOfWindow;
    translate(x,y);
    triangle(0, -size, size, size, -size, size);
    pop(); 

  }
}
