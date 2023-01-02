function setup() {
    video = createCapture(VIDEO);
    video.size(550, 700)

    canvas = createCanvas(1600, 650);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('#06d110');
    textSize(difference);
    fill('#5d07a8');
    text('Arhaan', 100, 400);
    document.getElementById("px").innerHTML = "Width and Height of the text will be - " + difference + "px";
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

difference = 0;
leftWristX = 0;
rightWristX = 0;