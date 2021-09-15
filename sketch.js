const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase, computerPlayer;
var playerBase, player;

function setup() 
{
 canvas = createCanvas(windowWidth, windowHeight);
  
 //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
 computerBase = new ComputerBase(300, 500, 50, 50);
 //computerPlayer = new ComputerPlayer()
 playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
 player = new Player(285, playerBase.body.position.y - 153, 50, 180);
}

function draw() 
{
background(180);

Engine.update(engine);

// Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

//Display Playerbase and computer base 
   computerBase.display();
   playerBase.display();
//Display Player and computerplayer
   computerPlayer.display();
   player.display();
}
