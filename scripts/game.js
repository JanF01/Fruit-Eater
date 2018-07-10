
var player;
var p1,p2,p3,p4,p5,p6,p7,p8,f,b1,b2,b3,b4,b5,s1,s2,c,audio,frt;
var chapterb;
var nchap;
var s = null;
var index = {
 acc: {
 lvl: 1,
 cost: 1,
},
 speed: {
 lvl: 1,
 cost: 1,
},
 size: {
 lvl: 1,
 cost: 1,
},
 colors: {
  current: 0,
  number: 1,
},
 fruits: 0,
 fruitsc: 0,
 chapter: 1,
 chapstart: false,
 spawn: false,
 pulse: 200,
 pulses: 2,
}
var img1,img2,img3;
var font1;
var sound1,sound2,sound3,sound4,sound5,sound6;
var fruits = [];
var mobs = [];
var thorns = [];
var aside,section;
var colors = []
var exp;
var plus;

function preload(){
  img1 = loadImage("pics/fruit_1.png");
  img2 = loadImage("pics/fruit_2.png");
  img3 = loadImage("pics/fruit_3.png");
  font1 = loadFont("fonts/DoHyeon-Regular.ttf");
  sound1 = loadSound("sounds/eat.wav");
  sound2 = loadSound("sounds/upgrade.wav");
  sound3 = loadSound("sounds/red.wav");
  sound4 = loadSound("sounds/red2.wav");
  sound5 = loadSound("sounds/unlock.wav");
  sound6 = loadSound("sounds/hit.wav");
}

function setup(){
let canvas = createCanvas(windowWidth/1.4,windowWidth/2.25);
pixelDensity(1);
frameRate(60);
canvas.parent('g');

background(255);

player = new Player();

for(let i=0;i<3;i++){
let fruit = new Fruit();
fruits.push(fruit);
fruits[i].change();
}

exp = new Bum();

t = new Thorn();

thorns.push(t);



f = select('#fruits');



colors[0] = [color(255,255,255),'WHITE'];
colors[1] = [color(240,80,110),'RUBY'];
colors[2] = [color(10,255,220),'BLUE'];
colors[3] = [color(140,10,240),'VIOLET'];
colors[4] = [color(110,190,10),'GREEN'];
colors[5] = [color(180,80,220),'RAINBOW',0];

c = select('#cname');



b1 = createButton('UPGRADE <p>COST: ' + index.acc.cost + '</p>');
b1.parent('upgrade1');
p1 = createP('LEVEL ' + index.acc.lvl);
p1.parent('upgrade1');
b1.mousePressed(upgradeAcc);

b2 = createButton('UPGRADE <p>COST: ' + index.speed.cost + '</p>');
b2.parent('upgrade2');
p2 = createP('LEVEL ' + index.speed.lvl);
p2.parent('upgrade2');
b2.mousePressed(upgradeSpeed);

b3 = createButton('UPGRADE <p>COST: ' + index.size.cost + '</p>');
b3.parent('upgrade3');
p3 = createP('LEVEL ' + index.size.lvl);
p3.parent('upgrade3');
b3.mousePressed(upgradeSize);

b4 = select('#ub');
b4.mousePressed(unlockColor);
p4 = select('#cpanel');
s1 = select('#s1');
s2 = select('#s2');
s1.mousePressed(function(){changeColor(0)});
s2.mousePressed(function(){changeColor(1)});

b5 = select('#sum');
p5 = createP();
p5.parent('sum');
p6 = createP();
p6.parent('sum');
p7 = createP();
p7.parent('sum');
p8 = createP();
p8.parent('frt');
sumUpdate();



aside = select('aside');
section = select('section');
nchap = select('#nchap');
nchap.html("CHAPTER I: UPRISING");

audio = select('#audio');

aside.mouseOver(expand);
aside.mouseOut(shrank);
audio.mousePressed(sound);
}

function sound(){
  if(s==null){
    s=true;
  setTimeout(function(){
    getAudioContext().resume();
    audio.style('background-image',"url(https://png.icons8.com/metro/1600/high-volume.png)");
  },100);
}
else if(s){
   s = !s;
   audio.style('background-image',"url(https://png.icons8.com/metro/1600/no-audio.png)");
}
else if(!s){
  s = !s;
  audio.style('background-image',"url(https://png.icons8.com/metro/1600/high-volume.png)");
}

}
function expand(){


 aside.style('position','absolute');
 section.style('margin-left',"25%");
 aside.style('width','35%');
 if(!index.chapstart){
 frameRate(0);
}
}
function shrank(){
  if(index.chapter==1 || index.chapstart){
  aside.style('position','static');
 aside.style('width','25%');
  frameRate(60);
}
}

function draw(){

 player.update();
 player.edges();

if(index.chapter==1){
for(let i=0;i<fruits.length;i++){
fruits[i].show();
 if(fruits[i].cheak()){
   exp.place(player.pos.x,player.pos.y,i);
 }
 if(index.fruitsc/3>thorns.length-1){
   let t = new Thorn();
   thorns.push(t);
   for(let i=0;i<thorns.length;i++){
     thorns[i].speed+=0.3*width/1200;
   }
 }
}

  exp.larger();
  exp.show();

}
rectMode(CORNER);
fill(0,61.75);
rect(0,0,width,height);
 player.show();
if(index.spawn){

    if(random(0,1)<0.012){
        if(mobs.length<20){
      let m = new Mob(1);
      mobs.push(m);
    }
    else{
      mobs[floor(random(0,20))] = new Mob(1);
    }
  }
for(let i=0;i<mobs.length;i++){
  mobs[i].move();
  mobs[i].show();
}


}




if(index.colors.current==5){
  if(colors[5][2]>40){
    colors[5][0] = color(random(40,255),random(40,255),random(40,255));
    colors[5][2]=0;
  }
  colors[5][2]++;
}

for(let i=0;i<thorns.length;i++){
  thorns[i].move();
  thorns[i].show();
}

plus = index.size.lvl*width/40;

player.collision();
if(index.pulse<255-index.pulses){
  index.pulse+=index.pulses;
}
if(index.pulse>255-index.pulses || index.pulse<70){
  index.pulses = -index.pulses;
}


fill(0,150);
stroke(255);
strokeWeight(1);
rectMode(CENTER);
rect(width/2,height*0.92,width/6.5+plus,height*0.030,100);
rectMode(CORNER);
fill(207, 41, 41,index.pulse);
noStroke();
rect(width/2.36-plus/2,height*0.905,width/6.5+plus-player.damage,height*0.03,100);

if(index.pulses>2)
index.pulses-=0.02;

console.log(index.pulse);
}



function keyPressed(){
  let v = createVector(0,0);

  if(keyCode==65 || keyCode==37){
    v.x = -player.accmax;
    v.y = 0;
    player.applyForce(v);
  }
  else if(keyCode==68 || keyCode==39){
    v.x = player.accmax;
    v.y = 0;
    player.applyForce(v);
  }
  else if(keyCode==87 || keyCode==38){
    v.x = 0;
    v.y = -player.accmax;
    player.applyForce(v);
  }
  else if(keyCode==83 || keyCode==40){
    v.x = 0;
    v.y = player.accmax;
    player.applyForce(v);
  }

}


function keyReleased(){
  let v = createVector(0,0);

  if(keyCode==65 || keyCode==37){
    player.stop(1);
  }
  else if(keyCode==68 || keyCode==39){
    player.stop(1);
  }
  else if(keyCode==87 || keyCode==38){
    player.stop(2);
  }
  else if(keyCode==83 || keyCode==40){
    player.stop(2);
  }

}
