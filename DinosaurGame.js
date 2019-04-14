let img;

let speed = 10;

class Cactus{
  constructor(type, x, y){
    this.type = type;
    this.x = x;
    this.y = y;
  }
}

let ground = {
  x: 0,
  y: 25
}


let dino = {
  x: 50,
  y: 50
}



//var background =
function preload(){
  img = loadImage('assets/dinosaurgameassets.png');
}
function setup(){
  createCanvas(2404, 130);
  
}

function draw(){
  background(255,255,255);
  moveBackground();
  image(img, ground.x, ground.y, windowWidth, windowWidth/18.4923076923, 0, 100, 2404, 100)
  image(img, 0, 0, windowWidth/27.3181818182, windowWidth/27.3181818182, 1514, 0, 88, 96)

}

function moveBackground(){
  ground.x -= speed;
}

/* ---------------REFERENCE--------------------

  Ground - image(img, 0, 0, windowWidth, windowWidth/18.4923076923 , 0, 100, 2404, 100)
  Dinosaur Running 1 - image(img, 0, 0, windowWidth/27.3181818182, windowWidth/27.3181818182, 1514, 0, 88, 96)
  Dinosaur Running 2 - image(img, 0, 0, 88, 96, 1602, 0, 88, 96)
   ---------------------------------------------*/
