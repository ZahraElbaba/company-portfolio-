
const images = document.querySelectorAll('.first_box img');
images.forEach((img) => {
    img.addEventListener('click', function () {
        setTimeout(() => {
            img.style.transform = 'scale(1.1)';
        }, 1000);
    });
});