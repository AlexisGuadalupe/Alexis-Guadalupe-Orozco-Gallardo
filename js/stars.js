document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.position = 'absolute';
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.opacity = Math.random();
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        starsContainer.appendChild(star);
    }

    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }
});
