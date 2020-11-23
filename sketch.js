var rectangle,square;

function setup(){
createCanvas(1000,1000);
 rectangle = createSprite(200,200,10,20);
rectangle.shapeColor = ("yellow");

 square = createSprite(200,300,10,10);
square.shapeColor = "blue";
}

function draw(){
background("red");
square.y= mouseY;
square.x = mouseX;

if(square.x-rectangle.x<rectangle.width/2+square.width/2
  && rectangle.x-square.x<rectangle.width/2+square.width/2
  && square.y - rectangle.y<rectangle.height/2+square.height/2
  && rectangle.y - square.y<rectangle.height/2+square.height/2){
    square.shapeColor = "black";
    rectangle.shapeColor = "Pink";

    }
    else{
      square.shapeColor = "blue";
      rectangle.shapeColor = "yellow";
  }
drawSprites();
}