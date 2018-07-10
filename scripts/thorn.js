class Thorn{

constructor(){
  this.y = random(-height/1.5,-width/50);
  this.x = random(20,width-20);
  this.size = random(width/50,width/30);
  this.speed = 2;
}

show(){

fill(50*this.speed,60,150,230);
noStroke();
ellipse(this.x,this.y,this.size,this.size*2.5);

}

move(){
  this.y+=this.speed;
  if(this.y>width+this.size){
      this.y=random(-100,-50);
      this.x=random(this.size/2,width-this.size/2);
        this.size = random(width/50,width/30);
  }
}








}
