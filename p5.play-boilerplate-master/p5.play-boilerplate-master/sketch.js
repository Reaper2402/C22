var fixRect,movingRect;
var game1,game2,game3,game4;


function setup() {
  createCanvas(1200,800);
 fixRect = createSprite(200, 250, 50, 80);
 fixRect.shapeColor ="red";
 fixRect.debug=true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="red";
  movingRect.debug=true;

  game1= createSprite(100,100,50,50);
  game1.shapeColor="red";

  game2= createSprite(200,150,50,50);
  game2.shapeColor="red";

  game3= createSprite(300,200,50,50);
  game3.shapeColor="red";

  game4= createSprite(400,250,50,50);
  game4.shapeColor="red";
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixRect.x);
 
if(isTouching(movingRect,game2)){
  game2.shapeColor="yellow";
    movingRect.shapeColor="yellow";
}
else{
  game2.shapeColor="red";
  movingRect.shapeColor="red";
}

  //if(movingRect.isTouching(fixRect)) {}
  drawSprites();
}