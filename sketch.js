
function preload(){
  trexAnimation=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,10,40)
  trex.addAnimation("Zac",trexAnimation)
  trex.scale=0.5
}

function draw(){
  background("black");
  drawSprites();

}
