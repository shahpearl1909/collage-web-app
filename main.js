var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    if(Content=="selfie"){
        console.log("take my selfie ---");
        speak();
    }
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data="prepare yourself for a practice selfie";
    var UtterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function (){
        image_id="selfie_1";
        take_snapshot();
        speak_data="taking the first selfie in 5 seconds";
        var UtterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    } ,5000);

    setTimeout(function (){
        image_id="selfie_2";
        take_snapshot();
        speak_data="taking the second selfie in 5 seconds";
        var UtterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    } ,10000);

     setTimeout(function (){
        image_id="selfie_3";
        take_snapshot();
        speak_data="taking the last selfie in 5 seconds";
        var UtterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    } ,15000);
}

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality: 100
});

camera=document.getElementById("camera");

function take_snapshot(){
    console.log(image_id);
    Webcam.snap(function(data_uri){
        if(image_id=="selfie_1"){
            document.getElementById("result1").innerHTML='<img id="selfie_image_1" src="'+data_uri+'"/>';
        }
        if(image_id=="selfie_2"){
            document.getElementById("result2").innerHTML='<img id="selfie_image_2" src="'+data_uri+'"/>';
        }
        if(image_id=="selfie_3"){
            document.getElementById("result3").innerHTML='<img id="selfie_image_3" src="'+data_uri+'"/>';
        }
    });
}

