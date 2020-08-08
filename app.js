const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'blue', 'lightblue', 'pink', 'green', 'yellow', 'orange', 'black', 'darkgreen', 'purple'];

body.style.backgroundColor = "lightblue";
button.addEventListener('click', changeBackground);

function changeBackground() {
    const allColors = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[allColors];
}