
function preload(){
  groundImage=loadImage("gground.jpg")
  runningImage=loadImage("running girl.png")
  rockImage=loadImage("rock2.png")
  rockHappy=loadImage("rock1.png")
  rockBulb=loadImage("rock3.png")
  bearImage=loadImage("bear.png")
  gameOverImage=loadImage("gameOver.png")
  endImage=loadImage("gameOver-1.png")
  girlrunning=loadSound("girl running.mp3")
}

function setup(){
createCanvas(windowWidth,windowHeight);

  ground=createSprite(600,450,200,200)
  ground.addImage(groundImage)
  ground.scale=3
girlRunning=createSprite(630,550,20,20)
  girlRunning.addImage(runningImage)
  girlRunning.debug=true
  girlRunning.setCollider("rectangle",0,0,79,250)
   bear=createSprite(100,girlRunning.y,50,50)
  bear.addImage(bearImage)
  bear.scale=0.5
  bear.visible=false
  objectGroup=new Group()
}


function draw(){
 ground.velocityY=3
 obstacle()
 if(keyDown("LEFT_ARROW")){
  girlRunning.x=girlRunning.x-1
 }
  if(keyDown("RIGHT_ARROW")){
  girlRunning.x=girlRunning.x+1
 }

 if(ground.y>600){
 	ground.y=200

 }
 if(objectGroup.isTouching(girlRunning)){
             background("black")
            console.log("hello")
            rock.addImage(rockHappy)
            girlRunning.addImage(gameOverImage)
           bear.y=girlRunning.y
            bear.visible=true
            bear.velocityX=bear.velocityX+2
            objectGroup.setVelocityYEach(0)
            girlRunning.velocityY=0
            ground.velocityY=0
            textSize(25)
            text("gameOver",200,200)
           
}
if(bear.isTouching(girlRunning)){
 gameEnd=createSprite(300,200,40,40)
 gameEnd.addImage(endImage)
 bear.velocityX=0
}
drawSprites();

}
function obstacle(){
	if(frameCount%350===0){
		rock=createSprite(Math.round(random(500,800)),200,50,50)
            rock.addImage(rockImage)
            rock.velocityY=3
            rock.lifeTime=130
            rock.scale=0.5
            rock.debug=true
            rock.depth=girlRunning.depth
            girlRunning.depth=girlRunning.depth+1
            objectGroup.add(rock)

	}
}
