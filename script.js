document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".certifications-carousel img");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    
    prevButton.textContent = "❮";
    nextButton.textContent = "❯";
    prevButton.classList.add("carousel-button", "left");
    nextButton.classList.add("carousel-button", "right");
    
    document.querySelector(".certifications-carousel").appendChild(prevButton);
    document.querySelector(".certifications-carousel").appendChild(nextButton);

    let index = 0;
    const totalImages = images.length;
    
    function updateCarousel() {
        const offset = -index * 110; // Adjusting for spacing
        carouselContainer.style.transform = `translateX(${offset}px)`;
    }
    
    prevButton.addEventListener("click", function() {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });
    
    nextButton.addEventListener("click", function() {
        if (index < totalImages - 1) {
            index++;
            updateCarousel();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elementsToReveal = document.querySelectorAll(".reveal, .timeline-item, .timeline-content, .diplomes-container, .stages-container");

    function revealOnScroll() {
        let windowHeight = window.innerHeight;
        elementsToReveal.forEach(el => {
            let elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Pour déclencher au chargement
});

document.addEventListener("scroll", function () {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
});