const revealbtn1 = document.querySelector(".question1");
const revealbtn2 = document.querySelector(".question2");
const revealbtn3 = document.querySelector(".question3");
const revealbtn4 = document.querySelector(".question4");
const revealbtn5 = document.querySelector(".question5");
const revealbtn6 = document.querySelector(".question6");
const revealbtn7 = document.querySelector(".question7");
const revealbtn8 = document.querySelector(".question8");
const revealbtn9 = document.querySelector(".question9");
const revealbtn10 = document.querySelector(".question10");
const revealbtn11 = document.querySelector(".question11");
const revealbtn12 = document.querySelector(".question12");
const revealbtn13 = document.querySelector(".question13");
const box1 = document.querySelector(".question-1-animation");
const box2 = document.querySelector(".question-2-animation");
const box3 = document.querySelector(".question-3-animation");
const box4 = document.querySelector(".question-4-animation");
const box5 = document.querySelector(".question-5-animation");
const box6 = document.querySelector(".question-6-animation");
const box7 = document.querySelector(".question-7-animation");
const box8 = document.querySelector(".question-8-animation");
const box9 = document.querySelector(".question-9-animation");
const box10 = document.querySelector(".question-10-animation");
const box11 = document.querySelector(".question-11-animation");
const box12 = document.querySelector(".question-12-animation");
const box13 = document.querySelector(".question-13-animation");


revealbtn1.onclick = function() {
  box1.classList.toggle("question-1-animation-active");
};
revealbtn2.onclick = function() {
  box2.classList.toggle("question-2-animation-active");
};
revealbtn3.onclick = function() {
  box3.classList.toggle("question-3-animation-active");
};
revealbtn4.onclick = function() {
  box4.classList.toggle("question-4-animation-active");
};
revealbtn5.onclick = function() {
  box5.classList.toggle("question-5-animation-active");
};
revealbtn6.onclick = function() {
  box6.classList.toggle("question-6-animation-active");
};
revealbtn7.onclick = function() {
  box7.classList.toggle("question-7-animation-active");
};
revealbtn8.onclick = function() {
  box8.classList.toggle("question-8-animation-active");
};
revealbtn9.onclick = function() {
  box9.classList.toggle("question-9-animation-active");
};
revealbtn10.onclick = function() {
  box10.classList.toggle("question-10-animation-active");
};
revealbtn11.onclick = function() {
  box11.classList.toggle("question-11-animation-active");
};
revealbtn12.onclick = function() {
  box12.classList.toggle("question-12-animation-active");
};
revealbtn13.onclick = function() {
  box13.classList.toggle("question-13-animation-active");
};


document.addEventListener("click", function(event) {
  const isClickInside = box1.contains(event.target) || 
    revealbtn1.contains(event.target) || 
    revealbtn2.contains(event.target) || 
    revealbtn3.contains(event.target) || 
    revealbtn4.contains(event.target) || 
    revealbtn5.contains(event.target) || 
    revealbtn6.contains(event.target) || 
    revealbtn7.contains(event.target) || 
    revealbtn8.contains(event.target) || 
    revealbtn9.contains(event.target) || 
    revealbtn10.contains(event.target) || 
    revealbtn11.contains(event.target) || 
    revealbtn12.contains(event.target) || 
    revealbtn13.contains(event.target);

  if (!isClickInside) {
    box1.classList.remove("question-1-animation-active");
    box2.classList.remove("question-2-animation-active");
    box3.classList.remove("question-3-animation-active");
    box4.classList.remove("question-4-animation-active");
    box5.classList.remove("question-5-animation-active");
    box6.classList.remove("question-6-animation-active");
    box7.classList.remove("question-7-animation-active");
    box8.classList.remove("question-8-animation-active");
    box9.classList.remove("question-9-animation-active");
    box10.classList.remove("question-10-animation-active");
    box11.classList.remove("question-11-animation-active");
    box12.classList.remove("question-12-animation-active");
    box13.classList.remove("question-13-animation-active");
  }
});

const closeButton = document.querySelector(".close-btn");

closeButton.onclick = function() {
  box1.classList.remove("question-1-animation-active");
  box2.classList.remove("question-2-animation-active");
  box3.classList.remove("question-3-animation-active");
  box4.classList.remove("question-4-animation-active");
  box5.classList.remove("question-5-animation-active");
  box6.classList.remove("question-6-animation-active");
  box7.classList.remove("question-7-animation-active");
  box8.classList.remove("question-8-animation-active");
  box9.classList.remove("question-9-animation-active");
  box10.classList.remove("question-10-animation-active");
  box11.classList.remove("question-11-animation-active");
  box12.classList.remove("question-12-animation-active");
  box13.classList.remove("question-13-animation-active");
};