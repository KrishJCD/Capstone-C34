const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3,boogie4,boogie5,boogie6;
var chain1,chain2,chain3,chain4,chain5;
var trainSound 
var crashSound
var flag = 0;
var world;
function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  world= myEngine.world;

  ground = new Ground(600,380,1200,20);
  //Boogie Creation.
  boogie1=new Boogie(40,160,50,50);
  boogie2=new Boogie(100,160,50,50);
  boogie3=new Boogie(160,160,50,50);
  boogie4=new Boogie(220,160,50,50);
  boogie5=new Boogie(280,160,50,50);
  boogie6=new Boogie(340,160,50,50);
  //Boogie Creation.

  //Chain Creation.
  chain1=new Slingshot(boogie1.body,boogie2.body);
  chain2=new Slingshot(boogie2.body,boogie3.body);
  chain3=new Slingshot(boogie3.body,boogie4.body);
  chain4=new Slingshot(boogie4.body,boogie5.body);
  chain5=new Slingshot(boogie5.body,boogie6.body);

  //Chain Creation.
  rock=new Rock(1000,ground.body.position.y-40,100,100,"images/rock1.png");
  //trainSound.play();
  //crashSound.play();

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
   boogie1.display();
   boogie2.display();
   boogie3.display();
   boogie4.display();
   boogie5.display();
   boogie6.display();
    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    chain5.show();
    rock.display();

    var collision=Matter.SAT.collides(boogie6.body,rock.body);
    if(collision.collided)
    {
      flag=1;
    }
    if(flag===1)
    {
      fill("blue");
      strokeWeight(8);
      textSize(20);
      text("CRASHED!WASTED!",500,100);
      crashSound.play();
      //Matter.Body.setStatic(true,boogie6.body);
      Matter.Body.setStatic(true,rock.body);
    }
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
  {
    Matter.Body.applyForce(boogie6.body,{x:boogie6.body.position.x,y:boogie6.body.position.y},{x:1,y:0});
    trainSound.play();
  }
}
