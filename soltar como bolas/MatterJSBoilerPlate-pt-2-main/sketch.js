
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola1, bola2, bola3, bola4, bola5;
var chao;
var block1, block2;
var fan1, fan2, fan3;
var rotator1, rotator2, rotator3;
var angle1=60;
var angle2=60;
var angle3=60;
var engine;


function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;
	

var plane_options ={

		is_Static: true
	};

var BALL_options ={

	isStatic:false
};

bola1 = Bodies.circle(300,50,30, BALL_options);
World.add(world,bola1);
chao = Bodies.rectangle(400,600,600,30, plane_options);
World.add(world,chao);
block1 = Bodies.rectangle(100,400,170,20, plane_options);
World.add(world,block1);
block2 = Bodies.rectangle(500,400,170,20,plane_options);
World.add(world,block2);
rotator1 = Bodies.rectangle(300,200,140,20,plane_options);
World.add(world,rotator1);
rotator2 = Bodies.rectangle(300,200,140,20,plane_options);
World.add(world,rotator2);
rotator3 = Bodies.rectangle(300,200,140,20,plane_options);
World.add(world,rotator3);

  
}



function draw() {

		Engine.update(engine);

	Matter.Body.rotate(rotator1, angle1);
	push();
	translate(rotator1.position.x, rotator1.position.y);
	rotate(angle1);
	rect(0,0,140,20);
	pop();
	angle1 +=0.2;
	
	

  rectMode(CENTER);
  background("yellow");
  ellipse(bola1.position.x, bola1.position.y, 30);  
  rect(block1.position.x, block1.position.y, 170,20);
  rect(block2.position.x, block2.position.y, 170,20);
  rect(rotator1.position.x, rotator1.position.y, 140,20);
  rect(rotator2.position.x, rotator2.position.y, 140,20);
  rect(rotator3.position.x, rotator3.position.y, 140,20);
  rect(chao.position.x, chao.position.y, 600,30);
  drawSprites();
 
}



