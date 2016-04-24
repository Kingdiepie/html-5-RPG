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
      onscreenMonster.push(monsterData[0]);
      //take monsters from monsterData
    }
    if(map[mapCordsX][mapCordsY][0] === 2){
      onscreenMonster.push(monsterData[0]);
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



var respawnMonster = function(n) {
    n.x = 64 + (Math.random() * (oldcanvas.width - 128));
    n.y = 64 + (Math.random() * (oldcanvas.height - 128));
    };

var pauseIt = function() {
  pause = true;
};

var playIt = function() {
  pause = false;
  start = true;
};

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
    qpress=false;
};



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
