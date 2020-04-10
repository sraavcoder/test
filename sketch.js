const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  
createCanvas(800,500);

 engine = Engine.create();
world = engine.world 

base = new Ground(300,495,1000,30);
base2 = new Ground(570,170,200,20);;

ball = new Circle(150,350);

box = new Box(450,450,40,60);
box2 = new Box(490,450,40,60);
box3 = new Box(530,450,40,60);
box4 = new Box(570,450,40,60);
box5 = new Box(610,450,40,60);
box6 = new Box(650,450,40,60);
box7 = new Box(690,450,40,60);
box8 = new Box(490,390,40,60);
box9 = new Box(530,390,40,60);
box10 = new Box(570,390,40,60);
box11 = new Box(610,390,40,60);
box12 = new Box(650,390,40,60);
box13 = new Box(530,330,40,60);
box14 = new Box(570,330,40,60);
box15 = new Box(610,330,40,60);
box16 = new Box(570,270,40,60);
box17 = new Box(530,130,40,60);
box18 = new Box(570,130,40,60);
box19 = new Box(610,130,40,60);
box20 = new Box(570,70,40,60);



slingshot = new String(ball.body,{x:190,y:310})





   
}

function draw() {
  background(0);  
  
  Engine.update(engine);

base.display();
base2.display();
box.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
ball.display();
slingshot.display();


}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}