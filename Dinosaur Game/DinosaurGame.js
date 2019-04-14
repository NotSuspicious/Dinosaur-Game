var img;

var cactus = class {
  constructor(type, x, y){
    this.type = type;
    this.x = x;
    this.y = y;
  }
}

var dino = {
  x: 50,
  y: 50
}

//var background =

function setup(){
  createCanvas(2404, 130);
  loadImage('dinosaurgameassets.png');
}

function draw(){
  image(img, 0, 0)
}
