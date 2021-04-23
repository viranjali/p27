
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob1 = new Bob(200,450,80,80);
	bob2 = new Bob(280,450,80,80);
	bob3 = new Bob(360,450,80,80);
	bob4 = new Bob(440,450,80,80);
	bob5 = new Bob(520,450,80,80);
	roof = new Roof(350,100,450,40);

	rope1 = new Rope(bob1.body, roof.body, -150,0);
	rope2 = new Rope(bob2.body, roof.body, -70,0);
	rope3 = new Rope(bob3.body, roof.body, 10,0);
	rope4 = new Rope(bob4.body, roof.body, 92,0);
	rope5 = new Rope(bob5.body, roof.body, 170,0);
	

  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();	
  
  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-45});
	}
}

