
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImage;
function preload(){
	boyImage=loadImage("boy.png");
}
var tree;
var ground;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6;
var chain;

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1050,580);
	ground = new Ground(650,590,1300,15);
	stone = new Stone(315,490,10,10);
	
	boy = createSprite(300,485,10,10);
	boy.addImage(boyImage);
    boy.scale = 0.2
	chain = new Chain(stone.body,{x:235,y:420});
	
	//tree x and y = 600,680 
	mango1 = new Mango(1100,250,30);
	mango2 = new Mango(1010,200,30);
	mango3 = new Mango(990,256,30);
	mango4 = new Mango(1230,241,30);
	mango5 = new Mango(1140,262,30);
	mango6 = new Mango(1160,265,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  ground.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased() {
    chain.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  chain.attach(stone.body);
	}
  }

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	
	var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
}


