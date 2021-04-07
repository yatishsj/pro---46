// var top= createSprite(200, 0,400,2);
// var bottom= createSprite(200, 400,400,2);
// var left = createSprite(0, 200,2,400);
// var right = createSprite(400, 200,2,400);

var letterN,letterS;

var blinky,cylde,inky,pinky;
var blinky1,cylde1,inky1,pinky1;
var pacman1,pacman;

var obstacle_1,obstacle_2,obstacle_3,obstacle_4,obstacle_5;
var obstacle_6,obstacle_7,obstacle_8,obstacle_9,obstacle_10;
var obstacle_11,obstacle_12,obstacle_13,obstacle_14,obstacle_15;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;
var obstacle6,obstacle7,obstacle8,obstacle9,obstacle10;
var obstacle11,obstacle12,obstacle13,obstacle14,obstacle15;

var obstacle_16,obstacle_17,obstacle_18,obstacle_19,obstacle_20,obstacle_21,obstacle_22;
var obstacle16,obstacle17,obstacle18,obstacle19,obstacle20,obstacle21,obstacle22;

var obstacle_23,obstacle_24,obstacle_25;
var obstacle23,obstacle24,obstacle25;


function preload(){
letterN = loadImage("Images/n_11.png");
letterS = loadImage("Images/s_1.png")

blinky = loadImage("Images/blinky.png");
 cylde = loadImage("Images/cylde.png");
  inky = loadImage("Images/inky.png");
 pinky = loadImage("Images/pinky.png");
pacman = loadImage("Images/pacman.png");

obstacle1 = loadImage("ObstacleL/obstacleL1.png");
obstacle2 = loadImage("ObstacleL/obstacleL2.png");
obstacle3 = loadImage("ObstacleL/obstacleL3.png");
obstacle4 = loadImage("ObstacleL/obstacleL4.png");
obstacle5 = loadImage("ObstacleL/obstacleL5.png");
obstacle6 = loadImage("ObstacleL/obstacleL6.png");
obstacle7 = loadImage("ObstacleL/obstacle7.png");
obstacle8 = loadImage("ObstacleL/obstacle8.png");
obstacle9 = loadImage("ObstacleL/obstacle9.png");
obstacle10 = loadImage("ObstacleL/obstacle10.png");
obstacle11 = loadImage("ObstacleL/obstacle11.png");
obstacle12 = loadImage("ObstacleL/obstacle12.png");
obstacle13 = loadImage("ObstacleL/obstacle13.png");
obstacle14 = loadImage("ObstacleL/obstacle14.png");
obstacle15 = loadImage("ObstacleL/obstacle15.png");

obstacle16 = loadImage("ObstacleS/s1.png");
obstacle17 = loadImage("ObstacleS/s2.png");
obstacle18 = loadImage("ObstacleS/s3.png");
obstacle19 = loadImage("ObstacleS/s4.png");
obstacle20 = loadImage("ObstacleS/s5.png");
obstacle21 = loadImage("ObstacleS/s6.png");
obstacle22 = loadImage("ObstacleS/s7.png");

obstacle23 = loadImage("ObstacleM/m1.png");
obstacle24 = loadImage("ObstacleM/m2.png");
obstacle25 = loadImage("ObstacleM/m3.png");







}

function setup(){
createCanvas (displayWidth,displayHeight);

var letterN_1 = createSprite(600,400,100,200);
letterN_1.addImage(letterN);
letterN_1.scale = 0.4;

var letterS_1 = createSprite(850,400,200,200);
letterS_1.addImage(letterS)
letterS_1.scale = 1.5;

block_1 = createSprite(738,503,147,2)
block_2 = createSprite(742,292,160,2)


var blinky1 = createSprite(200,100,200,200);
blinky1.addImage("blinky",blinky)
blinky1.scale = 0.05;

var cylde1 = createSprite(250,100,200,200);
cylde1.addImage("cylde",cylde)
cylde1.scale = 0.05;

var inky1 = createSprite(300,100,200,200);
inky1.addImage("inky",inky)
inky1.scale = 0.05;

var pinky1 = createSprite(350,100,200,200);
pinky1.addImage("pinky",pinky)
pinky1.scale = 0.2;

pacman1 = createSprite(400,100,200,200);
pacman1.addImage("pacman",pacman)
pacman1.scale = 0.04;
inky1.x=pacman1.x;



border_t = createSprite(200,0,12800,2);
border_t1 = createSprite(200,5,12800,2);

border_b = createSprite(200,719,12800,2);
border_b1 = createSprite(200,715,12800,2)

border_L = createSprite(0,700,1,12800);
border_L1 = createSprite(5,700,1,600);
border_L2 = createSprite(5,200,1,400)

border_R = createSprite(1279,0,1,12800);
border_R1 = createSprite(1274,0,1,700);
border_R2 = createSprite(1274,700,1,700);


obstacle_1 = createSprite(200,50,150,2);
obstacle_1.addImage(obstacle1);
obstacle_1.scale = 1.5;

obstacle_2 = createSprite(400,100,200,2);
obstacle_2.addImage(obstacle2)
obstacle_2.scale = 1.5;

obstacle_3 = createSprite(700,50,350,2);
obstacle_3.addImage(obstacle3)
obstacle_3.scale = 1.5;

obstacle_4 = createSprite(750,200,400,2);
obstacle_4.addImage(obstacle4)
obstacle_4.scale = 1.5;

obstacle_5 = createSprite(950,100,350,2);
obstacle_5.addImage(obstacle5)
obstacle_5.scale = 1.5;

obstacle_6 = createSprite(200,200,350,2);
obstacle_6.addImage(obstacle6)
obstacle_6.scale = 1.5;

obstacle_7 = createSprite(750,600,500,2);
obstacle_7.addImage(obstacle7)
obstacle_7.scale = 1.5;

obstacle_8 = createSprite(1050,300,450,2);
obstacle_8.addImage(obstacle8)
obstacle_8.scale = 1.5;

obstacle_9 = createSprite(1055,400,450,2);
obstacle_9.addImage(obstacle9)
obstacle_9.scale = 1.5;

obstacle_10 = createSprite(100,500,350,2);
obstacle_10.addImage(obstacle10)
obstacle_10.scale = 1.5;

obstacle_11 = createSprite(275,390,350,2);
obstacle_11.addImage(obstacle11)
obstacle_11.scale = 1.5;

obstacle_12 = createSprite(100,300,350,2);
obstacle_12.addImage(obstacle12)
obstacle_12.scale = 1.5;

obstacle_13 = createSprite (350,600,350,2);
obstacle_13.addImage(obstacle13)
obstacle_13.scale = 1.5;

obstacle_14 = createSprite(1100,600,450,2);
obstacle_14.addImage(obstacle14)
obstacle_14.scale = 1.5;

obstacle_15 = createSprite(1150,170,450,2);
obstacle_15.addImage(obstacle15)
obstacle_15.scale = 1.5;

obstacle_16 = createSprite(600,620,350,2);
obstacle_16.addImage(obstacle16)
obstacle_16.scale = 1.5;

obstacle_17 = createSprite(970,620,350,2);
obstacle_17.addImage(obstacle17)
obstacle_17.scale = 1.5;

obstacle_18 = createSprite(1090,470,350,2);
obstacle_18.addImage(obstacle18)
obstacle_18.scale = 1.5;

obstacle_19 = createSprite(1250,380,350,2);
obstacle_19.addImage(obstacle19)
obstacle_19.scale = 1.5;

obstacle_20 = createSprite(30,100,350,2);
obstacle_20.addImage(obstacle20)
obstacle_20.scale = 1.5;

obstacle_21 = createSprite(450,250,3550,2);
obstacle_21.addImage(obstacle21)
obstacle_21.scale = 1.5;

obstacle_22 = createSprite(1250,100,450,2);
obstacle_22.addImage(obstacle22)
obstacle_22.scale = 1.5;

obstacle_23 = createSprite(100,520,350,2);
obstacle_23.addImage(obstacle23)
obstacle_23.scale = 1.5;

obstacle_24 = createSprite(655,55,450,2);
obstacle_24.addImage(obstacle24)
obstacle_24.scale = 1.5;

obstacle_25 = createSprite(120,310,450,2);
obstacle_25.addImage(obstacle25)
obstacle_25.scale = 1.5;






edges=createEdgeSprites();



}


function draw() {
background("black");
  fill("orange");
  rect(450,300,50,210);
  rect.scale = 1 ;




  if(keyDown("up")){
    pacman1.velocityX = 0;
    pacman1.velocityY = -2;
  }
  
  if(keyDown("down")){
    pacman1.velocityX = 0;
    pacman1.velocityY = 2;
  }
  
  if(keyDown("left")){
    pacman1.velocityX = -2;
    pacman1.velocityY = 0;
  }
  
  if(keyDown("right")){
    pacman1.velocityX = 2;
    pacman1.velocityY = 0;
  }
  
  
  
  pacman1.bounceOff(edges[0]);
  pacman1.bounceOff(edges[1]);
  pacman1.bounceOff(edges[2]);
  pacman1.bounceOff(edges[3]);


  drawSprites();
  
  // inky.display();
  // pinky.display();
  // cylde.display();
  // blinky.display();
  // pacman.display();
  
}
