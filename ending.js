const dreamyAtmosphere = document.getElementById("dreamyAtmosphere");

const endingEnvelope = document.getElementById("endingEnvelope");
const openEndingLetter = document.getElementById("openEndingLetter");
const endingLetter = document.getElementById("endingLetter");
const endingFooter = document.getElementById("endingFooter");
const envelopeHint = document.querySelector(".envelope-hint");


// ==============================
// LOVE RAIN
// ==============================

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (dreamyAtmosphere && !prefersReducedMotion) {
    dreamyAtmosphere.style.setProperty("--dream-intensity", 0.75);

    function createDreamParticle() {
        if (
            dreamyAtmosphere.querySelectorAll(".dream-particle").length >= 16
        ) {
            return;
        }

        const particle = document.createElement("span");

        const isHeart = Math.random() > 0.45;

        particle.classList.add(
            "dream-particle",
            isHeart ? "dream-heart" : "dream-petal"
        );

        particle.textContent = isHeart ? "♡" : "✿";

        const size = Math.random() * 12 + 10;
        const duration = Math.random() * 7 + 10;
        const horizontalPosition = Math.random() * 100;

        particle.style.left = horizontalPosition + "%";
        particle.style.fontSize = size + "px";
        particle.style.animationDuration = duration + "s";

        dreamyAtmosphere.appendChild(particle);

        setTimeout(function () {
            particle.remove();
        }, duration * 1000);
    }

    setInterval(createDreamParticle, 900);
}


// ==============================
// OPEN THE ENDING LETTER
// ==============================

openEndingLetter.addEventListener("click", function () {
    // Prevent the button from being clicked repeatedly
    openEndingLetter.disabled = true;

    // Open the envelope
    endingEnvelope.classList.add("opened");

    // Hide the hint
    envelopeHint.style.display = "none";

    // Reveal the letter
    setTimeout(function () {
        endingLetter.classList.add("show");
        openEndingLetter.style.display = "none";
    }, 700);

    // Reveal the final message
    setTimeout(function () {
        endingFooter.classList.add("show");
    }, 2500);
});