
const text = "Welcome";
let i = 0;
const speed = 150; 

function typeWriter() {
  if (i < text.length) {
    document.getElementById("welcome-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


window.onload = typeWriter;