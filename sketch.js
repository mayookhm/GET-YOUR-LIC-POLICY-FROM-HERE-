var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var obstacles;
var s;

var form, player, game;

var cars, car1, car2, car3, car4;
var i, track, car1_img, car2_img, car3_img, car4_img;
var passedfinish;
var bronzeImg , goldImg,silverImg;
function preload(){
  f2 = loadImage("images/f1.png");
s=loadSound("sounds/sliding.mp3")
backgroundImage = loadImage("images/lic.png");
  track = loadImage("images/jungle.png");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  bronzeImg = loadImage("images/bronze.png");
  goldImg = loadImage("images/gold.png");
  silverImg = loadImage("images/silver.png");
}

function setup(){
  canvas = createCanvas(windowWidth , windowHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  obstacles.add(f1);
 }
}


function draw(){
   //start the game
   background(backgroundImage);

   //start the game
  
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2 && finishedPlayers === 4) {
     console.log("End");
     game.displayRankers();
    }
  
}
 
  
