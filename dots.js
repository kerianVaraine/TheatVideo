let dotArr = [];
let centerPoint = [500, 500];
let rad = 100;
let inc = 5;

let singleDot = function (rgb, maxRad, maxLifespan) {
    this.x = round(random(50, windowWidth));
    this.y = round(random(50, windowHeight));
    this.rad = round(random(20, maxRad));
    this.col = 250;
    this.r = round(random(0, rgb));
    this.g = round(random(0, rgb));
    this.b = round(random(0, rgb));

    this.lifespan = round(random(10, maxLifespan));

    this.decayRate = round(random(1, 5)) / 10;



    //display points
    this.display = function () {
        noStroke()
        fill(this.r, this.g, this.b, this.lifespan)
        ellipse(this.x, this.y, this.rad);
        this.lifespan -= this.decayRate;
    }
}

//create dot call

let createDot = function (frequency, rgb, maxRad, maxLifespan) {
    if(frameCount % frequency === 0){
        dotArr.push(new singleDot(rgb, maxRad, maxLifespan));
}}
//display dot loop

let displayDot = function () {
    for (let i = dotArr.length - 1; i > -1; i--) {
        dotArr[i].display();
        dotArr[i].lifespan < 0 ? dotArr.splice(i, 1) : null;
    }
    // dotArr.reverse().forEach(function (el, i) {
    //     el.display();
    //     // el.lifespan < 0 ? dotArr.splice(i, 1) : null;
    //     // console.log(i);
    // })
}
