window.addEventListener('load', function() {
    // Preload speech synthesis voices
    window.speechSynthesis.onvoiceschanged = function() {
        var voices = window.speechSynthesis.getVoices();
        // You can log voices or set a preferred voice here
    };
    window.speechSynthesis.getVoices(); // Trigger voice loading

    // Other preloading tasks (e.g., images, custom scripts) can go here
});

document.getElementById('text-to-speak').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) { // 13 is the keycode for the Enter key
        event.preventDefault(); // Prevent the default action to avoid form submission
        speakText(document.getElementById('text-to-speak').value);
    }
});

function speakText(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

function help() {
    speakText("I need help");
}

function Nbreak() {
    speakText("I need a break");
}

function bathroom() {
    speakText("I need to use the bathroom");
}
