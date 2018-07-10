var rotation = 1;
var p =[7,7,7,7,7,7,7,7,1];
class Mob{

constructor(z){
  if(z){
    if(player.pos.x<=width/2 && player.pos.y>height/2){
      this.pos = createVector(random(20,width/4),random(height*0.75,height-20));
    }
    else if(player.pos.x>width/2 && player.pos.y>=height/2){
      this.pos = createVector(random(width*0.75,width-20),random(height*0.75,height-20));
    }
    else if(player.pos.x>width/2 && player.pos.y<=height/2){
      this.pos = createVector(random(width*0.75,width-20),random(20,height*0.25));
    }
    else if(player.pos.x<=width/2 && player.pos.y<height/2){
      this.pos = createVector(random(20,width/4),random(20,height*0.25));
    }
  }
  else
  this.pos = createVector(random(width/2-50,width/2+50),random(height/2-50,height/2+50));

  this.vel = createVector(0,0);
  this.speed = random(1.3,4.3);
  this.turbo = 0;
  this.c = color(random(80,255),random(80,255),random(80,255));
}


show(){
  fill(this.c);
  noStroke();
  rectMode(CENTER);
    quad(this.pos.x-p[0],this.pos.y-p[1],this.pos.x+p[2],this.pos.y-p[3],this.pos.x+p[4],this.pos.y+p[5],this.pos.x-p[6],this.pos.y+p[7]);
    for(let i=0;i<p.length-1;i++){
      if(p[i]>0 && p[i]<7.1){
        p[i]-=0.1*p[8];
      }
      else if(p[i]<0 || p[i]>7.1){
        p[i]=7;
        p[8]=-p[8];
      }
    }
}

move(){
 let dist = createVector(player.pos.x,player.pos.y);
 dist.sub(this.pos);
 dist.setMag(1);
 dist.rotate(random(-0.03,0.03));
 if(random(0,1)<0.01){
   if(this.speed<3 && this.turbo<1.3){
   this.turbo+=2;
 }
 else if(this.speed>3 && this.turbo>-1.5){
   this.turbo-=2;
 }
 }
 dist.mult(this.speed+this.turbo-index.colors.number/5-player.acc.mag());
 if(this.turbo>0) this.turbo-=0.005;
 else if(this.turbo<0) this.turbo+=0.05;
 this.pos.add(dist);


}


}
