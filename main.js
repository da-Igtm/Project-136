status="";

function setup(){
canvas=createCanvas(600,500);
canvas.position(250,350);
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
objectDetector=ml5.objectDetector("CoCoSSD" , modelLoaded);
document.getElementById("status").innerHTML="status : detecting objects";
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : object detected";
    document.getElementById("name_holder").value;
}

function modelLoaded(){
    console.log("model loaded");
    status=true;
}
function draw(){
    image(video,0,0,600,500)
}