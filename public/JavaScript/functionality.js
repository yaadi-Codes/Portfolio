const sentences = [
    "Hi, I’m Malique Edwards — a Junior Full-Stack Web Developer.",
    "I love crafting modern, responsive web experiences with clean, effective design.",
    "This portfolio highlights the projects I’ve worked on and the skills I’ve gained along the way.",
    "Take a look around, and feel free to reach out — I’d love to connect!"
];

const textElement = document.getElementById('typed-text');
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;
let pause = false;
let initalDelay = false;

function typeEffect() {
    if (!initalDelay) {
        setTimeout(typeEffect, 3000); // Initial delay before starting
        initalDelay = true;
        return;
    }
    const currentSentence = sentences[sentenceIndex];
    const currentChar = currentSentence[charIndex];
    let delay = isDeleting ? 30 : 100;

    if (!pause) {
        let visibleText = currentSentence.substring(0, charIndex+1);
        textElement.textContent = visibleText;
        if (!isDeleting && charIndex < currentSentence.length) {
            charIndex++;
            
            

            if (currentChar === ',') {
                pause = true;
                setTimeout(() => {
                    pause = false;
                    typeEffect();
                }, 500); 
                return;
            }

            if (currentChar === '.' || currentChar === '!') {
                pause = true;
                setTimeout(() => {
                pause = false;
                isDeleting = true;
                typeEffect();
                }, 2000); 
                return;
            }

        } else if (isDeleting && charIndex >= 0) {
            charIndex--;
            delay = 30;
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            delay = 500; // Delay before starting the next sentence
        }
    }

    setTimeout(typeEffect, delay);
}

window.addEventListener('DOMContentLoaded', typeEffect);
