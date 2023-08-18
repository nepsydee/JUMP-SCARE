const hoverImage = document.getElementById('hover-image');
const hoverSound = document.getElementById('hover-sound');

hoverImage.addEventListener('mouseenter', () => {
    hoverSound.play();
});

hoverImage.addEventListener('mouseleave', () => {
    hoverSound.pause();
    hoverSound.currentTime = 0;
});  