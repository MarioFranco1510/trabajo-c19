var rocket,rocketImg;
var space,spaceImg;
var star,starImg,starsGroup;
var obstacle,obstacleImg,obstaclesGroup;
var gameState = "play";


function preload(){
rocketImg = loadImage("rocket1.png");
spaceImg = loadImage("space.jpg");
starImg = loadImage("star.png");
obstacleImg = loadImage("obstacle.gif");

}

function setup() {
createCanvas(400,400);

rocket = createSprite(200,350,20,20);
rocket.addImage("rocket", rocketImg);
rocket.scale = 0.15;

space = createSprite(200,200);
space.addImage("space",spaceImg);
space.velocityY = 1;

starsGroup = new Group();
obstaclesGroup = new Group();

}

function draw() {
 background(0);

 if (gameState === "play") {
  if(keyDown("left_arrow")){
    rocket.x = rocket.x - 3;
  }
  
  if(keyDown("right_arrow")){
    rocket.x = rocket.x + 3;
  }
  
  if(keyDown("up_arrow")){
    rocket.y =rocket.y -3;
  }
 if(keyDown("down_arrow")){
   rocket.y =rocket.y +3;
 }
  
  if(space.y > 350){
    space.y = 300
  }
}
if(obstaclesGroup.isTouching(rocket)){
rocket.velocity = 0;

}
if(obstaclesGroup.isTouching(rocket)){
rocket.destroy();
gameState = "end";
}



rocket.depth = space.depth;
rocket.depth +=1;

spawnobstacles();
spawnstars();


drawSprites();

if(gameState=== "end"){

fill("green");
textSize(30);
text("Game Over",200,200);
}

function spawnobstacles(){
  if(frameCount % 60 === 0 ){
  obstacle = createSprite(150,-30);
  obstacle.scale = 1;
  obstacle.x = Math.round(random(10,400));
  obstacle.addImage(obstacleImg);
  obstacle.velocityY = 5;
  obstacle.lifetime = 405;
  obstaclesGroup.add(obstacle);
  obstacle.depth = space.depth;
obstacle.depth = +1;

  }
    
  }
  
  function spawnstars(){
    if(frameCount % 60 === 0 ){
    star = createSprite(200,-50);
    star.scale = 0.025;
    star.x = Math.round(random(10,400));
    star.addImage(starImg);
    star.velocityY = 2;
    star.lifetime = 405;
    starsGroup.add(star);
    
    }
      
    }
}