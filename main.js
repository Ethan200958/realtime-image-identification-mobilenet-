function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifying = ml5.imageClassifier("Mobilenet");
}



function draw() {
  image(video, 0, 0, 300, 300);
  classifying.classify(video, gotResults);
}

function gotResults(error, result) { 

  if(error) {
    console.error(error);
  } else {
    console.log("No errors found.");
    console.log(result);
    document.getElementById("objectRes").innerHTML=result[0].label +","+ result[1].label +","+ result[2].label;
    document.getElementById("accuracyRes").innerHTML=result[0].confidence.toFixed(4);

  }

}