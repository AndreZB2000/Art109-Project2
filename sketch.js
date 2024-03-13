let img1;
let img2;
let img3;
let grid;
let gridX;
let gridY;

function setup() {
    createCanvas(600, 600);
    background(255);
    img1 = loadImage('assets/1.png');
    img2 = loadImage('assets/2.png');
    img3 = loadImage('assets/3.jpg');
    //grid = [int(random(0, 2)),int(random(0, 2)),int(random(2)),int(random(2)),int(random(2)),int(random(2)),int(random(2)),int(random(2)),int(random(2))];
    grid = [0, 2, 1, 0, 1, 1, 2, 0, 2];
    gridX= [0, 200, 400, 0, 200, 400, 0, 200, 400];
    gridY= [0, 0, 0, 200, 200, 200, 400, 400, 400];
}

function draw() {

    for (let i = 0; i < 9; i++) {
        if(grid[i] == 0){
            let a = img1.get(gridX[i], gridY[i], 200, 200);
            image(a,gridX[i], gridY[i]);
        }
        else if(grid[i] == 1){
            let a = img2.get(gridX[i], gridY[i], 200, 200);
            image(a,gridX[i], gridY[i]);
        }
        else if(grid[i] == 2){
            let a = img3.get(gridX[i], gridY[i], 200, 200);
            image(a,gridX[i], gridY[i]);
        }
        
    }
    
}

function mousePressed(){
    if(0 <= mouseX && 200 >= mouseX) {
        if (0 <= mouseY && 200 >= mouseY) {
            if(grid[0] < 2) {
                grid[0] = grid[0] + 1;
            }else{
                grid[0] = 0;
            }
        } else if (201 <= mouseY && 400 >= mouseY) {
            if(grid[3] < 2) {
                grid[3] = grid[3] + 1;
            }else{
                grid[3] = 0;
            }
        } else if (401 <= mouseY && 600 >= mouseY) {
            if(grid[6] < 2) {
                grid[6] = grid[6] + 1;
            }else{
                grid[6] = 0;
            }
        }
    }

    if(201 <= mouseX && 400 >= mouseX) {
        if (0 <= mouseY && 200 >= mouseY) {
            if(grid[1] < 2) {
                grid[1] = grid[1] + 1;
            }else{
                grid[1] = 0;
            }
        } else if (201 <= mouseY && 400 >= mouseY) {
            if(grid[4] < 2) {
                grid[4] = grid[4] + 1;
            }else{
                grid[4] = 0;
            }
        } else if (401 <= mouseY && 600 >= mouseY) {
            if(grid[7] < 2) {
                grid[7] = grid[7] + 1;
            }else{
                grid[7] = 0;
            }
        }
    }

    if(401 <= mouseX && 600 >= mouseX) {
        if (0 <= mouseY && 200 >= mouseY) {
            if(grid[2] < 2) {
                grid[2] = grid[2] + 1;
            }else{
                grid[2] = 0;
            }
        } else if (201 <= mouseY && 400 >= mouseY) {
            if(grid[5] < 2) {
                grid[5] = grid[5] + 1;
            }else{
                grid[5] = 0;
            }
        } else if (401 <= mouseY && 600 >= mouseY) {
            if(grid[8] < 2) {
                grid[8] = grid[8] + 1;
            }else{
                grid[8] = 0;
            }
        }
    }
}
