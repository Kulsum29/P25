
var paper,ground, rSide1,rSide2,rBottom
var rSprite1,rSprite2,rSpriteBottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dustbinImg;

function preload(){
	dustbinImg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	
	
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="maroon"


	engine = Engine.create();
	world = engine.world;


	paper=new Paper(1000,600);

	rubbishBinOptions={
		isStatic:true,
		friction:5,
		density:1.8
	}

	rSide1=Bodies.rectangle(width/8-110,595,20,100,rubbishBinOptions)
	World.add(world,rSide1)
	/*rSprite1=createSprite(width/8-110,595,20,100)
	rSprite1.shapeColor="LightSkyBlue"*/
	
	rSide2=Bodies.rectangle(width/8+110,595,20,100,rubbishBinOptions)
	World.add(world,rSide2)
	/*rSprite2=createSprite(width/8+110,595,20,100)
	rSprite2.shapeColor="LightSkyBlue"*/

	
	rBottom=Bodies.rectangle(width/8,635,200,20,rubbishBinOptions)
	World.add(world,rBottom)
	/*rSpriteBottom=createSprite(width/8,635,200,20)
	rSpriteBottom.shapeColor="LightSkyBlue"*/
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine)
  rectMode(CENTER);
  background(255);
  /*rSprite1.x=rSide1.position.x
  rSprite1.y=rSide1.position.y
  rSprite2.x=rSide2.position.x
  rSprite2.y=rSide2.position.y
  rSpriteBottom.x=rBottom.position.x
  rSpriteBottom.y=rBottom.position.y*/
  groundSprite.y=ground.position.y
  paper.display()
  drawSprites();
  imageMode(CENTER)
  image(dustbinImg,width/8,595,260,100)
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-100,y:-85})
	}
}


