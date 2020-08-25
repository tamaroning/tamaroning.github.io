void setup() {
  size(700, 700);
  background(0);
  noStroke();
  fill(255);
  x=200;
  y=400;
  vy=0;
  vx=0;
  ay=0;
  ax=0;
  d=60;
}

float x;
float y;
float vy;
float vx;
float ay;
float ax;
int csrx,csry;
int d=60;
int muki=-1;//-1:left 1:right

int blkcnt=0;
int blkkind[]= new int[500];
int blkx[]=new int[500];
int blky[]=new int[500];

float groundy=500;

void draw() {
  background(0,0,0);
  
  //ground
  fill(0,128,0);
  rect(0,500+d/2,700,700);
  fill(200,200,200);
  ellipse(500,100,50,50);
  
  if(keyPressed){
    if(key=='a'){vx=-3;muki=-1;}
    if(key=='d'){vx=3;muki=1;}
    if(key=='w'){vy=-3;}
    if(key=='s'){vy=3;}
  }
  
  //move
  x+=vx;
  vy+=ay;
  y+=vy;
  vx=0;
  vy=0;
  
  csrx=(int)x+muki*60;
  csry=(int)y;
  if(y>500){
    y=500;
    vy=0;
  }
  
  drawblk();
  drawme();
}

void mouseClicked(){
  blkx[blkcnt]=csrx-csrx%60;
  blky[blkcnt]=csry-csry%60;
  if(mouseButton==LEFT){blkkind[blkcnt]=1;}
  if(mouseButton==RIGHT){blkkind[blkcnt]=2;}
  blkcnt++;
}

void drawme(){
  fill(227,199,0);
  ellipse(x,y,d,d);
  fill(0);
  ellipse(x-2,y-5,3,9);
  ellipse(x+8,y-5,3,9);
  fill(255,0,0);
  ellipse(x+3,y+10,26,10);
  
  fill(255);
  ellipse(csrx,csry,15,15);

}

void drawblk(){
  for(int i=0;i<blkcnt;i++){
    
    if(blkkind[i]==1)fill(128,128,128);
    if(blkkind[i]==2)fill(0,128,0);
    
    stroke(40,40,40);
    rect((float)blkx[i],(float)blky[i],60,60);
  }
  noStroke();
}
