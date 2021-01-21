var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var backgroundy,backgroundImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundImg=loadImage("background.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	backgroundy=createSprite(400,350,10,10)
	backgroundy.addImage(backgroundImg);
	backgroundy.scale=0.7;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-20, width,40);
	groundSprite.shapeColor="Black"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	packageSprite.visible=false;
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	keypressed();
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
	
	drawSprites();
}

function keypressed(){
	if(keyDown("left")){
		helicopterSprite.x=helicopterSprite.x-9;
	}
	if(keyDown("right")){
		helicopterSprite.x=helicopterSprite.x+9;
	}
	if(keyDown("down")&&helicopterSprite.x>350&&helicopterSprite.x<450){
		Matter.Body.setStatic(packageBody,false)
		packageSprite.visible=true;
	}
	
}