// Définir la fonction pour naviguer vers une slide spécifique
function navigateToSlide(slideIndex) {
    console.log("Navigating to slide", slideIndex);
}

document.addEventListener("DOMContentLoaded", function () {
    const bannerContainer = document.getElementById('banner');
    const dotsContainer = bannerContainer.querySelector('.dots');
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

    // Récupérer les éléments HTML représentant les images
    const bannerImages = Array.from(bannerContainer.querySelectorAll('.banner-img'));
	console.log(bannerImages);

    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');

        // Mettre en surbrillance le premier dot (la première slide)
        if (index === 0) {
            dot.classList.add('dot_selected');
        }

        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            navigateToSlide(index);

            // Réinitialiser les classes des dots
            bannerContainer.querySelectorAll('.dots .dot').forEach((dot, dotIndex) => {
                dot.classList.remove('dot_selected');
                if (dotIndex === index) {
                    dot.classList.add('dot_selected');
                }
            });
        });
    });   
});

// Sélectionner les flèches
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

// Vérifier les flèches
console.log(arrowLeft);
console.log(arrowRight);

// Ajout d'un event listener pour chaque flèche
arrowLeft.addEventListener("click", function() {
    console.log("Left arrow clicked");
});

arrowRight.addEventListener("click", function() {
    console.log("Right arrow clicked");
});