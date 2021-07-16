
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1
var paper1
var ground1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	dustbin1=new dustbin()
	paper1=new paper(700,200,50,50)
	ground1= new ground(470,500,1000,1000)
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
  dustbin1.display()
  paper1.display()
  ground1.display()
}



