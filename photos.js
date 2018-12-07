let photos = [];
let randomPhoto;

/////////capture stuff
let capturer = new CCapture({
    format:'png', framerate: 60, timeLimit: 3
})
let cCanvas;
let p5Canvas;
//////////

let populatePhotoArray = function () {
    for (let i = 0; i < 57; i++) {
        photos[i] = 'media/pictures/' + i + '.jpg';
    }
}

let choosePhoto = function() {
    let dur = round(random(4, 6));
    if(frameCount % dur === 0){
    randomPhoto = loadImage(photos[round(random(0,56))]);
    background(0);
    }
}

let displayPhotos = function () {
    image(randomPhoto, 100, 100, 200, 200);
}

function preload(){
    populatePhotoArray();
}

function setup(){
    createCanvas(500, 500);
    background(0);
    choosePhoto();
    imageMode(CENTER);

    //capturer stuff
    canvas = document.getElementById("defaultCanvas0");
    // capturer.start();
}
function draw(){
    // displayPhotos();
    image(randomPhoto, 250, 250, 200, 200);
    choosePhoto();

    //capturer stuff
    capturer.capture(canvas);
}

///////////////////////////////////////////
// 
// Need to then render to gif for playback.
// 
// 
