const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paperBall;
var bottomBin, rightBin, leftBin;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic:true,
		restitution:0.3,
        friction:0.5,
        density:1.2
	}

	fill ("yellow");
	ground=Bodies.rectangle(600,680,1200,20,ground_options);
	World.add(world,ground);


	//Create the Bodies Here.
	paperBall=new Paper (150,150,15,15);
	bottomBin=new Dustbin(700,662.5,120,15);
	rightBin=new Dustbin(765,628,15,70);
	leftBin=new Dustbin(635,628,15,70);		

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,1200,20);

  paperBall.display();
  bottomBin.display();
  rightBin.display();
  leftBin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:32,y:-35});

	}
}

