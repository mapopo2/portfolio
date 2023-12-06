console.log("Hello World");

let year = (new Date()).getFullYear();
document.querySelector("body .copyright-date").innerHTML = "© " + year + ". ";

let i = 0;
let txt ="<h1>Hello, my name is Takudzwa</h1>";
let speed = 50;

window.addEventListener("load", () => {
  typeWriter();
  setTimeout(reveal, 2000);
});

function typeWriter() { 
  if (i < txt.length) {
    document.querySelector("body .heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }};

function reveal() {
    document.querySelector(" body .heading-text").classList.remove("hide");
    document.querySelector(" body .skills-box").classList.remove("hide");
    document.querySelector(" body .home-btns").classList.remove("hide");
    document.querySelector("body #projects").classList.remove("hide");
    document.querySelector(" body #contact").classList.remove("hide");
    document.querySelector(" body #footer").classList.remove("hide");
};
