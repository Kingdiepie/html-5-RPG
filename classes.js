
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
    this.atk=w;
    this.img = new Image();
    this.img.src = img;
  }
}


class Headgear{

  constructor(w,img){
    this.atk=w;
    this.img = new Image();
    this.img.src = img;
  }
}


class Assesory{ 

  constructor(w,img){
    this.atk=w;
    this.img = new Image();
    this.img.src = img;
  }
}


  class House{

  constructor(x,y){
    this.X=x;
    this.Y=y;

    }
  }
  
  
class Inn{

  constructor(x,y){
    this.X=x;
    this.Y=y;
  }
}
