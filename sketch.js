var eggTart;
var potSticker;
var sesameBall;
var beefNoodleRoll;
var taroPuff;
var shuiMai;

function setup() {
  createCanvas(1200, 900);
  background('lightblue');
    //start row 1//
  //start eggtart//
  eggTart = createSprite(180, 140);
  eggTart.addAnimation('normal', 'images/dimsum_dahntaht_eggtart.png');
  eggTart.addAnimation('hover', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_2.png', 'images/dimsum_dahntaht_eggtart_2.png', 'images/dimsum_dahntaht_eggtart_2.png', 'images/dimsum_dahntaht_eggtart_2.png', 'images/dimsum_dahntaht_eggtart_2.png');
//end eggtart//
//start potsticker//
  potSticker = createSprite(520, 140);
  potSticker.addAnimation('normal', 'images/dimsum_potsticker.png');
  potSticker.addAnimation('hover', 'images/dimsum_potsticker_1.png', 'images/dimsum_potsticker_1.png', 'images/dimsum_potsticker_1.png', 'images/dimsum_potsticker_1.png', 'images/dimsum_potsticker_2.png', 'images/dimsum_potsticker_2.png', 'images/dimsum_potsticker_2.png');
//end potsticker//
    //end row 1//

    //start row 2//
//start sesame ball//
sesameBall = createSprite(180, 410);
sesameBall.addAnimation('normal', 'images/dimsum_sesameball.png');
sesameBall.addAnimation('hover', 'images/dimsum_sesameball_1.png', 'images/dimsum_sesameball_1.png', 'images/dimsum_sesameball_1.png', 'images/dimsum_sesameball_1.png', 'images/dimsum_sesameball_2.png', 'images/dimsum_sesameball_2.png', 'images/dimsum_sesameball_2.png' );
//end sesame ball//

//start beefNoodleRoll//
beefNoodleRoll = createSprite(545, 410);
beefNoodleRoll.addAnimation('normal', 'images/dimsum_gnowcherng_beefnoodleroll_1.png');
beefNoodleRoll.addAnimation('hover', 'images/dimsum_gnowcherng_beefnoodleroll_2.png', 'images/dimsum_gnowcherng_beefnoodleroll_2.png', 'images/dimsum_gnowcherng_beefnoodleroll_2.png', 'images/dimsum_gnowcherng_beefnoodleroll_1.png', 'images/dimsum_gnowcherng_beefnoodleroll_1.png', 'images/dimsum_gnowcherng_beefnoodleroll_1.png');
//end beefNoodleRoll//
    //end row 2//
    //start row 3//
//start shuiMai//
shuiMai = createSprite(180, 700);
shuiMai.addAnimation('normal', 'images/dimsum_shuimai.png');
shuiMai.addAnimation('hover', 'images/dimsum_shuimai_1.png', 'images/dimsum_shuimai_1.png', 'images/dimsum_shuimai_1.png', 'images/dimsum_shuimai_2.png', 'images/dimsum_shuimai_2.png', 'images/dimsum_shuimai_2.png');
//end taroPuff//

//start taroPuff//
taroPuff = createSprite(545, 700);
taroPuff.addAnimation('normal', 'images/dimsum_wugawk_taropuff.png');
taroPuff.addAnimation('hover', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff_1.png', 'images/dimsum_wugawk_taropuff_1.png', 'images/dimsum_wugawk_taropuff_1.png');
//end taroPuff//
    //end row 3//

//start of speaker image//
speakerButton = createSprite(950, 360);
speakerButton.addAnimation('normal', 'images/audio.png');
//end of speaker image//

//I can assign functions to be called upon specific mouse events
//within the function "this" will reference the sprite that triggered the event
  //start eggtart//
  addMouseEvents(eggTart, 'images/dimsum_dahntaht_eggtart_pronounciation.m4a');
//end eggtart//
//start potsticker//
  addMouseEvents(potSticker, 'images/dimsum_potstickers_pronounciation.m4a');
//end potsticker//
//start sesame ball//
  addMouseEvents(sesameBall, 'images/dimsum_sesameball_pronounciation.m4a');
//end sesame ball//

//start beefNoodleRoll//
  addMouseEvents(beefNoodleRoll, 'images/dimsum_gnowcherng_beefnoodleroll_pronounciation.m4a');
//end beefNoodleRoll//

//start taroPuff//
  addMouseEvents(taroPuff, 'images/dimsum_wugawk_taropuff_pronounciation.m4a');
//end taroPuff//

//start shuiMai//
  addMouseEvents(shuiMai, 'images/dimsum_shuimai_pronounciation.m4a');
//end shuiMai//
}

function draw() {
  background(1000,800,400);
  drawSprites();
}

function addMouseEvents(dimSum, audioFile) {
  dimSum.onMouseOver = function() {
    this.changeAnimation('hover');
  };
  dimSum.onMouseOut = function() {
    this.changeAnimation('normal');
  };
  dimSum.onMouseReleased = function() {
    playAudio(audioFile);
  };

  //detect the mouse position and click on this sprite
  //if no collider is defined, the image bounding box will be checked
  dimSum.mouseActive = true;
}

function playAudio(audioFile) {
  var audio = document.getElementById('audio');
  audio.src = audioFile;
  audio.play();
}

//START//

//END//
