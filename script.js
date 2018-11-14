let sliders = {};
let buttons = {};
let canv;

function setup() {
    canv = createCanvas(windowWidth - 10, windowHeight - 100);
    //horizontal lines creation
    hLines.createPerlinArr();
    hLines.createBarArr();
    //Dots!
    createDot();

    //DOM stuff to play with
    //sliders for speed and growth traits
    sliders.lineGrowth = createSlider(0, 50, 0.7, 0.01);
    sliders.lineGrowth.id('lineGrowth');
    sliders.lineSpeed = createSlider(0, 50, 0.4, 0.01);
    sliders.lineSpeed.id('lineSpeed');
    sliders.thickness = createSlider(0, 150, 0.4, 0.01);
    sliders.thickness.id('thickness');
    //buttons for direction of line travel
    buttons.horizontal = createButton('horizontal', 0);
    buttons.both = createButton('both', 2);
    buttons.vertical = createButton('vertical', 1);


}

function draw() {
    background(0, 200);

    createDot(round(random(500, 1000)), 150, 100, 600); // args frequency, rgb, maxRad, maxLifespan
    displayDot();

    ///Check each individual bars direction, either 0 (side) or 1 (horizontal).
    hLines.bars.forEach(function (el, index) {
        if (el.individualDirection === 0) {
            el.animateHorizontal(sliders.lineGrowth.value(), sliders.lineSpeed.value(),sliders.thickness.value(), index);
        } else if (el.individualDirection === 1) {
            el.animateVertical(sliders.lineGrowth.value(), sliders.lineSpeed.value(),sliders.thickness.value(), index);
        }
        el.display();
    });

    buttons.horizontal.mousePressed(function() {hLines.direction = 0});
    buttons.both.mousePressed(function() {hLines.direction = 2});
    buttons.vertical.mousePressed(function() {hLines.direction = 1});

    hLines.resetTest();

}