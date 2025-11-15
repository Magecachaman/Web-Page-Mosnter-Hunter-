let background = document.getElementById("background");
// let liebre = document.getElementById("liebre");
// let seikret = document.getElementById("seikret");
let text = document.getElementById("text");

window.addEventListener('scroll', parallax);

function parallax() {
  const value = window.scrollY;
  background.style.top = value * 0.5 + 'px';
  // liebre.style.left = value * 0.5 + 'px';
  // seikret.style.right = value * 0.5 + 'px';
  text.style.top = value * 1 + 'px';
}
