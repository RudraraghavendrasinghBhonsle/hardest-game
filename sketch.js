var Hunter = createSprite(55, 175, 15, 15);
Hunter.shapeColor = "brown";

var laser1 = createSprite(100, 0, 5, 200);
var laser2 = createSprite(300, 400, 5, 200);
laser1.shapeColor = "red";
  laser1.velocityY = 2;
  laser2.shapeColor = "red";
  laser2.velocityY = -2;

var finish = createSprite(345, 175, 50, 48);
finish.shapeColor = "yellow";

var ball1 = createSprite(120, 120, 10, 10);
var ball2 = createSprite(170, 230, 10, 10);
var ball3 = createSprite(220, 120, 10, 10);
var ball4 = createSprite(270, 230, 10, 10);

ball1.velocityY = 8;
ball2.velocityY = -8;
ball3.velocityY = 8;
ball4.velocityY = -8;

ball1.shapeColor = "blue";
ball2.shapeColor = "blue";
ball3.shapeColor = "blue";
ball4.shapeColor = "blue";

var count=0

function draw() {
 background("white");
 createEdgeSprites();
 text("Deaths = "+count, 250, 50);
 
  Hunter.velocityX=0;
  Hunter.velocityY=0;
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
 
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  
  if (keyDown("LEFT_ARROW")){
Hunter.x-=2;  
}
if (keyDown("RIGHT_ARROW")){
Hunter.x+=2;
}

if (Hunter.isTouching(laser1)|| Hunter.isTouching(laser2)){
  Hunter.x=55;
  Hunter.y=175;
  count++;  
}

if (Hunter.isTouching(ball1)|| Hunter.isTouching(ball2)|| Hunter.isTouching(ball3)
|| Hunter.isTouching(ball4)){
  Hunter.x=55;
  Hunter.y=175;
  count=0;  
}

  drawSprites();
}
