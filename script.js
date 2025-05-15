let speech = new SpeechSynthesisUtterance();
let isPaused = false;

function speakText() {
    let text = document.getElementById("textInput").value;
    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    speech.text = text;
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function pauseSpeech() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        isPaused = true;
    }
}

function resumeSpeech() {
    if (isPaused) {
        window.speechSynthesis.resume();
        isPaused = false;
    }
}

function uploadFile() {
    let fileInput = document.getElementById("fileInput");
    let file = fileInput.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById("textInput").value = event.target.result;
        };
        reader.readAsText(file);
    } else {
        alert("Please select a file!");
    }
}
