
class Monster{

  constructor(spd,m,h,atk,w,d,ar,i){
    this.move=m;
    this.speed=spd;
    this.hp=h;
    this.attack=atk;
    this.weapon=w;
    this.def=d;
    this.armor=ar;
    this.x = 32 + (Math.random() * (oldcanvas.width - 64));
    this.y = 32 + (Math.random() * (oldcanvas.height - 64));
    this.MC = 0;
    this.img= mImg[i];
  }
}


class Weapon{

  constructor(w,img){
    this.atk=w;
    this.img = new Image();
    this.img.src = img;
  }
}


class Chest{

  constructor(w,img){
    this.def=w;
    this.img = new Image();
    this.img.src = img;
  }
}


class Headgear{

  constructor(w,img){
    this.def=w;
    this.img = new Image();
    this.img.src = img;
  }
}


class Assesory{ 

  constructor(w,d,img){
    this.atk=w;
    this.def=d;
    this.img = new Image();
    this.img.src = img;
  }
}


class House{

  constructor(x,y,m){
    this.x=x;
    this.y=y;
    this.msg = m;
    }
  }

  
class Inn{

  constructor(x,y){
    this.x=x;
    this.y=y;
    this.msg="Welcome to our in travler, Have a good rest";
    
  }
}


class Tavern{

  constructor(x,y,q){
    this.X=x;
    this.Y=y;
    this.msg = "Innkeeper: Welcome to my Tavern travler, I have a quest for you.";
    this.quest=q;
    }
  }



// class Quest{}
