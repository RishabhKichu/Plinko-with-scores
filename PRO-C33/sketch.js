var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = 0;
var count = 0;
var plinkos = [];
var gameState = "start";

var divisionHeight = 300;
var score = 0;
var divisions = [];
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  textSize(20);
  text("Score : " + score, 20, 30);
  text("Lives :" + (5 - count), 600, 30);
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  // if (frameCount % 60 === 0) {
  //   particles.push(
  //     new particle(random(width / 2 - 30, width / 2 + 30), 10, 10)
  //   );
  //   score++;
  // }

  // for (var j = 0; j < particles.length; j++) {
  //   particles[j].display();
  // }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  if (particles) {
    particles.display();
  }
  updateScore();
  texts();
}

function mousePressed() {
  if (gameState != "end") {
    particles = new particle(mouseX, 10, 10);
    particles.display();
    count++;
    if (count === 5) gameState = "end";
  }
}

function texts() {
  text("500", 25, 550);
  text("500", 105, 550);
  text("500", 185, 550);
  text("100", 265, 550);
  text("100", 345, 550);
  text("100", 425, 550);
  text("200", 505, 550);
  text("200", 585, 550);
  text("200", 665, 550);
  text("500", 745, 550);

  if (gameState === "text") {
    push();
    textSize(100);
    fill("red");
    text("Game Over", 100, 250);
    pop();
  }
}

function updateScore() {
  if (particles) {
    if (particles.body.position.y > 700) {
      console.log(count);
      if (particles.body.position.x > 0 && particles.body.position.x < 80) {
        score = score + 500;
        checkGameOver();
        particles = null;
      } else if (
        particles.body.position.x > 80 &&
        particles.body.position.x < 160
      ) {
        score = score + 500;
        checkGameOver();
        particles = null;
      } else if (
        particles.body.position.x > 160 &&
        particles.body.position.x < 240
      ) {
        score = score + 500;
        checkGameOver();
        particles = null;
      } else if (
        particles.body.position.x > 240 &&
        particles.body.position.x < 320
      ) {
        score = score + 100;
        checkGameOver();
        particles = null;
      } else if (
        particles.body.position.x > 320 &&
        particles.body.position.x < 400
      ) {
        score = score + 100;
        checkGameOver();
        particles = null;
      } else if (
        particles.body.position.x > 400 &&
        particles.body.position.x < 480
      ) {
        score = score + 100;
        checkGameOver();
        particles = null;
      } else if (
        particles.body.position.x > 480 &&
        particles.body.position.x < 560
      ) {
        score = score + 200;
        checkGameOver();
        particles = null;
      } else if (
        particles.body.position.x > 560 &&
        particles.body.position.x < 640
      ) {
        score = score + 200;
        checkGameOver();
        particles = null;
      } else if (
        particles.body.position.x > 640 &&
        particles.body.position.x < 720
      ) {
        score = score + 200;
        checkGameOver();
        particles = null;
      } else if (
        particles.body.position.x > 720 &&
        particles.body.position.x < 800
      ) {
        score = score + 500;
        checkGameOver();
        particles = null;
      }
    }
  }
}

function checkGameOver() {
  if (count === 5) {
    gameState = "text";
  }
}
