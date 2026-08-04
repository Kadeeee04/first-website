let count = 0;

const button = document.getElementById("imageButton");
const counter = document.getElementById("count");

button.addEventListener("click", function () {
    count++;
    counter.textContent = count;
});