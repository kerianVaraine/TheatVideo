let hLines = {
    //init arrays and division of screen for bars
    bars: [],
    perlin: [],
    canvasDivision: 22,
    direction: 0, //global change direction call

    //functions

    createPerlinArr: function () {
        for (let i = 0; i < 50; i++) {
            this.perlin[i] = round(noise(i) * 10);
        }
    },

    createBarArr: function () {
        //create init array of bars
        for (let i = 0; i < windowHeight / this.canvasDivision; i++) {
            this.bars[i] = new Bar();
            this.bars[i].y = this.canvasDivision + i * (windowHeight / this.canvasDivision); //evenly spacing bars

            //BEFORE SLIDERS CAME IN
            //this.bars[i].growth = this.perlin[i]*0.7;   //}these two settings alter a lot
            //this.bars[i].speed = this.perlin[i]*0.4;  //}in regards to how it feels
        }
    },

    resetBar: function (i) {
        //reset bar traits
        this.bars[i].growth = this.perlin[i]; //noise based
        this.bars[i].lineLength = round(random(0, windowWidth - 700));
        this.bars[i].width = 0;
    },

    resetTest: function () {
        // when bar reaches end of travel, reset traits
        for (let i = 0; i < this.bars.length; i++) {
            if ((this.bars[i].individualDirection === 0 && this.bars[i].x > windowWidth - 10) || (this.bars[i].individualDirection === 1 && this.bars[i].y > windowHeight - 10)) {
                this.resetBar(i);
                // global direction changes individual direction when hit edge of screen, in either direction
                if (hLines.direction === 0){
                this.bars[i].individualDirection = 0;
                }else if(hLines.direction === 1) {
                    this.bars[i].individualDirection = 1;
                    //randomly assign horizontal or vertical direction for each individual bar
                } else if (hLines.direction === 2) {
                    this.bars[i].individualDirection = round(random(0,1));
                }
            }
        }
    }
}
let Bar = function () {
    // bar init variables
    this.x = 0;
    this.y;
    this.width = 0;
    this.lineLength = round(random(0, windowWidth - 700));
    this.height = windowHeight / (hLines.canvasDivision * 15); //this changes a lot too!
    this.col = 200;
    this.growth; // speed of sidways growth
    this.speed; // speed of sideways travel
    this.individualDirection = 0; //sorting for fluid transition of direction per bar
    this.thickness = 4

    // display function for each bar
    this.display = function () {
        // noStroke();
        stroke(100);
        fill(this.col);
        rect(this.x, this.y, this.width, this.height);
    };

    //restarts bar
    this.animateHorizontal = function (growth, speed, thickness, y) {
        // Original WORKS!
        // this.x < windowWidth ? this.width += this.growth : this.width = 0; //this starts length
        // this.width > this.lineLength ? this.x += this.speed : this.x = 0; //this brings tail of bar towards its end

        //slider testing
        this.height = thickness//windowHeight / (hLines.canvasDivision * 15);
        this.y = (windowHeight / hLines.canvasDivision) * y;
        this.x < windowWidth ? this.width += growth : this.width = 0; //this starts length
        this.width > this.lineLength ? this.x += speed : this.x = 0; //this brings tail of bar towards its end
    }

    this.animateVertical = function (growth, speed, thickness, x) {
        //slider testing
        this.width = thickness; //windowWidth / (hLines.canvasDivision * 15)
        this.x = (windowWidth / hLines.canvasDivision) * x;
        this.y < windowHeight ? this.height += growth : this.height = 0; //this starts length
        this.height > this.lineLength ? this.y += speed : this.y = 0; //this brings tail of bar towards its end
    }

}