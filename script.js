const previewOverlay = document.getElementById('preview');
const cursor = document.getElementById('cursorDot');
const videoPlayer = document.getElementById('videoPlayer');

let rot = 0;

const videos = [
    'ok/1.mp4',
    'ok/2.mp4',
    'ok/3.mp4',
    'ok/4.mp4',
    'ok/5.mp4'
];

function getRandomVideo() {
    return videos[Math.floor(Math.random() * videos.length)];
}

previewOverlay.addEventListener('click', () => {
    previewOverlay.classList.add('hidden');
    videoPlayer.src = getRandomVideo();
    videoPlayer.classList.add('active');
    videoPlayer.play();
});

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    document.body.appendChild(dot);
    
    requestAnimationFrame(() => {
        dot.style.opacity = '0.6';
        dot.style.width = '5px';
        dot.style.height = '5px';
    });
    
    setTimeout(() => {
        dot.style.opacity = '0';
        setTimeout(() => dot.remove(), 200);
    }, 80);
});

function rotateCursor() {
    rot += 0.5;
    const svg = cursor.querySelector('svg');
    if (svg) svg.style.transform = `rotate(${rot}deg)`;
    requestAnimationFrame(rotateCursor);
}
rotateCursor();

document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));