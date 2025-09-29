const slider = document.querySelector('.video-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const videoCards = document.querySelectorAll('.video-card');
let currentIndex = 0;
const totalCards = videoCards.length;

// Function to determine how many cards are visible
function getCardsVisible() {
    if (window.innerWidth < 640) {
        return 1;
    } else if (window.innerWidth < 1024) {
        return 2;
    } else {
        return 3;
    }
}

// Updates the slider position based on the current index
function updateSlider() {
    const cardWidth = videoCards[0].offsetWidth + 20; // Card width + margin
    slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

// Handles the 'next' button click
nextBtn.addEventListener('click', () => {
    const cardsPerPage = getCardsVisible();
    currentIndex += cardsPerPage;

    if (currentIndex >= totalCards) {
        currentIndex = 0;
    }
    updateSlider();
});

// Handles the 'previous' button click
prevBtn.addEventListener('click', () => {
    const cardsPerPage = getCardsVisible();
    currentIndex -= cardsPerPage;

    if (currentIndex < 0) {
        const lastGroupIndex = totalCards - (totalCards % cardsPerPage || cardsPerPage);
        currentIndex = lastGroupIndex;
    }
    updateSlider();
});

// Updates the slider position on window resize
window.addEventListener('resize', () => {
    updateSlider();
});
