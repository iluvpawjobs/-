const audioPlayer = document.getElementById('audioPlayer');
const progressSlider = document.getElementById('progressSlider');
const progressBar = document.getElementById('progressBar');
const previewOverlay = document.getElementById('preview');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const video = document.getElementById('bgVideo');

const source = document.createElement('source');
source.src = '0001-0240.mp4';
source.type = 'video/mp4';
video.appendChild(source);

previewOverlay.addEventListener('click', () => {
    previewOverlay.classList.add('hidden');
    audioPlayer.play();
    video.play();
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + '%';
    progressSlider.value = progress;
});

progressSlider.addEventListener('input', (e) => {
    audioPlayer.currentTime = (e.target.value / 100) * audioPlayer.duration;
});

playBtn.addEventListener('click', () => {
    audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
});

audioPlayer.addEventListener('play', () => {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
});

audioPlayer.addEventListener('pause', () => {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
});
