const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld,ground1,box1,box2;
function setup() {

  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
   box1 = new Box(200,300,70,70);
   box2 = new Box(240,100,70,100);
   ground1 = new ground(200,390,400,20);
}

function draw() {
  background("black"); 
  rectMode(CENTER); 
  Engine.update(myengine);
  box1.display();
  box2.display();
  ground1.display();
  console.log(box2.body.angle);
}