let introVideo;
let introEnded = false;

function preload() {
  introVideo = createVideo('/videos/bmw2.mp4', videoLoaded);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  introVideo.hide(); // 캔버스에 영상을 직접 표시하지 않음
  introVideo.size(1080, 1920);
  introVideo.volume(0);
}

function draw() {
  background(0);
  //정렬
  let x = (width - introVideo.width) / 2;
  let y = (height - introVideo.height) / 2;
  image(introVideo, x, y);
  if (introEnded) {
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
