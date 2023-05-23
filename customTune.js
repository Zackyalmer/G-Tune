const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
let pitch;
let mic;
let freq = 0;
let threshold = 1;

let notes = [{note: 0, freq: 0},{note: 0, freq: 1},{note: 0, freq: 2},{note: 0, freq: 3},{note: 0, freq: 4},{note: 0, freq: 5}];

function getValueNotes1(){
  var val = document.getElementById("list-customize-1").value;
  switch (val){
    case 'A':
      notes[0].note = 'A lo';
      notes[0].freq = 110;
      break
    case 'Bb':
      notes[0].note = 'Bb lo';
      notes[0].freq = 116.5409;
      break
    case 'B':
      notes[0].note = 'B lo';
      notes[0].freq = 123.4708;
      break
    case 'C':
      notes[0].note = 'C lo';
      notes[0].freq = 65.40639;
      break
    case 'C#':
      notes[0].note = 'C# lo';
      notes[0].freq = 69.29566;
      break
    case 'D':
      notes[0].note = 'D lo';
      notes[0].freq = 73.41619;
      break
    case 'D#':
      notes[0].note = 'D# lo';
      notes[0].freq = 77.78175;
      break
    case 'E':
      notes[0].note = 'E lo';
      notes[0].freq = 82.40689;
      break
    case 'F':
      notes[0].note = 'F lo';
      notes[0].freq = 87.30706;
      break
    case 'F#':
      notes[0].note = 'F# lo';
      notes[0].freq = 92.49861;
      break
    case 'G':
      notes[0].note = 'G lo';
      notes[0].freq = 97.99886;
      break
    case 'G#':
      notes[0].note = 'G# lo';
      notes[0].freq = 103.8262;
      break
  }
}

function getValueNotes2(){
  var val = document.getElementById("list-customize-2").value;
  switch (val){
    case 'A':
      notes[1].note = 'A lo';
      notes[1].freq = 110;
      break
    case 'Bb':
      notes[1].note = 'Bb lo';
      notes[1].freq = 116.5409;
      break
    case 'B':
      notes[1].note = 'B lo';
      notes[1].freq = 123.4708;
      break
    case 'C':
      notes[1].note = 'C';
      notes[1].freq = 130.8128;
      break
    case 'C#':
      notes[1].note = 'C#';
      notes[1].freq = 138.5913;
      break
    case 'D':
      notes[1].note = 'D';
      notes[1].freq = 146.8324;
      break
    case 'D#':
      notes[1].note = 'D#';
      notes[1].freq = 155.5635;
      break
    case 'E':
      notes[1].note = 'E';
      notes[1].freq = 164.8138;
      break
    case 'F':
      notes[1].note = 'F lo';
      notes[1].freq = 87.30706;
      break
    case 'F#':
      notes[1].note = 'F# lo';
      notes[1].freq = 92.49861;
      break
    case 'G':
      notes[1].note = 'G lo';
      notes[1].freq = 97.99886;
      break
    case 'G#':
      notes[1].note = 'G# lo';
      notes[1].freq = 103.8262;
      break
  }
}

function getValueNotes3(){
  var val = document.getElementById("list-customize-3").value;
  switch (val){
    case 'A':
      notes[2].note = 'A';
      notes[2].freq = 220;
      break
    case 'Bb':
      notes[2].note = 'Bb lo';
      notes[2].freq = 116.5409;
      break
    case 'B':
      notes[2].note = 'B lo';
      notes[2].freq = 123.4708;
      break
    case 'C':
      notes[2].note = 'C';
      notes[2].freq = 130.8128;
      break
    case 'C#':
      notes[2].note = 'C#';
      notes[2].freq = 138.5913;
      break
    case 'D':
      notes[2].note = 'D';
      notes[2].freq = 146.8324;
      break
    case 'D#':
      notes[2].note = 'D#';
      notes[2].freq = 155.5635;
      break
    case 'E':
      notes[2].note = 'E';
      notes[2].freq = 164.8138;
      break
    case 'F':
      notes[2].note = 'F';
      notes[2].freq = 174.6141;
      break
    case 'F#':
      notes[2].note = 'F#';
      notes[2].freq = 184.9972;
      break
    case 'G':
      notes[2].note = 'G';
      notes[2].freq = 195.9977;
      break
    case 'G#':
      notes[2].note = 'G#';
      notes[2].freq = 207.6523;
      break
  }
}

function getValueNotes4(){
  var val = document.getElementById("list-customize-4").value;
  switch (val){
    case 'A':
      notes[3].note = 'A';
      notes[3].freq = 220;
      break
    case 'Bb':
      notes[3].note = 'Bb';
      notes[3].freq = 233.0819;
      break
    case 'B':
      notes[3].note = 'B';
      notes[3].freq = 246.9417;
      break
    case 'C':
      notes[3].note = 'C';
      notes[3].freq = 261.6256;
      break
    case 'C#':
      notes[3].note = 'C#';
      notes[3].freq = 277.1826;
      break
    case 'D':
      notes[3].note = 'D';
      notes[3].freq = 293.6648;
      break
    case 'D#':
      notes[3].note = 'D#';
      notes[3].freq = 155.5635;
      break
    case 'E':
      notes[3].note = 'E';
      notes[3].freq = 164.8138;
      break
    case 'F':
      notes[3].note = 'F';
      notes[3].freq = 174.6141;
      break
    case 'F#':
      notes[3].note = 'F#';
      notes[3].freq = 184.9972;
      break
    case 'G':
      notes[3].note = 'G';
      notes[3].freq = 195.9977;
      break
    case 'G#':
      notes[3].note = 'G#';
      notes[3].freq = 207.6523;
      break
  }
}

function getValueNotes5(){
  var val = document.getElementById("list-customize-5").value;
  switch (val){
    case 'A':
      notes[4].note = 'A';
      notes[4].freq = 220;
      break
    case 'Bb':
      notes[4].note = 'Bb';
      notes[4].freq = 233.0819;
      break
    case 'B':
      notes[4].note = 'B';
      notes[4].freq = 246.9417;
      break
    case 'C':
      notes[4].note = 'C';
      notes[4].freq = 261.6256;
      break
    case 'C#':
      notes[4].note = 'C#';
      notes[4].freq = 277.1826;
      break
    case 'D':
      notes[4].note = 'D';
      notes[4].freq = 293.6648;
      break
    case 'D#':
      notes[4].note = 'D#';
      notes[4].freq = 311.1270;
      break
    case 'E':
      notes[4].note = 'E';
      notes[4].freq = 329.6276;
      break
    case 'F':
      notes[4].note = 'F';
      notes[4].freq = 349.2282;
      break
    case 'F#':
      notes[4].note = 'F#';
      notes[4].freq = 369.9944;
      break
    case 'G':
      notes[4].note = 'G';
      notes[4].freq = 195.9977;
      break
    case 'G#':
      notes[4].note = 'G#';
      notes[4].freq = 207.6523;
      break
  }
}

function getValueNotes6(){
  var val = document.getElementById("list-customize-6").value;
  switch (val){
    case 'A':
      notes[5].note = 'A hi';
      notes[5].freq = 440;
      break
    case 'Bb':
      notes[5].note = 'Bb hi';
      notes[5].freq = 466.1638;
      break
    case 'B':
      notes[5].note = 'B hi';
      notes[5].freq = 493.8833;
      break
    case 'C':
      notes[5].note = 'C';
      notes[5].freq = 261.6256;
      break
    case 'C#':
      notes[5].note = 'C#';
      notes[5].freq = 277.1826;
      break
    case 'D':
      notes[5].note = 'D';
      notes[5].freq = 293.6648;
      break
    case 'D#':
      notes[5].note = 'D#';
      notes[5].freq = 311.1270;
      break
    case 'E':
      notes[5].note = 'E hi';
      notes[5].freq = 329.6276;
      break
    case 'F':
      notes[5].note = 'F';
      notes[5].freq = 349.2282;
      break
    case 'F#':
      notes[5].note = 'F#';
      notes[5].freq = 369.9944;
      break
    case 'G':
      notes[5].note = 'G';
      notes[5].freq = 391.9954;
      break
    case 'G#':
      notes[5].note = 'G#';
      notes[5].freq = 415.3047;
      break
  }
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(550,250);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
}

function listening() {
  console.log('listening');
  pitch = ml5.pitchDetection(
    model_url,
    audioContext,
    mic.stream,
    modelLoaded
  );
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(32);
  text(freq.toFixed(2), width / 2, height - 150);


  let closestNote = -1;
  let recordDiff = Infinity;
  for (let i = 0; i < notes.length; i++) {
    let diff = freq - notes[i].freq;
    if (abs(diff) < abs(recordDiff)) {
      closestNote = notes[i];
      recordDiff = diff;
    }
  }

  textSize(64);
  text(closestNote.note, width / 2, height - 50);


  let diff = recordDiff;
  // let amt = map(diff, -100, 100, 0, 1);
  // let r = color(255, 0, 0);
  // let g = color(0, 255, 0);
  // let col = lerpColor(g, r, amt);


  let alpha = map(abs(diff), 0, 100, 255, 0);
  rectMode(CENTER);
  fill(255, alpha);
  stroke(255);
  strokeWeight(1);
  if (abs(diff) < threshold) {
    fill(0, 255, 0);
  }
  rect(200, 100, 200, 50);

  stroke(255);
  strokeWeight(4);
  line(200, 45, 200, 160);

  noStroke();
  fill(255, 0, 0);
  if (abs(diff) < threshold) {
    fill(0, 255, 0);
  }
  rect(200 + diff / 2, 100, 10, 75);


}

function modelLoaded() {
  console.log('model loaded');
  pitch.getPitch(gotPitch);
}

function gotPitch(error, frequency) {
  if (error) {
    console.error(error);
  } else {
    //console.log(frequency);
    if (frequency) {
      freq = frequency;
    }
    pitch.getPitch(gotPitch);
  }
}