
let img;
let speed = 10;

class Cactus{
  constructor(type, x, y){
    this.type = type;
    this.x = x;
    this.y = y;
  }
}

class Background{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  move(){
    this.x -= speed;
  }
  draw(){
    image(img, this.x, this.y, 800, 43.26123128, 0, 100, 2304-speed, 100)
  }
  update(){
    this.move();
    this.draw();
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

let b1 = new Background(0,100);
let b2 = new Background(700-speed, 100);
function preload(){img = loadImage('assets/dinosaurgameassets.png');}
//var background =

function setup(){
  createCanvas(800, 600);

}

function draw(){
  background(255,255,255);
  moveBackground();
  animate();
}

function moveBackground(){
  b1.update();
  b2.update();

  if(b1.x <= -700+speed){
    b1 = new Background(700-speed, 100)
  }
  if(b2.x <= -700+speed){
    b2 = new Background(700-speed, 100)
  }
}
  var fCount = 0
  var cCount = 1;
function animate(){
  if(fCount == 60){
    fCount = 0;
  }

  if(fCount % 5 === 0){
    if(cCount == 1){
      cCount = 2;

    }else{
      cCount = 1;
    }
  }

  if(cCount == 1){
    image(img, dino.x, dino.y, 29.28452579, windowWidth/29.28452579, 1514, 0, 88, 96)
  }else{
    image(img, dino.x, dino.y, windowWidth/27.3181818182, windowWidth/27.3181818182, 1602, 0, 88, 96)
  }

  fCount++;
}

function controls(){

}

/* ---------------REFERENCE--------------------

  Ground - image(img, 0, 0, windowWidth, windowWidth/18.4923076923 , 0, 100, 2404, 100)
  Dinosaur Running 1 - image(img, 0, 0, windowWidth/27.3181818182, windowWidth/27.3181818182, 1514, 0, 88, 96)
  Dinosaur Running 2 - image(img, 0, 0, 88, 96, 1602, 0, 88, 96)
   ---------------------------------------------*/
