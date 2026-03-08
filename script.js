const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const scrollBar = document.getElementById("scrollBar");

/* Mobile Menu */

menuBtn.onclick = () => {
navLinks.classList.toggle("active");
};

/* Reveal Animation */

function revealSections(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;
const elementTop=reveals[i].getBoundingClientRect().top;
const revealPoint=120;

if(elementTop<windowHeight-revealPoint){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll",revealSections);

/* Scroll Progress Indicator */

window.addEventListener("scroll", () => {

const scrollTop = window.scrollY;
const docHeight = document.documentElement.scrollHeight - window.innerHeight;

const scrollPercent = (scrollTop / docHeight) * 100;

scrollBar.style.width = scrollPercent + "%";

});