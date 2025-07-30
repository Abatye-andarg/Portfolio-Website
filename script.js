
// Back to top button
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeLight() {
    var foote = document.getElementsByClassName("foot")[0];
      foote.classList.toggle("whiteFoot");
var container = document.getElementsByTagName("header")[0];
    container.classList.toggle("whiteContainer");

    var bodyElement = document.body;
    var whiteProject = document.getElementsByClassName("projects")[0];
    var toggleDark = document.getElementsByClassName("white")[0];

    bodyElement.classList.toggle("togBody");
    whiteProject.classList.toggle("whiteProjects");
    toggleDark.classList.toggle("dark");



    var proWhite = document.getElementsByClassName("projects-container")[0];
    proWhite.classList.toggle("proWhite-container");

    var home = document.getElementsByClassName("home")[0];
    home.classList.toggle("whiteHome");


    var whiteAddress = document.getElementsByClassName("address")[0];
    whiteAddress.classList.toggle("whiteAddress");

   var about = document.getElementsByClassName("about-section")[0];

about.classList.toggle("whiteAbout");

      var touchSection = document.getElementsByClassName("touch")[0];
  touchSection.classList.toggle("whiteTouch");

 
}


const text = [
  "Hi again! I'm Abatye, a passionate Software Engineering student currently pursuing my degree at Abu Dhabi University (adu.ac.ae).",
  "",
  "🎯 I'm deeply interested in designing user-friendly applications solving real-world problems with code,",
  "and constantly learning how to build smarter, cleaner systems.",
  "",
  "🛠️ I feel comfortable working with:",
  "    - Java (OOP, JavaFX, File I/O, Regex)",
  "    - HTML, CSS, and JavaScript (DOM, events, UI effects)",
  "    - MySQL and basic database operations",
  "",
  "💼 I'm actively looking for:",
  "    - Internship opportunities",
  "    - Open-source collaboration",
  "    - Small freelance or team projects",
  "",
  "🌱 I believe in learning by doing — and this portfolio is just one part of that journey!"
];

let line = 0;
let char = 0;
let typingStarted = false;

function typeLine() {
  const typedTextElement = document.getElementById("typed-text");

  if (line < text.length) {
    if (char < text[line].length) {
      typedTextElement.innerHTML += text[line][char];
      char++;
      setTimeout(typeLine, 25);
    } else {
      typedTextElement.innerHTML += '</br>'; // This is good
      char = 0;
      line++;
      setTimeout(typeLine, 200);
    }
  }
  if(line==text.length){
    document.getElementsByClassName("terminalEnd")[0].style.display = "inline";
  }
}

// Detect scroll into view
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function onScrollTriggerTyping() {
  const about = document.getElementsByClassName("about-section")[0];
  if (isInViewport(about) && !typingStarted) {
    typingStarted = true;
    typeLine();
  }
}

window.addEventListener("scroll", onScrollTriggerTyping);



