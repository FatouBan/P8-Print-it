const slides = [
			{
				"image": "slide1.jpg",
				"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
			},
			{
				"image": "slide2.jpg",
				"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
			},
			{
				"image": "slide3.jpg",
				"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
			},
			{
				"image": "slide4.png",
				"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
			}
		];

const bannerImages = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

let navigateToSlide = 0;

// Event listener pour le clic flèche droite
arrowRight.addEventListener('click', function () {
    navigateToSlide = (navigateToSlide + 1) ;
    updateShowSlides(navigateToSlide, 'right');
    updateDots(navigateToSlide); 
    console.log('clicked to arrowRight')
});

    // Event listener pour le clic flèche gauche
arrowLeft.addEventListener('click', function () {
    navigateToSlide = (navigateToSlide - 1);
    updateShowSlides(navigateToSlide, 'left');
    updateDots(navigateToSlide);
    console.log('clicked to arrowLeft')
});

function updateDots(index) {
    dots.forEach((dot, i) => {
    // La condition vérifie si l'index actuel (i) est égal à l'index du slide actuel.
        if (i === index) {
            dot.classList.add('dot_selected'); 
        } else {
            dot.classList.remove('dot_selected'); 
        }
    });
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte
function updateShowSlides(index, direction) {
      if (navigateToSlide === -1 && direction === 'left') {
        navigateToSlide = slides.length - 1;
    } else if (navigateToSlide === slides.length && direction === 'right') {
        navigateToSlide = 0;
    }

    const imagePath = `assets/images/slideshow/${slides[navigateToSlide].image}`;
    bannerImages.src = imagePath;
    
    const tagLine = slides[navigateToSlide].tagLine;
    document.querySelector('p').innerHTML = tagLine;
}