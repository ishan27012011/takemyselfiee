var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML="";
Recognition.start();
}

Recognition.onresult= function run (event) {
console.log(event);

var Content= event.results[0][0].transcript;

console.log(Content);

document.getElementById("textbox").innerHTML=Content;
if (Content=="take my selfie") {

    speak();
setTimeout(function(){
    take_snapshot();
save();
},5000);
    
}

};

function speak() {
var synth= window.speechSynthesis;
var speak_data= "Taking Your Selfie In 5 Seconds";
var utterThis= new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}

camera= document.getElementById("camera");

Webcam.set({
width:360,
height:250,
image_format:'jpeg',
jpeg_quality:1080
});

function take_snapshot() {
Webcam.snap(function (data_uri) {
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';    
})
}
function save() {
link= document.getElementById("link");
image=document.getElementById("selfie_image").src;
link.href=image;
link.click();
}