function speak() {
    var text = document.getElementById('text-to-speak').value;
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
function help() {
    var text = "I need help"
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
function Nbreak() {
    var text = "I need a break"
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
function bathroom() {
    var text = "I need to use the bathroom"
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
