const answer = Math.floor(Math.random() * 100) + 1;

const input = document.getElementById("guess");
const button = document.getElementById("guess-button");
const message = document.getElementById("message");
const score = document.getElementById("score");

let guesses = 0;

input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            button.click();
        }
    });

button.addEventListener("click", () => {
    const guess = Number(input.value);
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.textContent = "Brotha, give me a number from 1 to 100.";
        return;
    }
    guesses++;
    score.textContent = guesses;

    if (guess < answer) {
        message.textContent = "too low! (like ur standerds)";
    }
    else if (guess > answer) {
        message.textContent = "too high! (like me)"
    }
    else {
        message.textContent = "You finally got something right in your life!";
        button.disabled = true;
    }

    input.value = "";
    input.focus();
});