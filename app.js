document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yes-btn");
  const noButton = document.getElementById("no-btn");
  const message = document.getElementById("message");
  const nextLink = document.getElementById("next-link");
  let noHoverCount = 0;

  noButton.addEventListener("mouseenter", function () {
    if (noHoverCount >= 4) {
      message.textContent = "How could you...";
      message.classList.remove("hidden");
      return;
    }
    const randomX = Math.random() * 80 + 10;
    const randomY = Math.random() * 80 + 10;
    noButton.style.position = "absolute";
    noButton.style.top = `${randomY}%`;
    noButton.style.left = `${randomX}%`;
    noHoverCount++;
  });

  yesButton.addEventListener("click", function () {
    message.textContent = "Good, I was gonna beat you up!";
    message.classList.remove("hidden");
    nextLink.classList.remove("hidden");
  });
});
