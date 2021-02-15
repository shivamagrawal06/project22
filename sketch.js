const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
function preload() {

fImg=loadImage("images/fairy1.png");
backImg=loadImage("images/starnight.png");
starImg=loadImage("images/star.png");
music=loadSound("sound/JoyMusic.mp3")


}

function setup() {
  createCanvas(600, 500);
  engine = Engine.create()
  world = engine.world

  

farry=createSprite(50,400,10,10)
farry.addImage(fImg);
farry.scale=0.1

star=createSprite(width/2, 80, 10,10);
	star.addImage(starImg)
	star.scale=0.2

  starBody = Bodies.circle(width/2 , 80 , 5 , { isStatic:true});
	World.add(world, starBody);
  Engine.run(engine);
  
}

function draw() {
  background(backImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
  if(starBody.position.y>370){
    Matter.Body.setStatic(starBody,true);
  }
  
  
  drawSprites();
 
}
  
function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		farry.x+=20;
		
	}
	if (keyCode === LEFT_ARROW) {
		farry.x-=20;
		
	}

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(starBody,false);
  }
music.play();  
}

