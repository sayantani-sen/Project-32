const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12;
var block13, block14, block15, block16;

var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var polygon, polygonImg;

var slingshot;

var score = 0;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,650);

    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(487,590,250,10);
    stand2 = new Ground(810,430,190,10);

    block1 = new Block(400,565,30,40);
    block2 = new Block(430,565,30,40);
    block3 = new Block(460,565,30,40);
    block4 = new Block(490,565,30,40);
    block5 = new Block(520,565,30,40);
    block6 = new Block(550,565,30,40);
    block7 = new Block(580,565,30,40);

    block8 = new Block(430,525,30,40);
    block9 = new Block(460,525,30,40);
    block10 = new Block(490,525,30,40);
    block11 = new Block(520,525,30,40);
    block12 = new Block(550,525,30,40);

    block13 = new Block(460,485,30,40);
    block14 = new Block(490,485,30,40);
    block15 = new Block(520,485,30,40);

    block16 = new Block(490,445,30,40);

    block17 = new Block(750,405,30,40);
    block18 = new Block(780,405,30,40);
    block19 = new Block(810,405,30,40);
    block20 = new Block(840,405,30,40);
    block21= new Block(870,405,30,40);

    block22 = new Block(780,365,30,40);
    block23 = new Block(810,365,30,40);
    block24 = new Block(840,365,30,40);

    block25 = new Block(810,325,30,40);

    var polygon_options = {
        isStatic: false
    }

    polygon = Bodies.circle(50,500,20,polygon_options);
    World.add(world,polygon);

    slingshot = new SlingShot(polygon.body,{x:50,y:530});

    


}

function draw(){
    background(0);
    rectMode(CENTER);
    Engine.update(engine);

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    
    fill("white");
    textSize(25);
    text("Score: "+score,750,40);

    stand1.display();
    stand2.display();

    block1.display();
    block1.score();

    block2.display();
    block2.score();

    block3.display();
    block3.score();

    block4.display();
    block4.score();

    block5.display();
    block5.score();

    block6.display();
    block6.score();

    block7.display();
    block7.score();

    block8.display();
    block8.score();

    block9.display();
    block9.score();

    block10.display();
    block10.score();

    block11.display();
    block11.score();

    block12.display();
    block12.score();

    block13.display();
    block13.score();

    block14.display();
    block14.score();

    block15.display();
    block15.score();

    block16.display();
    block16.score();

    block17.display();
    block17.score();

    block18.display();
    block18.score();

    block19.display();
    block19.score();

    block20.display();
    block20.score();

    block21.display();
    block21.score();
    
    block22.display();
    block22.score();

    block23.display();
    block23.score();

    block24.display();
    block24.score();

    block25.display();
    block25.score();

    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon);
    }
}
