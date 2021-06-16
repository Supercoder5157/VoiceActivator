var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function load(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("text_box").innerHTML = Content;
}
