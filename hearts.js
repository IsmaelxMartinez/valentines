document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.getElementById("heart-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random float speed
        heartContainer.appendChild(heart);

        // Pop effect on click
        heart.addEventListener("click", function () {
            heart.style.transform = "scale(0)";
            heart.style.opacity = "0";
            setTimeout(() => heart.remove(), 300);
        });

        // Remove heart after it floats away
        setTimeout(() => heart.remove(), 5000);
    }

    // Generate hearts every second
    setInterval(createHeart, 800);
});
