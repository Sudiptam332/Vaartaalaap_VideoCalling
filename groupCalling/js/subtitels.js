const startButton = document.getElementById('start');
const subtitlesDiv = document.getElementById('subtitles');
const sub=document.getElementById('join-btn');
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

recognition.onresult = (event) => {
  let transcript = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript;
    }
  }
  subtitlesDiv.textContent = transcript;
};

sub.addEventListener('click', () => {
  recognition.start();
});