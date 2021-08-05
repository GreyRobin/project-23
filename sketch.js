const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player
var playerbase
var compplayer
var compbase

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   player = new Player(200,-30,0,0)
   compplayer = new ComputerPlayer(-200,-30,0,0)
   playerbase = new PlayerBase(200,0,0,0)
   compbase = new ComputerBase(-200,0,0,0)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerbase.display()
  compbase.display()

   //display Player and computerplayer
   player.display()
   compplayer.display()

}
