// SIZES
let _canvasX = 960;
let _canvasY = 540;
let _centreX = _canvasX / 2;
let _centreY = _canvasY / 2;



// COLOR PALETTES
// _X = [TERRAIN, FOGDOWN, FOGUP/CLOUDS,  BACKGROUND, SUN/STARS]
let _morning = [[8, 72, 135], [245, 138, 7], [144, 156, 194], [249, 171, 85], [247, 245, 251]];
let _nighttime = [[26, 1, 54], [126, 82, 160], [210, 149, 191], [41, 39, 76], [230, 188, 205]];
let _noon = [[60, 21, 24], [105, 20, 14], [164, 66, 0], [213, 137, 54], [252, 197, 86]];
let _daytime = [[23, 42, 58], [0, 67, 70], [80, 137, 145], [117, 221, 221], [255, 201, 143]];
let _palettes = [_morning, _nighttime, _noon, _daytime];

// CHOOSING PALETTE
let randomNumColor = Math.floor(Math.random() * (5 - 1));
let _timeOfDay = _palettes[randomNumColor]; //YOU CAN CHANGE THE TIME OF DAY HERE TO CHANGE THE PALETTE



// START
alert("Hello friend! \nThis is my Mountain Range Drawing Generator. \nIf you wish to change the time of day of the drawing you can scroll down and swap between the options given. Along with that you can also save your drawing with the 'save' button. \nHave fun!  :) \n\n~ Ana Mota");
function setup() {
    // BASE
    let _canvas = createCanvas(_canvasX, _canvasY);
    _canvas.parent("canvas");
    let _default = color(253, 255, 252);
    background(_default);
    noLoop();
}



// USER INTERACTIONS
// FORCING PALETTE
function turnMorning() {
    _timeOfDay = _morning;
    draw();
}
function turnNighttime() {
    _timeOfDay = _nighttime;
    draw();
}
function turnNoon() {
    _timeOfDay = _noon;
    draw();
}
function turnDaytime() {
    _timeOfDay = _daytime;
    draw();
}

//SAVE CANVAS
function saveImg() {
    saveCanvas('mountainRange_byAnaMota.jpg');
}



// ELEMENTS OF DRAWING
// SUN
function sun () {
    fill(_timeOfDay[4]);
    strokeWeight(0);
    let _circleDiam = floor(random(_canvasY / 2, 2 * _canvasY / 3));
    let _circleX;
    let _circleY;
    if (_timeOfDay == _morning) {
        console.log("it's morning");
        _circleX = floor(random(_centreX, _canvasX));
        _circleY = floor(random(_centreY, 3 * _centreY / 2));
    } else if (_timeOfDay == _nighttime || _timeOfDay == _daytime) {
        if (_timeOfDay == _nighttime) {
            console.log("it's nighttime");
        } else {
            console.log("it's daytime");
        }
        _circleX = floor(random(_centreX / 2, 3 * _centreX / 2));
        _circleY = floor(random(_centreY / 2, 3 * _centreY / 2));
    } else if (_timeOfDay == _noon) {
        console.log("it's noon");
        _circleX = floor(random(0, _centreX));
        _circleY = floor(random(_centreY, 3 * _centreY / 2));
    }
    console.log("_circleX, _circleY, _circleDiam:", _circleX, _circleY, _circleDiam);
    circle(_circleX, _circleY, _circleDiam);
}

// TERRAIN
function randomNumsTerrain() {
    console.log("randomNumsTerrain() started");
    let _randomNumTerrain1 = Math.floor(Math.random() * (2 * _canvasY / 3 - _canvasY / 4));
    let _randomNumTerrain2 = Math.floor(Math.random() * (2 * _canvasY / 3 - _canvasY / 4));
    if (_randomNumTerrain1 <= _canvasX / 6) {
        _randomNumTerrain1 += _canvasX / 6;
    }
    if (_randomNumTerrain2 <= _canvasX / 6) {
        _randomNumTerrain2 += _canvasX / 6;
    }
    console.log("randomNumsTerrain() ended");
    return [_randomNumTerrain1,_randomNumTerrain2];
}

function terrain() {
    let _randomNumTerrain1 = randomNumsTerrain()[0];
    let _randomNumTerrain2 = randomNumsTerrain()[1];
    console.log("_randomNumTerrain1 and _randomNumTerrain2:", _randomNumTerrain1, _randomNumTerrain2);
    console.log("terrain() started");
    console.log(_canvasY, _randomNumTerrain1, _canvasY - _randomNumTerrain1);
    strokeWeight(0);
    fill(_timeOfDay[0]);
    beginShape();
        let x = 0
        while (x < _canvasX) {
            let _newSpot = random(_canvasX / 5, _canvasX / 3);
            if (x == 0) {
                vertex(0, _canvasY - _randomNumTerrain1);
                x += _newSpot;
                _newSpot = random(_canvasX / 5, _canvasX / 3);
                console.log("top right of terrain created");
            } else {
                vertex(x, random(_canvasY / 3, 2 * _canvasY / 3));
                x += _newSpot;
                _newSpot = random(_canvasX / 5, _canvasX / 3);
                console.log("point of a mountain created");
            }
        }
        vertex(_canvasX, _canvasY - _randomNumTerrain2);
        vertex(_canvasX, _canvasY);
        vertex(0, _canvasY);
    endShape(CLOSE);

    console.log("terrain() ended");
}

// CLOUDS & STARS
function extrasBackground() {
    if (_timeOfDay == _morning || _timeOfDay == _noon || _timeOfDay == _daytime) {
        // CLOUDS
        strokeWeight(0);
        fill(_timeOfDay[2]);
        ellipse(0, _canvasY / 3, random(_canvasX / 3, _canvasX / 2), random(_canvasY / 2, 2 *_canvasY / 3));
        ellipse(_canvasX / 5, _centreY, random(_canvasX / 3, _canvasX / 2), random(_canvasY / 2, 2 *_canvasY / 3));
        ellipse(2 * _canvasX / 5, 2 * _canvasY / 3, random(_canvasX / 3, _canvasX / 2), random(_canvasY / 2, 2 *_canvasY / 3));
        ellipse(3 * _canvasX / 5, 2 * _canvasY / 3, random(_canvasX / 3, _canvasX / 2), random(_canvasY / 2, 2 *_canvasY / 3));
        ellipse(4 * _canvasX / 5, _centreY, random(_canvasX / 3, _canvasX / 2), random(_canvasY / 2, 2 *_canvasY / 3));
        ellipse(_canvasX, _canvasY / 3, random(_canvasX / 3, _canvasX / 2), random(_canvasY / 2, 2 *_canvasY / 3));
        rect(0, _centreY, _canvasX, _centreY);
    }

    // STARS
    let _starNo;
    if (_timeOfDay == _noon) {
        _starNo = floor(random(30,50));
    } else if (_timeOfDay == _nighttime) {
        _starNo = floor(random(70,200));
    } else {
        _starNo = floor(random(20,30));
    }
    for (i = 0; i <= _starNo; i++) {
        strokeWeight(0);
        fill(_timeOfDay[4]);
        circle(random(0, _canvasX), random(0, _canvasY), random(1, 3));
    }

    // SHOOTING STAR EASTER EGG! 1 IN 100 CHANCE OF GETTING
    if (_timeOfDay == _nighttime) {
        let _luckyNumber = floor(random(0,100));
        if (_luckyNumber == 3) {
            console.log("LOOK! SHOOTING STARS!");
            strokeWeight(1.5);
            stroke(_timeOfDay[4]);
            let _starStartX, _starStartY;
            for (n = 0; n <= 2; n++) {
                _starStartX = random(_canvasX / 10, 9 * _canvasX / 10);
                _starStartY = random(_canvasY / 10, _centreY);
                line(_starStartX, _starStartY, _starStartX + _canvasX / 15, _starStartY - _canvasY / 25);
            }
            strokeWeight(0);
        }
    }
}

// GRADIENT
function extrasForeground() {
    let c1 = color(_timeOfDay[2]);
    let c2 = color(_timeOfDay[1]);
    console.log("c1, c2:", c1, c2);
    function gradientMaker(x, y, w, h, c1, c2) {
        noFill();
        for (let i = y; i <= y + h; i++) {
            let inter = map(i, y, y + h, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            strokeWeight(1);
            line(x, i, x + w, i);
            strokeWeight(0);
        }
    }
    push();

    // FOG
    if (_timeOfDay == _morning) {
        blendMode(LIGHTEST);
    } else if (_nighttime) {
        blendMode(SOFT_LIGHT);
    } else {
        blendMode(OVERLAY);
    }
    gradientMaker(0, 0, _canvasX, _canvasY, c1, c2);
    pop();
}



// ACTION
function draw() {
    console.log("draw() started");
    background(_timeOfDay[3]);
    extrasBackground();
    sun();
    extrasForeground();
    terrain();
}