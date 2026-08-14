const menuBtn=document.getElementById("menu-btn");
const navbar=document.getElementById("navbar");
menuBtn.addEventListener("click",()=>{navbar.classList.toggle("show");const icon=menuBtn.querySelector("i");icon.classList.toggle("fa-bars");icon.classList.toggle("fa-xmark");});
document.querySelectorAll(".navbar a").forEach(link=>link.addEventListener("click",()=>{navbar.classList.remove("show");const icon=menuBtn.querySelector("i");icon.classList.remove("fa-xmark");icon.classList.add("fa-bars");}));

const typingElement=document.getElementById("typing");
const words=["PHP Developer","Web Developer","MySQL Developer","Problem Solver"];
let wordIndex=0,charIndex=0,deleting=false;
function typeEffect(){const word=words[wordIndex];if(!deleting){typingElement.textContent=word.substring(0,charIndex+1);charIndex++;if(charIndex===word.length){deleting=true;setTimeout(typeEffect,1800);return;}}else{typingElement.textContent=word.substring(0,charIndex-1);charIndex--;if(charIndex===0){deleting=false;wordIndex=(wordIndex+1)%words.length;}}setTimeout(typeEffect,deleting?60:100);}
typeEffect();

const themeBtn=document.getElementById("theme-btn");
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("light-mode");const icon=themeBtn.querySelector("i");const light=document.body.classList.contains("light-mode");icon.classList.toggle("fa-moon",!light);icon.classList.toggle("fa-sun",light);localStorage.setItem("theme",light?"light":"dark");});
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light-mode");const icon=themeBtn.querySelector("i");icon.classList.remove("fa-moon");icon.classList.add("fa-sun");}

const sections=document.querySelectorAll("section"),navLinks=document.querySelectorAll(".navbar a");
window.addEventListener("scroll",()=>{let current="";sections.forEach(section=>{if(window.scrollY>=section.offsetTop-150)current=section.id;});navLinks.forEach(link=>{link.classList.toggle("active",link.getAttribute("href")==="#"+current);});});

const scrollTop=document.getElementById("scroll-top");
window.addEventListener("scroll",()=>scrollTop.classList.toggle("show",window.scrollY>500));
scrollTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

document.getElementById("contact-form").addEventListener("submit",e=>{e.preventDefault();document.getElementById("form-message").textContent="Thank you! The form is currently frontend-only. Connect it to PHP to send messages.";e.target.reset();});
document.getElementById("year").textContent=new Date().getFullYear();
window.addEventListener("resize",()=>{if(window.innerWidth>900){navbar.classList.remove("show");const icon=menuBtn.querySelector("i");icon.classList.remove("fa-xmark");icon.classList.add("fa-bars");}});

const revealElements=document.querySelectorAll(".skill-card,.project-card,.service-card,.education-card,.timeline-content");
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)";observer.unobserve(entry.target);}})},{threshold:.1});
revealElements.forEach(el=>{el.style.opacity="0";el.style.transform="translateY(30px)";el.style.transition=".6s ease";observer.observe(el);});
