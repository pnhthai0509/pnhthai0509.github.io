document.addEventListener("DOMContentLoaded", function() {
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

  if (revealbtn1) {
    revealbtn1.onclick = function() {
      box1.classList.toggle("question-1-animation-active");
    };
  }
  if (revealbtn2) {
    revealbtn2.onclick = function() {
      box2.classList.toggle("question-2-animation-active");
    };
  }
  if (revealbtn3) {
    revealbtn3.onclick = function() {
      box3.classList.toggle("question-3-animation-active");
    };
  }
  if (revealbtn4) {
    revealbtn4.onclick = function() {
      box4.classList.toggle("question-4-animation-active");
    };
  }
  if (revealbtn5) {
    revealbtn5.onclick = function() {
      box5.classList.toggle("question-5-animation-active");
    };
  }
  if (revealbtn6) {
    revealbtn6.onclick = function() {
      box6.classList.toggle("question-6-animation-active");
    };
  }
  if (revealbtn7) {
    revealbtn7.onclick = function() {
      box7.classList.toggle("question-7-animation-active");
    };
  }
  if (revealbtn8) {
    revealbtn8.onclick = function() {
      box8.classList.toggle("question-8-animation-active");
    };
  }
  if (revealbtn9) {
    revealbtn9.onclick = function() {
      box9.classList.toggle("question-9-animation-active");
    };
  }
  if (revealbtn10) {
    revealbtn10.onclick = function() {
      box10.classList.toggle("question-10-animation-active");
    };
  }
  if (revealbtn11) {
    revealbtn11.onclick = function() {
      box11.classList.toggle("question-11-animation-active");
    };
  }
  if (revealbtn12) {
    revealbtn12.onclick = function() {
      box12.classList.toggle("question-12-animation-active");
    };
  }
  if (revealbtn13) {
    revealbtn13.onclick = function() {
      box13.classList.toggle("question-13-animation-active");
    };
  }

  document.addEventListener("click", function(event) {
    const isClickInside = (box1 && (box1.contains(event.target) || revealbtn1.contains(event.target))) || 
      (box2 && (box2.contains(event.target) || revealbtn2.contains(event.target))) || 
      (box3 && (box3.contains(event.target) || revealbtn3.contains(event.target))) || 
      (box4 && (box4.contains(event.target) || revealbtn4.contains(event.target))) || 
      (box5 && (box5.contains(event.target) || revealbtn5.contains(event.target))) || 
      (box6 && (box6.contains(event.target) || revealbtn6.contains(event.target))) || 
      (box7 && (box7.contains(event.target) || revealbtn7.contains(event.target))) || 
      (box8 && (box8.contains(event.target) || revealbtn8.contains(event.target))) || 
      (box9 && (box9.contains(event.target) || revealbtn9.contains(event.target))) || 
      (box10 && (box10.contains(event.target) || revealbtn10.contains(event.target))) || 
      (box11 && (box11.contains(event.target) || revealbtn11.contains(event.target))) || 
      (box12 && (box12.contains(event.target) || revealbtn12.contains(event.target))) || 
      (box13 && (box13.contains(event.target) || revealbtn13.contains(event.target)));

    if (!isClickInside) {
      box1 && box1.classList.remove("question-1-animation-active");
      box2 && box2.classList.remove("question-2-animation-active");
      box3 && box3.classList.remove("question-3-animation-active");
      box4 && box4.classList.remove("question-4-animation-active");
      box5 && box5.classList.remove("question-5-animation-active");
      box6 && box6.classList.remove("question-6-animation-active");
      box7 && box7.classList.remove("question-7-animation-active");
      box8 && box8.classList.remove("question-8-animation-active");
      box9 && box9.classList.remove("question-9-animation-active");
      box10 && box10.classList.remove("question-10-animation-active");
      box11 && box11.classList.remove("question-11-animation-active");
      box12 && box12.classList.remove("question-12-animation-active");
      box13 && box13.classList.remove("question-13-animation-active");
    }
  });

  const closeButton = document.querySelector(".close-btn");

  if (closeButton) {
    closeButton.onclick = function() {
      box1 && box1.classList.remove("question-1-animation-active");
      box2 && box2.classList.remove("question-2-animation-active");
      box3 && box3.classList.remove("question-3-animation-active");
      box4 && box4.classList.remove("question-4-animation-active");
      box5 && box5.classList.remove("question-5-animation-active");
      box6 && box6.classList.remove("question-6-animation-active");
      box7 && box7.classList.remove("question-7-animation-active");
      box8 && box8.classList.remove("question-8-animation-active");
      box9 && box9.classList.remove("question-9-animation-active");
      box10 && box10.classList.remove("question-10-animation-active");
      box11 && box11.classList.remove("question-11-animation-active");
      box12 && box12.classList.remove("question-12-animation-active");
      box13 && box13.classList.remove("question-13-animation-active");
    };
  }
});
