let introVideo;
let introEnded = false;

function preload() {
  introVideo = createVideo('./videos/bmw2.mp4', videoLoaded);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  introVideo.hide();
  introVideo.volume(0);
}

function draw() {
  background(0);
  //정렬
  let introVideowidth = 1030;
  let introVideoheight = 1300;
  let x = (width - introVideowidth) / 2;
  let y = (height - introVideoheight) / 2;
  image(introVideo, x, y, introVideowidth, introVideoheight);
  if (introEnded) {
    // fill(0);
    // rect(
    //   (width - introVideo.width) / 2,
    //   (height - introVideo.height) / 2,
    //   introVideo.width,
    //   introVideo.height
    // );
    document.getElementById('main-content').style.display = 'block';
  }
}

function videoLoaded() {
  introVideo.play();
  // introVideo.loop();
  introVideo.onended(introEnd);
}

function introEnd() {
  introEnded = true;
}
