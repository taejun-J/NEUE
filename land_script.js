let video;
let videoEnded = false;
let waitTime = 7000; // 7초
let timer;

function setup() {
  noCanvas();
  video = select('#landingVid');
  video.elt.onended = onVideoEnd;
  //재생이 끝났을때 함수 호출하는 이벤트 핸들러
  select('#landingMain').style('opacity', '0');
}

function onVideoEnd() {
  videoEnded = true;
  select('#landingMain').style('opacity', '1');
  timer = setTimeout(restartVideo, waitTime);
}

function restartVideo() {
  video.elt.currentTime = 0;
  video.elt.play();
  videoEnded = false;
  select('#landingMain').style('opacity', '0');
}

function draw() {}
