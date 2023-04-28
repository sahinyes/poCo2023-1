var box = document.getElementsByClassName("container")
var mouseposText = document.getElementById("loc")

let mousepos = {x:undefined, y:undefined}

window.addEventListener('mousemove', (event) => {
    // mousepos = { x: event.clientX, y: event.clientY }; 
    // mouseposText.textContent = `(${mousepos.x}, ${mousepos.y})`;
    box.style.left = event.clientX + "px";
    box.style.top = event.clientY + "px";
});
