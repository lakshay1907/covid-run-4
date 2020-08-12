// variable for player
var player;
//variables for groups of non- playing characters
var maskGroup;
var sanitizerGroup;
var glovesGroup;
var houseGroup;
var washHandsGroup;
var peopleGroup;
var covidGroup;
var flagGroup;
var appsGroup;
// variable for initialzing score with 0
var scores= 0;
// variable for initialzing life with 3
var life =3;
// variable for changing gameState
var gameState= "start";
// variabke for mask image
var mask1;
// variable for sanitizer image
var sanitizer1;
// variable for gloves image
var gloves1;
// variable for house image
var house1;
// variable for covid image
var covid1
// variable for wash hands image
var washHands1;
//variable for people image
var people1;
// variable for apps image
var apps1;
// variable for flag image
var flag1;
// variable for vaccine image
var vaccine1;
// time variable for frame count
var time = 15;
// variable for player image
var player1;
// variable for life image
var heart;
// variable for score for frame count
var timeScore= 15;

function preload(){
  // loading mask image in mask 1 variable
  mask1 = loadImage("masksketch.png"); 
  // loading sanitizer image in sanitizer 1 variable
  sanitizer1 = loadImage("sanitizersketch.png");
  // loading gloves image in gloves 1 variable
  gloves1 = loadImage("glovesketch.png");
  // loading house image to house 1 variable
  house1 = loadImage("housesketch.png");
  // loading covid image to covid1 variable
  covid1 = loadImage("covidsketch.png");
  // loading wash hands image to washHands1 variable
   washHands1= loadImage("wash hands sketch.png");
   // loading people image to people1 variable
   people1= loadImage("people sketch (1).png");
   // loading apps image to apps1 variable
   apps1 = loadImage("tiktoksketch.png");
   // loading flag image to flag1 variable
   flag1 = loadImage("chineseflag.png");
   // loading vaccine image to vaccine1 variable
   vaccine1 = loadImage("vaccine sketch (1).png");
   // loading player image to player 1 variable
   player1= loadImage("player sketch.png");
   // loading heart image to heart variable
   heart= loadImage("heart.png");
   

}
function setup() {
  //creating canvas for the game
  createCanvas(800,800);
  f1=  new Form();
  //drawing player sprite
  player= createSprite(400,800,30,30);
  
  
  // adding player image to player variable
  player.addImage("player",player1);
  player.setCollider('rectangle',0,-290,200,10);
  player.debug= true;
  // scaling player image
  player.scale= 0.3;
  player.visible= false;
    //  making groups of non- playing characters
  maskGroup = new Group();
  sanitizerGroup= new Group();
  glovesGroup= new Group();
  houseGroup = new Group();
  washHandsGroup= new Group();
  peopleGroup= new Group();
  covidGroup= new Group();
  flagGroup= new Group();
  appsGroup= new Group();
  //appsGroup.setColliderEach("rectangle",0,0,1,1);
 // flagGroup.setColliderEach("rectangle",0,0,1,1);
 // peopleGroup.setColliderEach("rectangle",0,0,1,1);
 // covidGroup.setColliderEach("rectangle",0,0,1,1);
}
function draw() {
  //changing background color to black
  background("skyblue");
  if(gameState=="start"){
       f1.display();
       console.log("in start state");

  }
  // displaying life
  //text(life,400,500);
  //text(time,600,200);
  // gameState play functioning
  if(gameState=="play"){
    console.log(life);
    player.visible= true;
    // changing text size
  textSize(190);
  // displaying score
  text(scores,350,400);
  // changing text Size to 20 pixels
  textSize(20);
    // conditional programming for 3 lives
    if(life==3){
      // adding image to every life
      image(heart,20,20,80,50);
      image(heart,50,20,80,50);
      image(heart,80,20,80,50);

    }
    else if(life==2){
      image(heart,20,20,80,50);
      image(heart,50,20,80,50);
    }
    else if(life==1){
      image(heart,20,20,80,50);
    }
  // displaying non-playing characters
  mask();
  sanitizer();
  gloves();
  house();
  washHands();
  people();
  covid();
  flag();
  apps();
  // conditional statement for increasing score when positive characters touch player
  if(maskGroup.isTouching(player)||sanitizerGroup.isTouching(player)||glovesGroup.isTouching(player)
  ||houseGroup.isTouching(player)||washHandsGroup.isTouching(player)){
      //timeScore= timeScore-1;
      scores= scores+1;
      
      
  }
  
  // conditional statement for decreasing life when negative characters touch player
  if(peopleGroup.isTouching(player)||covidGroup.isTouching(player)||flagGroup.isTouching(player)
  ||appsGroup.isTouching(player)){
    time= time-1;
    
    if(life>0 ){
      life= life-1;
      time= 15;
      
    }
   }
   // conditional statement for ending game when life becomes 0
  if(life==0){
    gameState= "over";
  }
}
  //conditional statement for destroying everything when gameState is end 
  if(gameState=="over"){
    // changing text size
  textSize(190);
  // displaying score
  text(scores,350,400);

  // changing text Size to 20 pixels
  textSize(20);
       maskGroup.destroyEach();
     sanitizerGroup.destroyEach();
     houseGroup.destroyEach();
     washHandsGroup.destroyEach();
     glovesGroup.destroyEach();
     peopleGroup.destroyEach();
     appsGroup.destroyEach();
     flagGroup.destroyEach();
     covidGroup.destroyEach();
     if(scores<50){
      text('You are not aware about Covid-19',240,450)
      text('Press the yellow button to restart the game',210,500);
    
     }
}
  // code for player to move right and left
  player.x= mouseX;
  // displaying sprites
  drawSprites();
}
  // functions of non- playing characters
  // function for mask
function mask(){
   // displaying mask after every 150 frameCount
  if(frameCount%150==0){
      // variable for creating mask
      var m = createSprite(300,0,20,20);
      // adding mask image to m variable
      m.addImage("m",mask1);
      // scaling mask according to screen size
      m.scale= 0.1;
      // Keeping mask's x position random
      m.x = random(20,775);
      // Keeping mask's y velocity random
      m.velocityY = random(4,8);
      //m.shapeColor= "green";
      // setting mask's lifetime 
      m.lifetime= 800/m.velocityY;
      // adding mask to mask Group
      maskGroup.add(m);
     
  }
  maskGroup.setColliderEach("rectangle",0,0,10,10);
}
 // function for sanitizer
function sanitizer(){
  // displaying sanitizer after every 300 frame Count
  if(frameCount%300==0){
    // variable for creating sanitizer
      var s = createSprite(230,0,20,20);
      // adding sanitizer image to s variable
      s.addImage("s",sanitizer1);
      // scaling sanitizer according to screen size
      s.scale= 0.5;
      //keeping sanitizer's x position random
      s.x = random(20,775);
      // keeping sanitizer's y velocity random
      s.velocityY = random(4,8);
      //s.shapeColor= "green";
      // setting sanitizer's lifetime
      s.lifetime= 800/s.velocityY;
      // adding sanitizer to sanitizer group
      sanitizerGroup.add(s);
  }
  sanitizerGroup.setColliderEach("rectangle",0,0,10,10);
}
   //function for gloves
function gloves(){
  // displaying gloves after every 250 frameCount
  if(frameCount%250==0){
      // variable for creating gloves Sprite
      var g = createSprite(300,0,20,20);
      // adding gloves image to g variable
      g.addImage("g",gloves1);
      // scaling gloves according to screen size
      g.scale= 0.2;
      // keeping gloves' x position random
      g.x = random(20,775);
      //keeping gloves' y velocity random
      g.velocityY = random(4,8);
      //g.shapeColor= "green";
      // setting gloves lifetime
      g.lifetime= 800/g.velocityY;
      // adding glaves to gloves group
      glovesGroup.add(g);
  }
  
  glovesGroup.setColliderEach("rectangle",0,0,10,10);
}
// function for house
function house(){
  // displaying house after every 150 frameCount
  if(frameCount%150==0){
    // variable for creating house Sprite
      var h = createSprite(300,0,20,20);
      // adding house image to h variable
      h.addImage("h",house1);
      //scaling house image according to screen size
      h.scale= 0.1;
      // keeping house x position random
      h.x = random(20,775);
      // keeping house y velocity random
      h.velocityY = random(4,8);
      //h.shapeColor= "green";
      // setting house lifetime
      h.lifetime= 800/h.velocityY;
      // adding house to house Group
      houseGroup.add(h);
  }
  houseGroup.setColliderEach("rectangle",0,0,10,10);
}
// function for wash hands
function washHands(){
  // displaying wash hands after every 220 framecount
  if(frameCount%220==0){
     // variable for creating wash hands sprite
      var w = createSprite(300,0,20,20);
      // adding wash hands image to w variable
      w.addImage("w",washHands1);
      //scaling wash hands image according to screen size
      w.scale=0.1;
      // keeping wash hands x position random
      w.x = random(20,775);
      // keeping wash hands y velocity random
      w.velocityY = random(4,8);
      //w.shapeColor= "green";
      // setting wash hands lifetime
      w.lifetime= 800/w.velocityY;
      // addimg wash hands sprite to wash hands group
      washHandsGroup.add(w);
  }
  washHandsGroup.setColliderEach("rectangle",0,0,10,10);
}
 // function for people
function people(){
   // displaying people after every 200 frameCount
  if(frameCount%200==0){
    //variable for people sprite
      var p = createSprite(300,0,20,20);
      
      //adding people image to p variable
      p.addImage("p",people1); 
      //scaling people according to screen size
      p.scale= 0.2;
      // setting people x position to random
      p.x = random(0,800);
      // setting people y velocity to random
      p.velocityY = random(4,8);
      p.shapeColor= "red";
      // setting people lifetime
      p.lifetime= 800/p.velocityY;
      // adding people sprite to people group
      peopleGroup.add(p);
  }
      peopleGroup.setColliderEach("rectangle",0,0,10,10);
}
//function for covid
function covid(){
  // displaying covid after every 100 framecount
  if(frameCount%100==0){
    //variable for covid sprite
      var c = createSprite(300,0,20,20);
      
      // adding covid image to c variable
      c.addImage("c",covid1);
      // scaling covid image according to screen size
      c.scale= 0.1;
      //  setting covid x position to random
      c.x = random(20,775);
      // setting covid y velocity to random
      c.velocityY = random(4,8);
      //c.shapeColor= "red";
      // setting lifetime for covid
      c.lifetime= 800/c.velocityY;
      // adding covid sprite to covid group
      covidGroup.add(c);
  }
  covidGroup.setColliderEach("rectangle",0,0,10,10);
}
//function for flag
function flag(){
     //displaying flag afetr every 300 framecount
  if(frameCount%300==0){
       //variable for flag sprite
      var f = createSprite(300,0,20,20);
      
      // adding flag image to f variable
      f.addImage("f",flag1);
      // scaling flag image according to screen size
      f.scale= 0.2;
      // setting flag x position to random
      f.x = random(0,800);
      // setting flag y velocity to random
      f.velocityY = random(4,8);
      //f.shapeColor= "red";
      // setting lifetime for flag
      f.lifetime= 800/f.velocityY
      // adding flag sprite to flag group
      flagGroup.add(f);
  }
  flagGroup.setColliderEach("rectangle",0,0,10,10);
}
// funcition for apps
function apps(){
      // displaying apps after every 170 framecount
  if(frameCount%170===0){
    // variable for apps sprite
      var a = createSprite(300,0,20,20);
      
     // adding apps image to a variable
     a.addImage("a",apps1);
     // scaling apps image according to screen size
     a.scale= 0.3;
      // setting apps x position to random
      a.x = random(0,800);
      // setting apps y velocity to random
      a.velocityY = random(4,8);
      a.shapeColor= "red";

      // setting apps lifetime
      a.lifetime= 800/a.velocityY
      // adding apps sprite to apps group
      appsGroup.add(a);
  }
  appsGroup.setColliderEach("rectangle",0,0,10,10);
}
function keyPressed(){
    if(keyCode===32 && gameState=== "over"){
        gameState= "play";
        life=3;
        scores=0;
    }
    
}
