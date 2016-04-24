

//Reminder: update goes before render.

//////////////////////////////////Update Method/////////////////////////////////
var battleTest = false;
var walkCount = 0;
var leftPress = false;
var rightPress = false;
var upPress = false;
var downPress =  false;
var qPress = false;
var update = function(modifier) {
houseSouth = false;
  hero.weapon = weapon1.atk;
  hero.armor = chest1.atk;

    walkCount++;
    if (walkCount === 40){
            walkCount = 0;
        }


    oldherox = hero.x;
    oldheroy = hero.y;



    //key events
    if (pause === false){
    var bushHold = map[mapCordsX][mapCordsY][1];
    if ((38 in keysDown || upPress === true) && (!(hero.x < 170  || hero.x > oldcanvas.width-212) ||
    hero.y > 15)) { // Player holding up

      if(hero.y>32 || (bushHold != 10 && bushHold != 11&& bushHold != 12&& bushHold != 2&& bushHold != 6&& bushHold != 8 && bushHold != 9)){
        hero.y -= hero.speed * modifier;
        if (walkCount < 10){
            heroImage.src = heroImage1.src;
        }
        else if (walkCount < 20){
            heroImage.src = heroImage2.src;
        }
        else if (walkCount < 30){
            heroImage.src = heroImage1.src;
        }
        else if (walkCount < 40){
            heroImage.src = heroImage3.src;

        }

        }
    }
    else if ((40 in keysDown || downPress === true) && (!(hero.x < 170  || hero.x > oldcanvas.width-212) ||
    hero.y < oldcanvas.height-100))  { // Player holding down


      if(hero.y<oldcanvas.height-96 || (bushHold != 10 && bushHold != 13&& bushHold != 14&& bushHold != 4&& bushHold != 7&& bushHold != 8 && bushHold != 9)){
        hero.y += hero.speed * modifier;
        if (walkCount < 10){
            heroImage.src = heroImage10.src;
        }
        else if (walkCount < 20){
            heroImage.src = heroImage11.src;
        }
        else if (walkCount < 30){
            heroImage.src = heroImage10.src;
        }
        else if (walkCount < 40){
            heroImage.src = heroImage12.src;
        }

        }
    }
    else if ((37 in keysDown || leftPress === true) && (!(hero.y < 140  || hero.y > 240) ||
    hero.x >25))  { // Player holding left


      if(hero.x>32 || (bushHold != 1 && bushHold != 10&& bushHold != 11&& bushHold != 14&& bushHold != 7&& bushHold != 5 && bushHold != 6)){
        hero.x -= hero.speed * modifier;
        if (walkCount < 10){
            heroImage.src = heroImage4.src;
        }
        else if (walkCount < 20){
            heroImage.src = heroImage5.src;
        }
        else if (walkCount < 30){
            heroImage.src = heroImage4.src;
        }
        else if (walkCount < 40){
            heroImage.src = heroImage6.src;
        }
      }
    }
    else if ((39 in keysDown ||rightPress === true) && (!(hero.y < 140  || hero.y > 240) ||
    hero.x <oldcanvas.width - 75)) { // Player holding right
        //12,13,3,5,6,7,8
        if(hero.x<oldcanvas.width-64 || (bushHold != 12 && bushHold != 13&& bushHold != 3&& bushHold != 5&& bushHold != 6&& bushHold != 7 && bushHold != 8)){
        hero.x += hero.speed * modifier;
        if (walkCount < 10){
            heroImage.src = heroImage7.src;
        }
        else if (walkCount < 20){
            heroImage.src = heroImage8.src;
        }
        else if (walkCount < 30){
            heroImage.src = heroImage7.src;
        }
        else if (walkCount < 40){
            heroImage.src = heroImage9.src;
        }
      }
    }
    else if (start === false && 32 in keysDown && (!(hero.y < 140  || hero.y > 240) ||
    hero.x <oldcanvas.width - 75)) { // Player holding right
       start=true;
       hero.x= oldcanvas.width/2;
       hero.y= oldcanvas.height/2;
       monster.x = 96;
       monster.y = 96;
       heroImage.src = heroImage9.src;
    }

    }
    else if(pause===true && (81 in keysDown || qPress ===true)){

        playIt();
        render();
        render2();

    }


if (pause === false){
  MonsterMove++;
  for (i = 0; i<onscreenMonster.length; i++){
    var m = onscreenMonster[i].move;
    onscreenMonster[i].MC++;
    if (onscreenMonster[i].MC <= m){
      onscreenMonster[i].x -= onscreenMonster[i].speed * modifier;
    }
    else if (onscreenMonster[i].MC <=m * 2){
     onscreenMonster[i].y += onscreenMonster[i].speed * modifier;
    }
    else if (onscreenMonster[i].MC <= m * 3){
      onscreenMonster[i].x += onscreenMonster[i].speed * modifier;
    }
    else if(onscreenMonster[i].MC <= m*4){
      onscreenMonster[i].y -= onscreenMonster[i].speed * modifier;
    }
    if(onscreenMonster[i].MC > m*4){
     onscreenMonster[i].MC=1;
    }
    if(onscreenMonster[i].x <32){
      onscreenMonster[i].MC=m*2+1;
    }
    if(onscreenMonster[i].x > oldcanvas.width-64){
      onscreenMonster[i].MC=1;
    }
    if(onscreenMonster[i].y <+32){
      onscreenMonster[i].MC=m+1;
    }
    if (onscreenMonster[i].y > oldcanvas.height-64 ){
      onscreenMonster[i].MC=m*3+1;

    }

  }


    //Map change event triggers




    if (hero.y >= 395) {
        resetSouth();
    } else if (hero.y <= 0) {
        resetNorth();
    }
    if (hero.x <= 0) {
        resetWest();
    } else if (hero.x >= 965) {
        resetEast();
    }
   changeImg();



    //a lot more to come as I get backgrounds
    // Are they touching?
  battleTest = false;
  for (i = 0; i<onscreenMonster.length; i++){
    if (hero.x <= (onscreenMonster[i].x + 32) && onscreenMonster[i].x <= (hero.x + 32) && hero.y <= (onscreenMonster[i].y + 32) && onscreenMonster[i].y <= (hero.y + 32)) {
       battleTest=true;
       hero.hp-=  battle(onscreenMonster[i]);
       kill(i);
        ++monstersCaught;
        pauseIt();

        //call battle

    }
  


}

 if(map[mapCordsX][mapCordsY][7] === 1){
 for (i = 0; i<osHouseList.length; i++){
      if(hero.y > osHouseList[i].Y+90){
          houseSouth=true;
        }
      if (hero.x <= (osHouseList[i].X + 111) && osHouseList[i].X <= (hero.x + 32) && hero.y <= (osHouseList[i].Y + 98) && osHouseList[i].Y <= (hero.y-12)) {
        hero.x = oldherox;
        hero.y = oldheroy;

      }

    }
  for (i = 0; i<osInnList.length; i++){
    if(hero.y > osInnList[i].Y+90){
      houseSouth=true;
      }
      if (hero.x <= (osInnList[i].X + 160) && osInnList[i].X <= (hero.x + 32) && hero.y <= (osInnList[i].Y + 121) && osInnList[i].Y <= (hero.y-40)) {
        hero.x = oldherox;
        hero.y = oldheroy;
      }

    }
}

}

};

//////////////////////////////////Update Method/////////////////////////////////


////////////////////// Update game objects graphics/////////////////////////////



// Draw everything
var render = function() {
   if (start === true){
   if (bgReady && monsterReady && heroReady) {
        ctx.drawImage(bgImage1, 0, 0);
        ctx.drawImage(bgImage2, 0, 0+480);
        ctx.drawImage(bgImage3, 0+988, 0);
      }

    if (houseSouth === false){
      ctx.drawImage(heroImage, hero.x, hero.y);
      if(map[mapCordsX][mapCordsY][7] === 1){
        for (i = 0; i<osHouseList.length; i++){
          ctx.drawImage(house, osHouseList[i].X, osHouseList[i].Y);
           ctx.drawImage(inn, osInnList[i].X, osInnList[i].Y);
        }
      }
    }
     if (houseSouth === true){

      if(map[mapCordsX][mapCordsY][7] === 1){
        for (i = 0; i<osHouseList.length; i++){
          ctx.drawImage(inn, osInnList[i].X, osInnList[i].Y);
          ctx.drawImage(house, osHouseList[i].X, osHouseList[i].Y);
          ctx.drawImage(heroImage, hero.x, hero.y);
        }
      }
    }



        for (i = 0; i<onscreenMonster.length; i++){
        ctx.drawImage(onscreenMonster[i].img, onscreenMonster[i].x, onscreenMonster[i].y);

        if (hero.hp <= 0){
            ctx.font = "bold 128px New Rocker";
            ctx.fillStyle = 'red';
            ctx.fillText("Game Over",220,256);
            pause=true;

        }

        }



   }



};

var render2 = function() {
  // Score
  //Intial Render?
  
    //ctx.font='72px FontAwesome';
   // ctx.fillText('\uF102',128+988,80); // up
    //ctx.fillText('\uf100',80+988,128); // left
   // ctx.fillText('\uF101',176+988,128); // right
  //  ctx.fillText('\uf103',128+988,176); //down

    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "20px New Rocker";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Enemies Slayed : " + monstersCaught, 32, 56+480);
    ctx.fillText("Cords : " + mapCordsX + "," + mapCordsY, 32, 32+480);
    ctx.fillText("HP: " + hero.hp, 32, 80+480);
    ctx.fillText("Attack: " + hero.atk, 32, 106+480);
    ctx.fillText("Weapon Bonus: " + hero.weapon, 140,106+480);
    ctx.fillText("Defence: " + hero.def, 32,130+480);
    ctx.fillText("Armor  Bonus: " + hero.armor, 140, 130+480);
    ctx.drawImage(weapon1.img,45,165+480);
    ctx.drawImage(chest1.img,97,165+480);
    ctx.drawImage(heroBImage, 730, 50+480);
  

};


/////////////////////////Update game objects graphics///////////////////////////
