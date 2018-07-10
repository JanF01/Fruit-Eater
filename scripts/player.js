var pp =[7,7,7,7,7,7,7,7,1];
class Player{

constructor(){
 this.pos = createVector(width/2-4,height/2-4);
 this.vel = createVector(0,0);
 this.acc = createVector(0,0);
 this.s = 10;
 this.accmax = 0.025;
 this.speed = 2;
 this.damage = 0;
}

update(){
  this.acc.limit(this.accmax);
  this.vel.add(this.acc);
    this.vel.limit(this.speed);
  this.pos.add(this.vel);

}
show(){
  noStroke();
  fill(colors[index.colors.current][0]);
  quad(this.pos.x-pp[0],this.pos.y-pp[1],this.pos.x+pp[2],this.pos.y-pp[3],this.pos.x+pp[4],this.pos.y+pp[5],this.pos.x-pp[6],this.pos.y+pp[7]);
  for(let i=0;i<pp.length-1;i++){
    if(pp[i]>0 && pp[i]<this.s-2){
      pp[i]-=0.28*pp[8];
    }
    else if(pp[i]<0 || pp[i]>this.s-2){
      pp[i]=this.s-2.1;
      pp[8]=-pp[8];
    }
  }
  ellipse(this.pos.x,this.pos.y,this.s,this.s);
}
applyForce(force){
  this.acc.add(force);
}
stop(d){
  if(d==1){
  //  this.vel.x.mult(0.01);
    this.acc.x=0
  }
  else{
  //  this.vel.y.mult(0.01);
    this.acc.y=0
  }
}
edges(){
  if(this.pos.x>width-this.s/2){
    this.pos.x = width-this.s/2;
    this.vel.mult(0);
  }
  if(this.pos.x<this.s/2){
    this.pos.x = this.s/2
    this.vel.mult(0);
  }
  if(this.pos.y>height-this.s/2){
    this.pos.y = height-this.s/2;
    this.vel.mult(0);
  }
  if(this.pos.y<this.s/2){
    this.pos.y = this.s/2;
    this.vel.mult(0);
  }
}
collision(){
  for(let i=0;i<thorns.length;i++){
   if(abs(this.pos.x-thorns[i].x)<thorns[i].size/2){
     if(abs(this.pos.y-thorns[i].y)<thorns[i].size*1.25){
    this.hit(width/350);
}

   }
  }
 if(index.chapter==2){
   for(let i=0;i<mobs.length;i++){
     if(abs(this.pos.x-mobs[i].pos.x)<this.s/2+4){
       if(abs(this.pos.y-mobs[i].pos.y)<this.s/2+4){
         this.hit(width/900);
       }
     }
   }
 }

 if(this.damage>0.07){
   this.damage-=0.07;

 }

}


hit(h){
  if(this.damage<width/6.5+plus-width/300){
 this.damage+=h;
 if(s)sound6.play();

 index.pulses=10*this.damage*0.01;

 }
 else{
 this.damage=width/6.5+plus;
 frameRate(0);
 }

}



}
