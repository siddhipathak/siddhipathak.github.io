// script.js
let isYesClicked = false; // Track if "Yes" was clicked first

function showLove() {
    document.getElementById("response").classList.remove("hidden");
    createHearts(25);
    isYesClicked = true; // Mark "Yes" as clicked
}

function createHearts(numHearts) {
    for (let i = 0; i < numHearts; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            if (Math.random() < 0.5) {
                heart.classList.add('faded');
            }
            heart.style.left = `${Math.random() * (window.innerWidth - 20)}px`;
            heart.style.top = "0px"; // Start from the top
            document.body.appendChild(heart);
            heart.animate([{ top: "0px" }, { top: "100vh" }], {
                duration: 2000,
                iterations: 1,
                easing: "linear",
                fill: "forwards"
            });
            setTimeout(() => heart.remove(), 2000);
        }, i * 20);
    }
}

function changeNoToYes() {
    if (isYesClicked) {
        resetButtons(); // Reset if "Yes" was clicked first
        return;
    }

    document.getElementById("customAlert").style.display = "block";
    document.getElementById("no-button").innerText = "Yes! 💖";
    document.getElementById("no-button").setAttribute("onclick", "showLove()");
}

function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}

// Reset everything to original state
function resetButtons() {
    isYesClicked = false; // Reset the tracker
    document.getElementById("response").classList.add("hidden"); // Hide "Yay! I love you!" message
    document.getElementById("no-button").innerText = "No 💔"; // Reset "No" button text
    document.getElementById("no-button").setAttribute("onclick", "changeNoToYes()"); // Restore original function

    // Remove all hearts that were created
    document.querySelectorAll(".heart").forEach((heart) => heart.remove());
}
