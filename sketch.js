var seaImg
var shipImg 
function preload(){
seaImg = loadImage('sea.png')
shipImg = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png')
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,50,50)
  sea.scale=0.3
  ship = createSprite(200,200,50,50)
  ship.scale=0.5
  sea.addImage(seaImg)
  ship.addAnimation('shipImg',shipImg)
  sea.velocityX=-5
}

function draw() {
  background("blue");
  if(sea.x < 0){
  sea.x = sea.width/2;  
  }
  drawSprites()
}