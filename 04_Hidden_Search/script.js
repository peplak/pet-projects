let button = document.getElementById("btn");
let bar = document.getElementById("bar");

button.addEventListener("click", ev => {
    bar.classList.toggle("active")
} )