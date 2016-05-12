var spawnMonster = function(n) {
    for( i = 0;i<n.length;i++){
    // Throw the monster somewhere on the screen randomly
    n[i].x = 64 + (Math.random() * (oldcanvas.width - 128));
    n[i].y = 64 + (Math.random() * (oldcanvas.height - 128));
    }
};
var despawnMonsters = function(n) {
    for( i = 0;i<n.length*10;i++){
      n.pop();
    }
};
var createMonsters = function() {
    if(map[mapCordsX][mapCordsY][0] === 1){
      
      //take monsters from monsterData
    }
    if(map[mapCordsX][mapCordsY][0] === 2){
      osHouseList.push(House1);
      onscreenMonster.push(monsterData[1]);
      onscreenMonster.push(monsterData[2]);
      onscreenMonster.push(monsterData[3]);
      onscreenMonster.push(monsterData[4]);
      onscreenMonster.push(monsterData[5]);
    }
    if(map[mapCordsX][mapCordsY][0] === 3){
      onscreenMonster.push(monsterData[5]);
      onscreenMonster.push(monsterData[6]);
      onscreenMonster.push(monsterData[7]);
      onscreenMonster.push(monsterData[8]);
      onscreenMonster.push(monsterData[9]);
    }
};

var createHouses = function() {
    if(map[mapCordsX][mapCordsY][7] === 0){
      
      
    }
    if(map[mapCordsX][mapCordsY][7] === 1){
      osHouseList.push(House1);
      osInnList.push(inn1);
      osShopList.push(shop1);
      console.log(shop1.x);
    }
   
};


var kill = function(i) { //index of monster
    hero.silver += onscreenMonster[i].reward;
    var temp = onscreenMonster[i];
    onscreenMonster[i]=onscreenMonster[onscreenMonster.length-1];
    onscreenMonster[onscreenMonster.length-1]=temp;
    onscreenMonster.pop();

};

var monsterSpawns = function(i) {
    oncreenMonster.push(monsterData[i]);
};


//randomise location of monster. 
var respawnMonster = function(n) {
    n.x = 64 + (Math.random() * (oldcanvas.width - 128));
    n.y = 64 + (Math.random() * (oldcanvas.height - 128));
    };


//Pause and Play
var pauseIt = function() {
  pause = true;
};

var playIt = function() {
  pause = false;
  start = true;
  heroImage.src = heroImage11.src;
  render();
  render2();
  
};


//Buttons Simulate Keyboard
var left = function() {
    leftPress = true;
};
var up = function() {
    upPress = true;
};
var right = function() {
    rightPress = true;
};
var down = function() {
    downPress = true;
};
var downOff = function() {
    downPress = false;
};
var leftOff = function() {
    leftPress = false;
};
var rightOff = function() {
    rightPress = false;
};
var upOff = function() {
    upPress = false;
};
var q = function(){
    qPress=true;
};
var qOff = function(){
    qPress=false;
};


//Calculate battle damage.
//TODO: take item bounuses into account. 
var battle = function(n) {
    var dmg = 0;
    var monDMG = (hero.atk+hero.weapon)-(n.def=n.armor);
    var times = n.hp/monDMG;
    var heroDMG = (n.attack+n.weapon)-(hero.def-hero.armor);
    dmg += times * heroDMG;
    dmg = Math.round(dmg);
    ctx.drawImage(n.img, 800, 60+480);
    ctx.fillText("Press q to countinue",720,100+480);
    ctx.fillText("You will take " + dmg + " damage", 710, 132+480);
    return dmg;
};


//Assign appropriate image background based on location. 
 var changeImg = function() {
 if (map[mapCordsX][mapCordsY][1] === 0){
        bgImage1.src = backImage15.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 1){
        bgImage1.src = backImage1.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 3){
        bgImage1.src = backImage3.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 4){
        bgImage1.src = backImage4.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 5){
        bgImage1.src = backImage5.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 2){
        bgImage1.src = backImage2.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 6){
        bgImage1.src = backImage6.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 7){
        bgImage1.src = backImage7.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 8){
        bgImage1.src = backImage8.src;
      }
      if (map[mapCordsX][mapCordsY][9] === 9){
        bgImage1.src = backImage9.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 10){
        bgImage1.src = backImage10.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 11){
        bgImage1.src = backImage11.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 12){
        bgImage1.src = backImage12.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 13){
        bgImage1.src = backImage13.src;
      }
      if (map[mapCordsX][mapCordsY][1] === 14){
        bgImage1.src = backImage14.src;
      }
};

var checkHouses = function() {
    
    for( i = 0;i<osHouseList.length;i++){
      if( osHouseList.length > 0 &&(hero.y < osHouseList[i].y+102 && hero.y > osHouseList[i].y-30+128) && (hero.x < osHouseList[i].x + 40 && hero.x > osHouseList[i].x + 20)){
          houseMsg(osHouseList[i].msg);
          hero.y += 40;
      }
    }
};

var checkInns = function() {
  for(i = 0;i<osHouseList.length;i++){
    if( osInnList.length > 0 &&(hero.y < osInnList[i].y+125 && hero.y > osInnList[i].y-30+105) && (hero.x < osInnList[i].x + 105 && hero.x > osInnList[i].x + 85)){
      innMsg(osInnList[i].msg);
      hero.hp = 100; 
      hero.y += 40;
    }
  }
};

var checkShops = function() {
  //TOFIX: Why is the door zone Everywhere?????
  for(i = 0;i<osHouseList.length;i++){
    {if( osShopList.length > 0 &&(hero.y < osShopList[i].y+125 && hero.y > osShopList[i].y-30+105) && (hero.x < osShopList[i].x + 30 && hero.x > osShopList[i].x + 10)){}
      //shopMsg(osShopList[i].msg);
      console.log("test");
      //hero.y += 40;
    }
  }
};

var houseMsg = function(m) {
    ctx.drawImage(popUp, 128, 90);
    ctx.textAlign="center"; 
    ctx.fillText(m,oldcanvas.width/2,190);

//http://stackoverflow.com/questions/4478742/html5-canvas-can-i-somehow-use-linefeeds-in-filltext

    ctx.fillText("Press Enter or the Continue button to exit.",oldcanvas.width/2,256);
    pauseIt();
};

var innMsg = function(m) {
    ctx.drawImage(popUp, 128, 90);
    ctx.textAlign="center"; 
    ctx.fillText(m,oldcanvas.width/2,190);
    ctx.fillText("Press Enter or the Continue button to exit.",oldcanvas.width/2,256);
    pauseIt();
};



