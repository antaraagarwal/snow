const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  backgroundImg = loadImage("snow1.jpg");


  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);




  drawSprites();
}