const lightbox =
document.getElementById('lightbox');
const lightboxImg =
document.getElementById('lightbox-img');
const closeBtn =
document.querySelector('.close');

document.querySelectorAll('.card img').forEach(image => {
    image.onclick = () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
    };
});

closeBtn.onclick = () => {
    lightbox.style.display = 'none';
};

lightbox.onclick = (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
};