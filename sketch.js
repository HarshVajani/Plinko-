var gameState1=0;
var score=0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var particles = [];
var plinlos =[];
var divisions = [];

var divisionHeight = 300;

function draw() {
  background(255,255,255);  
  drawSprites();
}
function mousePressed() 
{
    if(gameState1=="end"){
        count++;
        particle=new Particle(mouseX,10,10,10);
    }

}
