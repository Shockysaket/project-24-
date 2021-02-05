
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var stone ;
var ground ;
var hammer ; 
var sand ; 


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   


	

	//Create the Bodies Here.
	ground = new Ground (600,390,1200,20);

	stone = new Stone  (700,320,70,70);
	hammer = new Hammer (700,20,40,40);
	sand = new Sand (520,300,20,20)


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  
  stone.display ();
  ground.display();
  hammer.display ();
  Stone.display ();




  drawSprites();
 
}



