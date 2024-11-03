// Function Fade-In
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleScroll);

window.addEventListener('load', handleScroll);

// Function Slide
function loadAnimations() {
    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach(element => {
        element.classList.add('visible');
    });
}

window.addEventListener('load', loadAnimations);