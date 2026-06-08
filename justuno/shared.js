const cursor = document.getElementById('cursorDot');

let rotation = 0;

function addCursorTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);
    
    requestAnimationFrame(() => {
        trail.style.opacity = '0.6';
        trail.style.width = '5px';
        trail.style.height = '5px';
    });
    
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => trail.remove(), 200);
    }, 80);
}

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    addCursorTrail(e.clientX, e.clientY);
});

function rotateCursor() {
    rotation += 0.5;
    const svg = cursor.querySelector('svg');
    if (svg) svg.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotateCursor);
}

function setupInteractiveElements() {
    const interactiveElements = document.querySelectorAll('a, button, .progress-slider, .progress-container');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.querySelector('svg').style.transform = `scale(1.4) rotate(${rotation}deg)`;
        });
        el.addEventListener('mouseleave', () => {
            cursor.querySelector('svg').style.transform = `rotate(${rotation}deg)`;
        });
    });
}

document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));

rotateCursor();
setupInteractiveElements();
