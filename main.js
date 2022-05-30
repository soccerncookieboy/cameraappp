var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event)
    var content = event.results [0][0].transcript;

    document.getElementById("textbox").innerHTML = content;
    console.log(content);
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data ="taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
}