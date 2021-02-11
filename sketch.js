const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
 bgImage=loadImage("images/GamingBackground.png")
}

function setup() {

  createCanvas(1200, 400);
  

	engine = Engine.create();
    world = engine.world;

    superhero1= new superhero(100,200,50);
    slingshot1= new SlingShot(superhero1.body,{x:300,y:20})

  


}

function draw() {

  background(bgImage);
  Engine.update(engine);

  
  superhero1.display();
  slingshot1.display();


}

