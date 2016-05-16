//////////////////////////////////Update Method/////////////////////////////////
var battleTest = false;
var walkCount = 0;
var leftPress = false;
var rightPress = false;
var upPress = false;
var downPress =  false;
var qPress = false;
var onePress = false;
var twoPress = false;
var threePress = false;
var fourPress = false;
var houseSouth = false;
var lvlBase = 500;
var lvlMod = 1.00;
var lvlModB = 0.25;
var expNeeded = 0.0;
var update = function(modifier) {
houseSouth = false;
hero.weapon = hero.hweapon.atk + hero.hassesory.atk;
hero.armor = hero.hchest.def + hero.hheadgear.def + hero.hassesory.def;
expNeeded = (lvlMod+(lvlModB*hero.lvl))*lvlBase;


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

    }
    else if(shopO === true && (49 in keysDown || onePress === true)){
        if (osShopList[0].item[0] !== hero.hweapon && osShopList[0].item[0].price <= hero.silver){
          hero.silver += hero.hweapon.price /2;
          hero.hweapon = osShopList[0].item[0];
          hero.silver -= osShopList[0].item[0].price;
        } 
        else if(osShopList[0].item[0].price > hero.silver){
         notEnoughSilver();
        }
    }
    else if(shopO === true && (50 in keysDown || twoPress === true)){
        if (osShopList[0].item[1] !== hero.hchest && osShopList[0].item[1].price <= hero.silver){
          hero.silver += hero.hchest.price /2;
          hero.hchest = osShopList[0].item[1];
          hero.silver -= osShopList[0].item[1].price;
        } 
        else if(osShopList[0].item[1].price > hero.silver){
         notEnoughSilver();
           
        }
    }
    else if(shopO === true && (51 in keysDown || threePress === true)){
        if (osShopList[0].item[2] !== hero.hheadgear && osShopList[0].item[2].price <= hero.silver){
          hero.silver += hero.hheadgear.price /2;
          hero.hheadgear = osShopList[0].item[2];
          hero.silver -= osShopList[0].item[2].price;
        } 
        else if(osShopList[0].item[2].price > hero.silver){
         notEnoughSilver();
        }
    }
    else if(shopO === true && (52 in keysDown || fourPress === true)){
        if (osShopList[0].item[3] !== hero.hassesory && osShopList[0].item[3].price <= hero.silver){
          hero.silver += hero.hassesory.price /2;
          hero.hassesory = osShopList[0].item[3];
          hero.silver -= osShopList[0].item[3].price;
        } 
        else if(osShopList[0].item[3].price > hero.silver){
         
         notEnoughSilver();
        }
    }

    
    
onePress = false;
twoPress = false;
threePress = false;
fourPress = false;
    
    
    
    

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
   checkHouses();
   checkInns();
   checkShops();
   checkTaverns();

    //a lot more to come as I get backgrounds
    // Are they touching?
  battleTest = false;
  for (i = 0; i<onscreenMonster.length; i++){
    if (hero.x <= (onscreenMonster[i].x + 32) && onscreenMonster[i].x <= (hero.x + 32) && hero.y <= (onscreenMonster[i].y + 32) && onscreenMonster[i].y <= (hero.y + 32)) {
       battleTest=true;
       hero.hp-=  battle(onscreenMonster[i]);
       experience(onscreenMonster[i]);
        if(map[mapCordsX][mapCordsY][0] > 100){
           bossesKilled.push(onscreenMonster[i]);
        }
        kill(i);
        ++monstersCaught;
        pauseIt();

        //call battle

    }
}

if(map[mapCordsX][mapCordsY][7] !== 0){
 for (i = 0; i<osHouseList.length; i++){
      if(hero.y > osHouseList[i].y+90){
          houseSouth=true;
        }
      if (hero.x <= (osHouseList[i].x + 111) && osHouseList[i].x <= (hero.x + 32) && hero.y <= (osHouseList[i].y + 98) && osHouseList[i].y <= (hero.y-12)) {
        hero.x = oldherox;
        hero.y = oldheroy;

      }

    }

  for (i = 0; i<osInnList.length; i++){
      if (hero.x <= (osInnList[i].x + 160) && osInnList[i].x <= (hero.x + 32) && hero.y <= (osInnList[i].y + 121) && osInnList[i].y <= (hero.y-40)) {
        hero.x = oldherox;
        hero.y = oldheroy;
      }
      for (i = 0; i<osInnList.length; i++){
      if(hero.y > osShopList[i].y+90){
      houseSouth=true;
      }
      if (hero.x <= (osShopList[i].x + 93) && osInnList[i].x <= (hero.x + 32) && hero.y <= (osInnList[i].y + 121) && osInnList[i].y <= (hero.y-40)) {
        hero.x = oldherox;
        hero.y = oldheroy;
      }
      if (hero.x <= (osTavernList[i].x + 160) && osTavernList[i].x <= (hero.x + 32) && hero.y <= (osTavernList[i].y + 100) && osTavernList[i].y <= (hero.y-40)) {
        hero.x = oldherox
        hero.y = oldheroy;
      }

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
      }
    if (houseSouth === false){
      ctx.drawImage(heroImage, hero.x, hero.y);
      if(map[mapCordsX][mapCordsY][7] !== 0){
        for (i = 0; i<osHouseList.length; i++){
          ctx.drawImage(house, osHouseList[i].x, osHouseList[i].y);
        }
        for(i = 0; i<osInnList.length; i++){
          ctx.drawImage(inn, osInnList[i].x, osInnList[i].y);
        }
        for(i = 0; i<osShopList.length; i++){
          ctx.drawImage(shop, osShopList[i].x, osShopList[i].y);
        }
        for(i = 0; i<osTavernList.length; i++){
          ctx.drawImage(tavern, osTavernList[i].x, osTavernList[i].y);
          
        }
      }
    }
     if (houseSouth === true){
      if(map[mapCordsX][mapCordsY][7] !== 0){
        for (i = 0; i<osHouseList.length; i++){
          ctx.drawImage(house, osHouseList[i].x, osHouseList[i].y);
        }
        for(i = 0; i<osShopList.length; i++){
          ctx.drawImage(shop, osShopList[i].x, osShopList[i].y);
          
        }
        for(i = 0; i<osInnList.length; i++){
          ctx.drawImage(inn, osInnList[i].x, osInnList[i].y);
          
        }
        for(i = 0; i<osTavernList.length; i++){
          ctx.drawImage(tavern, osTavernList[i].x, osTavernList[i].y);
          
        }
        }
          ctx.drawImage(heroImage, hero.x, hero.y);
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
   };
   


var render2 = function() {
  // Score
  //Intial Render?
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "20px New Rocker";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Level : " + hero.lvl, 32, 56+480);
    ctx.fillText("Experience: " + float2int(hero.exp/expNeeded *100) +"%", 140, 56+480);
    ctx.fillText("Cords : " + mapCordsX + "," + mapCordsY, 32, 32+480);
    ctx.fillText("HP: " + hero.hp, 32, 80+480);
    ctx.fillText("Silver: " + hero.silver, 140, 80+480);
    ctx.fillText("Attack: " + hero.atk, 32, 106+480);
    ctx.fillText("Weapon Bonus: " + hero.weapon, 140,106+480);
    ctx.fillText("Defence: " + hero.def, 32,130+480);
    ctx.fillText("Armor  Bonus: " + hero.armor, 140, 130+480);
    ctx.drawImage(hero.hweapon.img,45,165+480);
    ctx.drawImage(hero.hchest.img,97,165+480);
    ctx.drawImage(hero.hheadgear.img,149,165+480);
    ctx.drawImage(hero.hassesory.img,201,165+480);
    ctx.drawImage(heroBImage, 730, 50+480);
  

};


/////////////////////////Update game objects graphics///////////////////////////
