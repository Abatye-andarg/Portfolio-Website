
// Back to top button
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeLight() {
    
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
    var aboutWhite = document.getElementsByClassName("about")[0];
    aboutWhite.classList.toggle("aboutWhite");


    var whiteAddress = document.getElementsByClassName("address")[0];
    whiteAddress.classList.toggle("whiteAddress");

   var about = document.getElementsByClassName("about")[0];

about.classList.toggle("whiteAbout");

      var touchSection = document.getElementsByClassName("touch")[0];
  touchSection.classList.toggle("whiteTouch");

 var foot = document.getElementsByClassName("foot")[0];
  foot.classList.toggle("whiteFoot");
}
