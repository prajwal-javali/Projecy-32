const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, d1, d2, d3, d4, d5, p1;
var particle = [];
var plinkos = [];
var division = [];
var score = 0;

var divisionHeight = 300;



function setup() {
  var canvas = createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 600, 490, 20);
  d1 = new Ground(5, 490, 10, 300);
  d2 = new Ground(478, 490, 10, 300);
  d3 = new Ground(240, 490, 10, 300);
  d4 = new Ground(120, 490, 10, 300);
  d5 = new Ground(363, 490, 10, 300);

  for (var i = 15; i < width; i = i+70) {
    plinkos.push(new Plinko(i, 50, 20, 20));
  }

  for (var i = 30; i < width; i = i+70) {
    plinkos.push(new Plinko(i, 100, 20, 20));
  }

  for (var i = 45; i < width; i = i+70) {
    plinkos.push(new Plinko(i, 150, 20, 20));
  }

  for (var i = 30; i < width; i = i+70) {
    plinkos.push(new Plinko(i, 200, 20, 20));
  }

  for (var i = 15; i < width; i = i+70) {
    plinkos.push(new Plinko(i, 250, 20, 20));
  }

  for (var i = 45; i < width; i = i+70) {
    plinkos.push(new Plinko(i, 300, 20, 20));
  }

  
}

function draw() {
  background(0);  
  Engine.update(engine);

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " +score, 30, 40);

  if (particle.y >= 300) {
    score ++
  }

  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (frameCount % 60 === 0) {
    particle.push(new Particle(random(50, 350), 0, 20, 20));
  }
  for (var i = 0; i < particle.length; i++) {
    particle[i].display();
  }
  
}