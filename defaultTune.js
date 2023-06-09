const model_url =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
let pitch;
let mic;
let freq = 0;
let threshold = 1;

let notes = [
  {
    note: "A",
    freq: 110,
  },
  {
    note: "B",
    freq: 246.9417,
  },
  {
    note: "D",
    freq: 146.8324,
  },
  {
    note: "E",
    freq: 82.40689,
  },
  {
    note: "G",
    freq: 195.9977,
  },
  {
    note: "E hi",
    freq: 329.6276,
  },
];

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(550,150);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
}

function listening() {
  console.log("listening");
  pitch = ml5.pitchDetection(model_url, audioContext, mic.stream, modelLoaded);
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
  console.log("model loaded");
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
