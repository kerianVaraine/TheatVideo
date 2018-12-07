let canv;
let video;

function setup() {
canv = createCanvas(700, 700, WEBGL);
video = createVideo('media/Eyeline Test.MP4');
video.hide();
}

function draw() {
image(video, 10, 10);
}