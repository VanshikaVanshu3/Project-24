const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1;
var box3,box4,pig3,log3;
var box5,log4,log5,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,320,70,70);
    box2 = new Box(500,320,70,70);
    pig1 = new Pig(810,350,50,50);
    log1 = new Log(760,260,300,PI/2);

    box3 = new Box(600,240,70,70);
    box4 = new Box(100,240,70,70);
    pig3 = new Pig(810,220,50,50);
    log3 = new Log(810,180,300,PI/2);


    box5 = new Box(300,160,70,70);
    log4 = new Log(760,120,150,PI/4);
    log5 = new Log(870,120,150,-PI/4);

    ground = new Plain(200,height,2000,20);

    bird = new Bird(100,100,50,50); 
stone=new Bird(100,300,10,10);
 stone2=new Bird(200,300,10,10)
 ;
stone3=new Bird(150,300,10,10);
}

function draw(){
    background("pink");
    Engine.update(engine);
    
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    ground.display();
    bird.display(); stone.display();
 stone2.display(); stone3.display();}