var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(600, 200, 70, 10);
  movingRect.shapeColor="green";
  fixedRect=createSprite(400,200,50,50);
  fixedRect.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 //to change the color when collided
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
     movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
     fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
     movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}