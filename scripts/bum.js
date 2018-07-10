class Bum{

constructor(){
  this.x = 100;
  this.y = 100;
  this.s = 0;
  this.v = 0;
  this.timer = 0;
  this.fruit = 0;
}

show(){
  fill(30,240,30,this.v);
  noStroke();
  ellipse(this.x,this.y,this.s,this.s);
}

larger(){
  if(this.timer>0){
  this.v+=3;
  this.s+=4;
  this.timer--;
  this.x=player.pos.x;
  this.y=player.pos.y;
  f.style('transform','scale(1.4)');
  setTimeout(function(){
f.style('transform','scale(1)');
  },500)  
}
else{
  this.v = 0;
  this.s = 0;
}
}

place(x,y,i){
  this.x = x;
  this.y = y;
  this.timer = 15;
  this.fruit = i;
}

cheak(){

}



}
