class Fruit{

constructor(){
  this.pos = createVector(0,0);
  this.look = 0;
  this.xdirection = 0;
  this.ydirection = 0;
}

change(){
  let xr=random(0,2);
  let yr=random(0,2);
  if(xr<1){
    this.xdirection = -1;
  }
  else{
    this.xdirection = 1;
  }
  if(yr<1){
    this.ydirection = -1;
  }
  else{
    this.ydirection = 1;
  }
    this.xdirection
    this.pos.x = random(18,width-18);
    this.pos.y = random(18,height-18);
    this.look = floor(random(0,3));
    f = select('#fruits');
    f.html('FRUITS: '+index.fruits);
}

show(){
  this.pos.x+=this.xdirection;
  this.pos.y+=this.ydirection;
  if(this.pos.x<10){
    this.xdirection = -this.xdirection;
  }
  else if(this.pos.x>width-10){
    this.xdirection = -this.xdirection;
  }
  if(this.pos.y<10){
    this.ydirection=-this.ydirection;
  }
  else if(this.pos.y>height-10){
    this.ydirection=-this.ydirection;
  }
  imageMode(CENTER);
  if(this.look==0){
    image(img1,this.pos.x,this.pos.y,28,30.5);
  }
  else if(this.look==1){
    image(img2,this.pos.x,this.pos.y,28,30.5);
  }
  else if(this.look==2){
    image(img3,this.pos.x,this.pos.y,30,30);
  }
}

cheak(){
if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y)<12+player.s/2){
 index.fruits++
 index.fruitsc++
 if(index.fruitsc==50){
   index.chapter=2;
   setTimeout(expand,300);
   frt = select('#frt');
   frt.html("");
   chapterb = createButton('CHAPTER II');
   chapterb.parent('frt');
   chapterb.mousePressed(function(){chapterChange(2)});
 }
  p8.html('<p>FRUITS EATEN: ' + index.fruitsc);
 this.change();
 if(s==true){
 sound1.play();
}
 return true;
}
return false;
}

}
