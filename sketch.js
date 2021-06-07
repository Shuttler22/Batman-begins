const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops = []
var maxDrops =100;

function preload(){
    
}

function setup(){
   createCanvas(400, 1200)
   engine = Engine.create();
   world = engine.world;


  
       
   Engine.run(engine)
    
}

function draw(){
    background(0)

    Engine.update(engine)
   createDrops();
   drawSprites();

   
}   
function createDrops(){
   
    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drops(random(0, 400), random(0, 400), 10 ) )
        drops[i].display()
        drops[i].update()
    
}
}
   





