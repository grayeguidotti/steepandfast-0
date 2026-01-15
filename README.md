# steepandfast-0
open terminal 

navigate to project folder using cd (change directory)

after adding files 

`git add .`

after important changes 

`git commit -am 'useful commit message'`

upload to github 

`git push origin main` 

to find errors
    go to browser that you are viewing in your sketch
    right click + inspect 
    select console tab
    view error

to view mouse coordinates
    `console.log("mouseX: "+mouseX, "mouseY: "+mouseY);`
    then go to browser > inspect > console

to make dynamic sketch size:
    declare a function:
    `function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
    then add to setup:
    `createCanvas(windowWidth, windowHeight);
    
    }