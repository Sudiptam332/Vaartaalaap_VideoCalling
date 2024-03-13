const subtitlesDiv = document.querySelector("#sub_msg");

document.addEventListener("DOMContentLoaded", function sub2() {
    const startButton = document.querySelector("#sub_msg_btn");

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');

        console.dir(subtitlesDiv);
        subtitlesDiv.value = transcript;
    };

    if (startButton) {
        startButton.addEventListener('click', function sub(){
            recognition.start();
            //startButton.removeEventListener('click', sub);
            document.removeEventListener('DOMContentLoaded', sub2);
        });
    } else {
        console.error("Element with class 'join-btn' not found.");
    }
    startButton.removeEventListener('click', sub);
});
