var rect1,rect2
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(200, 100, 100, 50);
  rect1.shapeColor = "green"
  rect1.debug = true
  rect1.velocityY = 1
  rect1.velocityX = 1

  rect2 = createSprite(600, 400, 50, 50);
  rect2.shapeColor = "green"
  rect2.debug = true
  rect2.velocityY = -1
  rect2.velocityX = -1

  rect3 = createSprite(250, 300, 100, 50);
  rect3.shapeColor = "green"
  rect3.debug = true
  rect3.velocityY = -1
  rect3.velocityX = 1
 
  rect4 = createSprite(650, 50, 100, 50);
  rect4.shapeColor = "green"
  rect4.debug = true
  rect4.velocityY = 1
  rect4.velocityX = -1

}

function draw() {
  background(0);
  //rect2.x = mouseX;
  //rect2.y = mouseY;
  
  if(isTouching(rect1,rect2))
  {
    rect1.shapeColor = "red"
    rect2.shapeColor = "red"
  }
  else if(isTouching(rect2,rect3)){
    rect3.shapeColor = "blue"
    rect2.shapeColor = "blue"
  }
  else{
    rect1.shapeColor = "green"
    rect2.shapeColor = "green"
    rect3.shapeColor = "green"
  }
  bounceBack(rect1,rect2)
  bounceBack(rect3,rect4)
  
  drawSprites();
}

