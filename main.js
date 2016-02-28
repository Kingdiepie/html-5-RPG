
////////////////////////////////////Canvases////////////////////////////////////

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 988;
canvas.height = 480;
//I need to work on resizeing it this weekend
document.body.appendChild(canvas);

///////////////////////////////////Canvases/////////////////////////////////////


////////////////////////////////////Map Fields//////////////////////////////////

//tell the program what map to change to when the player leaves it's current area. 
var mapCordsX = 1;
var mapCordsY = 1;

//to save the area code when the player is in a building
var oldMapCordsX = 0;
var oldMapCordsY = 0;



///////////////////////////////////Map Fields///////////////////////////////////



//////////////////////////////////Images////////////////////////////////////////

//Background image
var bgReady = false;
var bgImage1 = new Image();
bgImage1.onload = function() {
   bgReady = true;
};


//images for backgorunds. 
bgImage1.src = "images/background.png"; // Background images



// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
heroImage.src = "images/sprite01south.png";  //Hero Images


// Enemyimage
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";     //Enemy images\


//////////////////////////////////Images////////////////////////////////////////



////////////////////////////////Global Objects//////////////////////////////////



// Game objects
var hero = {
    speed: 256,// movement in pixels per second
    x: canvas.width/2,
    y: canvas.height/2,
    //hp: 100
    //atk: 10 
    //weapon: 0
    //def: 10
    //armor: 5
};
var monster = {
    speed: 64
    //hp: 20
    //atk: 15
    //weapon: 0
    //def: 20
    //armor: 0
     
};
var monstersCaught = 0;

var goblin1 = 0;

////////////////////////////////Global Objects//////////////////////////////////



/////////////////////////// Handle keyboard controls////////////////////////////
var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);

/////////////////////////// Handle keyboard controls////////////////////////////



///////////////////////////////Map Methods//////////////////////////////////////
var resetNorth = function() {
    hero.y = 440;
    mapCordsY -= 1;
};
var resetEast = function() {
    hero.x = 0;
    mapCordsX -= 1;
};
var resetWest = function() {
    hero.x = canvas.width;
    mapCordsX += 1;
};
var resetSouth = function() {
    hero.y = 0;
    mapCordsY += 1;
};


// spawnMonster the game when the player catches a monster
var spawnMonster = function() {
    
    // Throw the monster somewhere on the screen randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
    if (monster.x>900 || monster.x < 80){
      spawnMonster();
    }
    if (monster.y>390|| monster.y < 80){
       spawnMonster();
    }
};

//map array
var map = new Array(3);
for (var i = 0; i < 10; i++) {
  map[i] = new Array(3);
}
map[0][0]=  "images/background.png";
map[0][1] = "images/background.png";
map[0][1] = "images/background.png";
map[1][1] = "images/background.png";
map[1][2] = "images/background.png";
map[1][0] = "images/background.png";
map[2][1] = "images/background.png";
map[2][0] = "images/background.png";
map[2][2] = "images/background.png";

///////////////////////////////Map Methods//////////////////////////////////////

//////////////////////////////////Update Method/////////////////////////////////

var update = function(modifier) {
    goblin1++;
    //key events
    if (38 in keysDown) { // Player holding up
        hero.y -= hero.speed * modifier;
        heroImage.src = "images/sprite01north.PNG";
    }
    if (40 in keysDown) { // Player holding down
        hero.y += hero.speed * modifier;
        heroImage.src = "images/sprite01south.PNG";
    }
    if (37 in keysDown) { // Player holding left
        hero.x -= hero.speed * modifier;
        heroImage.src = "images/sprite01west.PNG";
    }
    if (39 in keysDown) { // Player holding right
        hero.x += hero.speed * modifier;
        heroImage.src = "images/sprite01east.PNG";
    }
    
    
    
    
    
    if (goblin1 < 20){
      monster.x -= monster.speed * modifier;
    }
    else if (goblin1 <40 ){
      monster.x += monster.speed * modifier;
    }
    else if (goblin1 < 60){
      monster.y -= monster.speed * modifier;
    }
    else {
      monster.y += monster.speed * modifier;
    }
    
  
   
    if(goblin1 > 80){
      goblin1=0;
    }
      
  
    //Map change event triggers
    if (hero.y >= 440) {
        resetSouth();
    } else if (hero.y <= 0) {
        resetNorth();
    }
    if (hero.x <= 0) {
        resetWest();
    } else if (hero.x >= 988) {
        resetEast();
    }
    
    //map change events
    
    bgImage1.src = map[mapCordsY][mapCordsX];
    
    //a lot more to come as I get backgrounds    
    // Are they touching?
    if (
        hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32) && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)) {
        ++monstersCaught;
        spawnMonster();
    }

};

//////////////////////////////////Update Method/////////////////////////////////

//Reminder: update goes before render. 

////////////////////// Update game objects graphics/////////////////////////////



// Draw everything
var render = function() {
   if (bgReady && monsterReady && heroReady) {
        ctx.drawImage(bgImage1, 0, 0);
        ctx.drawImage(heroImage, hero.x, hero.y);
        ctx.drawImage(monsterImage, monster.x, monster.y);
   }
    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Enemies Slayed : " + monstersCaught, 32, 32);
    
};

/////////////////////////Update game objects graphics///////////////////////////

//////////////////////////////////The main game loop////////////////////////////
var main = function() {
    var now = Date.now();
    var delta = now - then;
    
    update(delta / 1000);
    
    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
spawnMonster();
main();

//////////////////////////////////The main game loop////////////////////////////




//////////////////////////////////comments//////////////////////////////////////



//Notes:
//Only change one cords when going off of the map
//TO select right  backorund I can have varibles for map cords change when I leave the map
//example: resetSouth ycords -= 1 
//Then is just need to call a function the selects the map I need based off of the cords.
//That solves how I can get different backround but I still need to solve how I can make the players interect with things on the background, souch as obsticles and building that they can enter is certain places 
//
//Okay me, so for spawnning houses on a cordninate on the map, I can split the map into sectors and 
//
//
//Check Notebook for Todo_List
//



