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

            // Random X position
            const left = Math.random() * window.innerWidth;
            heart.style.left = `${left}px`;

            // Random fall duration
            const duration = Math.random() * 5 + 2; // Between 2 to 7 seconds
            heart.style.animation = `heartFall ${duration}s linear`;

            // Random fading effect
            if (Math.random() < 0.5) {
                heart.style.opacity = "0.6";
            }

            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), duration * 1000);
        }, i * 150); // Staggered delay
    }
}



function changeNoToYes() {
    document.getElementById("customAlert").style.display = "block";
    
    // Disable both "Yes" (original) and "No" (which will convert to Yes)
    document.getElementById("yes-button").disabled = true;
    document.getElementById("yes-button").style.opacity = "0.5";

    document.getElementById("no-button").disabled = true;
    document.getElementById("no-button").style.opacity = "0.5";

    document.getElementById("no-button").innerText = "Yes! 💖";
    document.getElementById("no-button").setAttribute("onclick", "showLove()");
}

function closeAlert() {
    document.getElementById("customAlert").style.display = "none";

    document.getElementById("yes-button").disabled = false;
    document.getElementById("yes-button").style.opacity = "1";

    document.getElementById("no-button").disabled = false;
    document.getElementById("no-button").style.opacity = "1";
}

// Reset everything to original state
function resetButtons() {
    isYesClicked = false; 
    document.getElementById("response").classList.add("hidden"); 
    document.getElementById("no-button").innerText = "No 💔"; 
    document.getElementById("no-button").setAttribute("onclick", "changeNoToYes()");

    // Remove all hearts that were created
    document.querySelectorAll(".heart").forEach((heart) => heart.remove());
}
