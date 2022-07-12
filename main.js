GG = "";
AA = "";
CK = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
leftWristY = 0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX + "rightWristY" + rightWristY);
    }

}
function preload(){
    AA = loadSound("aa.mp3");
    GG = loadSound("iva.mp3");
    CK = loadSound("ck.mp3");
}
function draw(){
    image(video,0,0,600,530);
}

function play(){
    value = document.getElementById("name").value;
 
    if(value == "GG"){
   GG.play();
    }

    else if(value == "AA"){
        AA.play();
    }
    else if(value == "CK"){
        CK.play();
    }
    song.setVolume(1);
    song.rate(1);

}

function pause(){
    AA.pause();
    GG.pause();
    CK.pause();

}

function stop_music(){
    AA.stop();
    GG.stop();
    CK.stop();

}