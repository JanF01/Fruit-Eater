
function buySign(){
    f.html("FRUITS: "+index.fruits);
    f.style('transform','scale(1.4)');
}
function sumUpdate(){
  p5.html('<p>ACCELERATION: ' + (player.accmax*900).toFixed(2) + 'px/s<sup>2</sup>');

  p6.html('<p>SPEED: ' + floor(player.speed*30) + 'px/s');

  p7.html('<p>SIZE: ' + player.s + 'px');

  p8.html('<p>FRUITS EATEN: ' + index.fruitsc);
}

function upgradeAcc(){
  if(index.fruits>=index.acc.cost){
    if(s)sound5.play();
  index.fruits-=index.acc.cost;
  player.accmax*=1.5;
  index.acc.lvl++;
  p1.html('LEVEL '+index.acc.lvl);
  index.acc.cost+=floor(random(1,3));
  b1.html('UPGRADE <p>COST: ' + index.acc.cost + '</p>');

  b1.style('background-color','#00A010');
  p1.style('transform','scale(1.35)');
  buySign();
  nullify();
  sumUpdate();
}
else{b1.style('background-color','#F00010');nullify();if(s)sound3.play();}
}

function upgradeSpeed(){
  if(index.fruits>=index.speed.cost){
    if(s)sound5.play();
  index.fruits-=index.speed.cost;
  player.speed+=0.8;
  index.speed.lvl++;
  p2.html('LEVEL '+index.speed.lvl);
  index.speed.cost+=floor(random(1,3));

  b2.html('UPGRADE <p>COST: ' + index.speed.cost + '</p>');
  p2.style('transform','scale(1.35)');
  b2.style('background-color','#00A010');
  buySign();
  nullify();
  sumUpdate();
}
else{b2.style('background-color','#F00010');nullify();if(s)sound3.play();}
}

function upgradeSize(){
  if(index.fruits>=index.size.cost){
    if(s)sound5.play();
  index.fruits-=index.size.cost;
  player.s+=1.5;
  index.size.lvl++;
  p3.html('LEVEL '+index.size.lvl);
  index.size.cost+=floor(random(1,3));

  b3.html('UPGRADE <p>COST: ' + index.size.cost + '</p>');
  p3.style('transform','scale(1.35)');
  b3.style('background-color','#00A010');
  buySign();
  nullify();
  sumUpdate();
}
else{b3.style('background-color','#F00010');nullify();if(s)sound3.play();}
}

function unlockColor(){
  if(index.fruits>=5 && index.colors.number<5){
  if(s)sound5.play();
 index.colors.number++;
 index.fruits-=5;

  p4.style('transform','scale(1.35)');
  b4.style('background-color','#00A010');
    buySign();
    nullify();
}
else if(index.colors.number<6 && index.fruits>=20){
  index.colors.number++;
  index.fruits-=20;

   p4.style('transform','scale(1.35)');
   b4.style('background-color','#00A010');
     buySign();
     nullify();
}
else{
     b4.style('background-color','#F00010');
        nullify();
        if(s)sound3.play();
}
}

function changeColor(d){
  if(d==0){
    if(index.colors.current!=0){
          if(s)sound2.play();
      index.colors.current--;
        c.html(colors[index.colors.current][1]);
        s1.style('background-color','#009000');
        setTimeout(function(){
          s1.style('background-color','#111100');
        },500)
    }
    else{
      if(s)sound4.play();
      s1.style('background-color','#900000');
      setTimeout(function(){
        s1.style('background-color','#111100');
      },500)
    }
  }
  else{
    if(!(index.colors.current>=index.colors.number-1)){
          if(s)sound2.play();
      index.colors.current++;
        c.html(colors[index.colors.current][1]);
        s2.style('background-color','#009000');
        setTimeout(function(){
          s2.style('background-color','#111100');
        },500)
    }
    else{
        if(s)sound4.play();
      s2.style('background-color','#900000');
      setTimeout(function(){
        s2.style('background-color','#111100');
      },500)
    }
  }
}

function nullify(){
 setTimeout(function(){
  b1.style('background-color','#000008');
  b2.style('background-color','#000008');
  b3.style('background-color','#000008');
  b4.style('background-color','#000008');
},500);
setTimeout(function(){
  p1.style('transform','scale(1)');
  p2.style('transform','scale(1)');
  p3.style('transform','scale(1)');
  p4.style('transform','scale(1)');
},250);
setTimeout(function(){

f.style('transform','scale(1)');

},300);

}


function chapterChange(n){
if(n==2){
  fruits=[];
index.chapstart=true;
aside.style('transition','width 2s');
shrank();
setTimeout(function(){
  frameRate(30)
 frt.html("");
 p8.parent('frt');
 textFont(font1);
 textSize(height/2.5);
 fill(255);
 text('C',width/60,height/2);

},1700);
setTimeout(function(){
 text('CH',width/60,height/2);
 aside.style('transition','width 0.5s');
},2000);
setTimeout(function(){
 text('CHA',width/60,height/2);
},2300);
setTimeout(function(){
 text('CHAP',width/60,height/2);
},2600);
setTimeout(function(){
 text('CHAPT',width/60,height/2);
},2900);
setTimeout(function(){
 text('CHAPTE',width/60,height/2);
},3200);
setTimeout(function(){
 text('CHAPTER',width/60,height/2);
},3500);
setTimeout(function(){
 text('CHAPTER',width/60,height/2);
 textSize(height/2);
 text('II',width/2.45,height/1.1);
 nchap.style('transform','scale(1.4)');
 nchap.html('CHAPTER II: SURVIVAL');
},4000);
setTimeout(function(){
 nchap.style('transform','scale(1)');
 frameRate(60);
},4450);
setTimeout(function(){
let m = new Mob(0);
mobs.push(m);
index.spawn = true;
},4600);
setTimeout(function(){
let m = new Mob(0);
mobs.push(m);
},5000);
setTimeout(function(){
let m = new Mob(0);
mobs.push(m);
},5400);



}


}
