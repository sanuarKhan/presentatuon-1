/* Initialize Swiper -*/
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 30,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

//   // get next button
//   var next = document.getElementsByClassName("swiper-button-next");
//   // get slide
//   var slide = document.getElementById("swiper");
//   // Get the video
// var video = document.getElementById("myVideo");

// // Get the button
// var btn = document.getElementById("myBtn");

// // Pause and play the video, and change the button text
// slide.addEventListener('contextmenu', e => {
//   e.preventDefault();

// });

// function myFunction(e) {
//   e.preventDefault();
// }
