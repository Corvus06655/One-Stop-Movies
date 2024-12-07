// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
    // Select all download buttons
    const downloadButtons = document.querySelectorAll(".details a");

    // Add click event listeners to each button
    downloadButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const movieTitle = button.parentElement.querySelector("h3").textContent;
            alert(`You are downloading "${movieTitle}". Enjoy the movie!`);
        });
    });
});
