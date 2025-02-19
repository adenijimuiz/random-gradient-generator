
// Function to generate a random hexadecimal color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a random gradient with random direction and three colors
function getRandomGradient() {
    let color1 = getRandomColor();
    let color2 = getRandomColor();
    let color3 = getRandomColor(); // Adding a third color for a richer gradient

    let directions = ["to right", "to left", "to bottom", "to top", "135deg", "225deg"];
    let randomDirection = directions[Math.floor(Math.random() * directions.length)];

    return `linear-gradient(${randomDirection}, ${color1}, ${color2}, ${color3})`;
}

// Select elements
const colorBox = document.getElementById("colorBox");
const changeColorBtn = document.getElementById("changeColorBtn");
const autoChangeBtn = document.getElementById("autoChangeBtn");

let autoChangeInterval; // Store interval for auto mode

// Event listener for manual gradient change
changeColorBtn.addEventListener("click", () => {
    colorBox.style.background = getRandomGradient(); // Apply random gradient
});

// Event listener for auto gradient change
autoChangeBtn.addEventListener("click", () => {
    if (!autoChangeInterval) {
        autoChangeInterval = setInterval(() => {
            colorBox.style.background = getRandomGradient();
        }, 1000); // Change gradient every second
        autoChangeBtn.textContent = "Stop Auto Change";
    } else {
        clearInterval(autoChangeInterval);
        autoChangeInterval = null;
        autoChangeBtn.textContent = "Start Auto Change";
    }
});


