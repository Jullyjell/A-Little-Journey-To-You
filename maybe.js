const openNote = document.getElementById("openNote");
const closeNote = document.getElementById("closeNote");
const noteOverlay = document.getElementById("noteOverlay");
const continueEnding = document.getElementById("continueEnding");

// OPEN POPUP
openNote.addEventListener("click", () => {
    noteOverlay.classList.add("show");
});

// CLOSE POPUP
closeNote.addEventListener("click", () => {
    noteOverlay.classList.remove("show");
});

// CLOSE WHEN CLICKING OUTSIDE
noteOverlay.addEventListener("click", (event) => {
    const clickedInsideCard = event.target.closest(".note-card");

    if (!clickedInsideCard) {
        noteOverlay.classList.remove("show");
    }
});

// CLOSE WITH ESCAPE
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        noteOverlay.classList.remove("show");
    }
});

// GO TO ENDING PAGE
continueEnding.addEventListener("click", () => {
    window.location.href = "ending.html";
});

// DREAMY LOVE RAIN
const heartSymbols = ["♡", "♥", "💗", "💕", "💖"];
const atmosphere = document.getElementById("dreamyAtmosphere");

function createHeart() {
    if (!atmosphere) return;

    const heart = document.createElement("span");

    heart.classList.add("dream-particle");

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.setProperty(
        "--particle-size",
        Math.random() * 12 + 12 + "px"
    );

    heart.style.setProperty(
        "--particle-duration",
        Math.random() * 5 + 6 + "s"
    );

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 11000);
}

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (!reducedMotion.matches) {
    setInterval(createHeart, 650);
}