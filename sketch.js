var fixedRectangle, movingRectangle
var fixedBall , car
var wall

function setup(){
createCanvas(600,600)
fixedRectangle = createSprite(100,200,20,20)
fixedRectangle.shapeColor = ("yellow")

movingRectangle = createSprite(200,200,20,20)
movingRectangle.shapeColor = ("yellow")

fixedBall = createSprite(400,300,20,20)
fixedBall.shapeColor = ("cyan")

movingBall = createSprite(300,300,20,20)
movingBall.shapeColor = ("cyan")
movingBall.velocityX = 6

car = createSprite(20,100,40,30);
car.shapeColor="orange";
car.velocityX = 2; 
wall = createSprite(100,100,20,50)

}
function draw(){
 
  background("blue");
   if(isTouching(movingRectangle,fixedRectangle)){
    movingRectangle.shapeColor = "red"
fixedRectangle.shapeColor = "red"
   }
   else if(isTouching(fixedBall,movingBall)){
     text("It is Touching",300,300);
     //movingBall.velocityX = 0;
   }
   
  
else{
  movingRectangle.shapeColor = "yellow"
     fixedRectangle.shapeColor = "yellow" 
   }

  movingRectangle.x = World.mouseX
  movingRectangle.y = World.mouseY

console.log(movingRectangle.x - fixedRectangle.x)
bounceOff(movingBall,fixedBall);
collide(car,wall);

  drawSprites();
}