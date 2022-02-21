var sea,ship;
var sea2,ship2;

function preload(){
  sea2 = loadImage("sea.png");
  ship2=loadAnimation("ship-1.png","ship-2.png")

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(sea2);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",ship2);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  
  sea.velocityX = -3;
 
  

  
    
  drawSprites();
}
