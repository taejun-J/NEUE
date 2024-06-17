let firstImage, secondImage, thirdImage;
let currentImage;

function preload() {
  firstImage = loadImage('./images/heri1.png');
  secondImage = loadImage('./images/heri2.png');
  thirdImage = loadImage('./images/heri3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentImage = firstImage;
}

function draw() {
  background(0);
  image(currentImage, 0, 0, windowWidth, windowHeight);
  filter(GRAY);
  fill(0, 0, 0, 150);
  rect(0, 0, windowWidth, windowHeight);
}

function mousePressed() {
  if (currentImage === firstImage) {
    currentImage = secondImage;
    document.getElementById('text1').style.display = 'none';
    document.getElementById('text2').style.display = 'block';
    document.getElementById('text3').style.display = 'none';
  } else if (currentImage === secondImage) {
    currentImage = thirdImage;
    document.getElementById('text1').style.display = 'none';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('text3').style.display = 'block';
  } else {
    currentImage = firstImage;
    document.getElementById('text1').style.display = 'block';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('text3').style.display = 'none';
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
