var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function load(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = Content;
    console.log(Content);
    speak1();
}


function speak1(){
    var synth = window.speechSynthesis;
    speakdata = document.getElementById("text_box").value;
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
} 

camera = document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 260,
    image_format : "jpeg",
    jpeg_quality : 90
});