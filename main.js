preditction_1="";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,

});

camera = document.getElementById("camera");
Webcam.attach('#camera');


function take_snapshot(){
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    })


}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wJc76p-5O/model.json",modelLoded);
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction " + preditction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    

}
function modelLoded(){
    console.log("modelLoded")
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);

}
function gotResult(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML=result[0].label;
        preditction_1=result[0].label;
        
        speak();
        
        if(result[0].label == "Happy"){
            document.getElementById("update_emoji").innerHTML = "&#128522"
        }
    
        if(result[0].label == "Sad"){
            document.getElementById("update_emoji").innerHTML = "&#128532"
        }
    
        if(result[0].label == "Criying"){
            document.getElementById("update_emoji").innerHTML = "&#128557"
        }
    
        
    
    }
    }
    
    
    