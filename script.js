///////////////////////////////////Canvases///////////////////////////////////

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var oldcanvas = {
  width: 988,
  height: 480
};
console.log(oldcanvas.height);

canvas.width = 988+250;
canvas.height = 480+250;

var start = false;
var pause = false;

var touchX=0;
var touchY=0;

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

///////////////////////////////////Canvases///////////////////////////////////

////////////////////////////////////Map Fields//////////////////////////////////

//tell the program what map to change to when the player leaves it's current area.
var mapCordsX = 1;
var mapCordsY = 1;

//to save the area code when the player is in a building
var oldMapCordsX = 0;
var oldMapCordsY = 0;

var mapXmin = 0;
var mapXmax = 2;
var mapYmin = 2;
var mapYmax = 2;



///////////////////////////////////Map Fields///////////////////////////////////

//////////////////////////////////Images////////////////////////////////////////

//Background image
var bgReady = false;
var bgImage1 = new Image();
bgImage1.onload = function() {
   bgReady = true;
};


//images for backgorunds.
        backImage1 = new Image();
        backImage3 = new Image();
        backImage4 = new Image();
        backImage5 = new Image();
        backImage2 = new Image();
        backImage6 = new Image();
        backImage7 = new Image();
        backImage8 = new Image();
        backImage9 = new Image();
        backImage10 = new Image();
        backImage11 = new Image();
        backImage12 = new Image();
        backImage13 = new Image();
        backImage14 = new Image();
        backImage15 = new Image();
        backImage1.src = "images/background1.png";
        backImage3.src = "images/background3.png";
        backImage4.src = "images/background4.png";
        backImage5.src = "images/background5.png";
        backImage2.src = "images/background2.png";
        backImage6.src = "images/background6.png";
        backImage7.src = "images/background7.png";
        backImage8.src = "images/background8.png";
        backImage9.src = "images/background9.png";
        backImage10.src = "images/background10.png";
        backImage11.src = "images/background11.png";
        backImage12.src = "images/background12.png";
        backImage13.src = "images/background13.png";
        backImage14.src = "images/background14.png";
        backImage15.src = "images/background.png"; 

bgImage1.src = "images/background.png"; // Background images

//Background image
var bgImage2 = new Image();
bgImage2.onload = function() {
   bgReady = true;
};

//Background image

var bgImage3 = new Image();
bgImage3.onload = function() {
   bgReady = true;
};

bgImage3.src = "images/Capture.PNG"; // Background images

//images for backgorunds.
bgImage2.src = "images/backgroundBottom.png"; // Background images

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
        var heroImage1 = new Image();
        var heroImage2 = new Image();
        var heroImage3 = new Image();
        var heroImage4 = new Image();
        var heroImage5 = new Image();
        var heroImage6 = new Image();
        var heroImage7 = new Image();
        var heroImage8 = new Image();
        var heroImage9 = new Image();
        var heroImage10 = new Image();
        var heroImage11 = new Image();
        var heroImage12 = new Image();
        heroImage1.src = "images/sprite01north.PNG";
        heroImage2.src = "images/sprite01FT1north.PNG";
        heroImage3.src = "images/sprite01FT2north.PNG";
	      heroImage4.src = "images/sprite01west.PNG";
	      heroImage5.src = "images/sprite01westFT1.PN.PNG";
	      heroImage6.src = "images/sprite01westFT2.PN.PNG";
  	    heroImage7.src = "images/sprite01east.PNG";
       	heroImage8.src = "images/sprite01eastFT1.PN.PNG";
        heroImage9.src = "images/sprite01eastFT2.PN.PNG";
 	      heroImage10.src = "images/sprite01southFT1.PN.PNG";
      	heroImage11.src = "images/sprite01south.PNG";
    	  heroImage12.src = "images/sprite01southFT2.PN.PNG";


//Hero Images

// Hero image

var heroBImage = new Image();
heroBImage.onload = function() {
    heroReady = true;
};
heroBImage.src = "images/sprite01south.PNG";  //Hero Images
// Enemyimage
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
    monsterReady = true;
};

monsterImage.src = "images/monster.png";     //Enemy images\

var monster2Image = new Image();
monster2Image.src = "images/orc.png";     //Enemy images\


mImg = [];
mImg[0]=monsterImage;
mImg[1]=monster2Image;

var inn = new Image();
inn.src = "images/inn1.png";

var house = new Image();
house.src = "images/house1.png";     //Enemy images\

//////////////////////////////////Images////////////////////////////////////////



////////////////////////////////Global Objects//////////////////////////////////



// Game objects
var hero = {
    speed: 256,// movement in pixels per second
    x: oldcanvas.width/2,
    y: oldcanvas.height/2,
    hp: 100,
    atk: 10 ,
    weapon: 0,
    def: 10,
    armor: 5
};




House1 = new House (200,123);
Inn1 = new Inn (320,100);
osInnList=[];
osInnList.push(Inn1);
weapon1= new Weapon (5, "images/knife1.PNG");
chest1 = new Chest (5, "images/chestplate1.PNG");
var osHouseList=[];
osHouseList.push(House1);
var monsterData = [];
var onscreenMonster = [];
monster = new Monster(80,100,20,10,0,0,0,0);
monster1 = new Monster(70,110,20,10,0,0,0,0);
monster2 = new Monster(66,105,20,10,0,0,0,0);
monster3 = new Monster(73,112,20,10,0,0,0,0);
monster4 = new Monster(90,116,20,10,0,0,0,0);
orc1 = new Monster(90,106,30,15,0,5,5,1);
orc2 = new Monster(66,125,30,15,0,5,5,1);
orc3 = new Monster(78,128,30,15,0,5,5,1);
orc4 = new Monster(74,120,30,15,0,5,5,1);
orc5 = new Monster(88,115,30,15,0,5,5,1);
monsterData.push(monster);
monsterData.push(monster1);
monsterData.push(monster2);
monsterData.push(monster3);
monsterData.push(monster4);
monsterData.push(orc1);
monsterData.push(orc2);
monsterData.push(orc3);
monsterData.push(orc4);
monsterData.push(orc5);
onscreenMonster.push(monsterData[0]);
var monstersCaught = 0;

var MonsterMove = 0;

var kill = function(i) { //index of monster
    var temp = onscreenMonster[i];
    onscreenMonster[i]=onscreenMonster[onscreenMonster.length-1];
    onscreenMonster[onscreenMonster.length-1]=temp;
    onscreenMonster.pop();

};





var monsterSpawns = function(i) {
    oncreenMonster.push(monsterData[i]);
};

////////////////////////////////Global Objects//////////////////////////////////

/////////////////////////// Handle keyboard controls////////////////////////////
var keysDown = {};

canvastest.addEventListener("touchstart", touchHandler, false);

function touchHandler(event) {
  // Get a reference to our coordinates div
  var touchY = event.touches[0].pageY;
  var touchX = event.touches[0].pageX;
  // Write the coordinates of the touch to the div
  console.log(touchX,touchY);
}

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);

/////////////////////////// Handle keyboard controls////////////////////////////



///////////////////////////////Map Methods//////////////////////////////////////





var resetNorth = function() {
    hero.y = 394;
    mapCordsY -= 1;
    despawnMonsters(onscreenMonster);
    createMonsters();

};
var resetEast = function() {
    hero.x = 0;
    mapCordsX -= 1;
    despawnMonsters(onscreenMonster);
    createMonsters();

};
var resetWest = function() {
    hero.x = oldcanvas.width-32;
    mapCordsX += 1;
    despawnMonsters(onscreenMonster);
    createMonsters();

};
var resetSouth = function() {
    hero.y = 0;
    mapCordsY += 1;
    despawnMonsters(onscreenMonster);
    createMonsters();

};


// spawnMonster the game when the player catches a monster

//map array
var map = new Array(3);
for (var i = 0; i < 10; i++) {
  map[i] = new Array(3);
}

//[monsters,bushes,rocks,water,inn,shop,tavern,house]
//tells update method what to spawn based on your map location
var mapData00 = [2,12,0,0,0,0,0,0];
var mapData01 = [2,3,0,0,0,0,0,0];
var mapData02 = [2,13,0,0,0,0,0,0];
var mapData11 = [1,0,0,0,0,0,0,0];
var mapData12 = [1,4,0,0,0,0,0,0];
var mapData10 = [1,2,0,0,0,0,0,0];
var mapData20 = [1,11,0,0,0,0,0,1];
var mapData21 = [3,1,0,0,0,0,0,0];
var mapData22 = [1,14,0,0,0,0,0,0];
map[0][0] = mapData00;
map[0][1] = mapData01;
map[0][2] = mapData02;
map[1][1] = mapData11;
map[1][2] = mapData12;
map[1][0] = mapData10;
map[2][1] = mapData21;
map[2][2] = mapData22;
map[2][0] = mapData20;

///////////////////////////////Map Methods//////////////////////////////////////



//////////////////////////////////The main game loop////////////////////////////

window.onload = function () {
var main = function() {
    var now = Date.now();
    var delta = now - then;


    update(delta / 2000);


   if(pause===false){
    render();

  if(start === true){
    render2();
    then = now;
}
}
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
spawnMonster(onscreenMonster);



main();

//////////////////////////////////The main game loop////////////////////////////

//session storage= http://www.w3schools.com/html/html5_webstorage.asp
//make sprite take full steps not half steps
// Work on Items and make house and inn DUE: 3/28/16


};
