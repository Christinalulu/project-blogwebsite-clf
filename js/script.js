// http://projectblogwebsiteclf.local/wp-json/wc/store/products
// https://mellow-present.flywheelsites.com/wp-json/wc/store/products

// const myApiCall =
//   "https://mellow-present.flywheelsites.com/wp-json/wc/store/products";

// async function callForInfo() {
//   try {
//     const allResponse = await fetch(myApiCall);
//     const allResponseJson = await allResponse.json();
//     console.log(allResponseJson);
//     console.log(allResponseJson[0].images.src.thumbnail);
//   } catch {}
// }
// callForInfo();

// Carousel indicator

//
// // selected dom and children array
// const carouselList = document.querySelector(".carousel-slide-container");
// const slides = Array.from(carouselList.children);
// //
// //dots
// const dotsNav = document.querySelector(".carousel-nav");
// const dots = Array.from(dotsNav.children);

// //
// // move from side to side
// const moveToSlide = (carouselList, currentSlide, targetSlide) => {
//   carouselList.style.transform = "translateX(-" + targetSlide.style.left + ")";
//   currentSlide.classlist.remove("current-item");
//   targetSlide.classlist.add("current-item");
// };

// // width of the container slide
// const slideWidth = slides[0].getBoundingClientRect().width;

// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + "px";
// };
// slides.forEach(setSlidePosition);

// //
// // moves to the side

// //
// // button right
// const nextBtn = document.querySelector(".btn-right");

// nextBtn.addEventListener("click", (e) => {
//   const currentSlide = carouselList.querySelector(".current-item");
//   const nextSlide = currentSlide.nextElementSibling;

//   moveToSlide(carouselList, currentSlide, nextSlide);
// });

// // button left
// const prevBtn = document.querySelector(".btn-left");

// prevBtn.addEventListener("click", (e) => {
//   const currentSlide = carouselList.querySelector(".current-item");
//   const prevSlide = currentSlide.previousElementSibling;
//   moveToSlide(carouselList, currentSlide, prevSlide);
// });

document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
    return ` <button class="circle-indicator"></button>`;
  });
  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel-nav">
    ${buttonsHtml.join("")}
    </div>
    `
  );

  const buttons = carousel.querySelectorAll(".circle-indicator");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("current-item"));
      buttons.forEach((button) => button.classList.remove("current-circle"));

      items[i].classList.add("current-item");
      buttons.classList.add("current-circle");
    });
  });
  items[0].classList.add("current-item");
  buttons[0].classList.add("current-circle");
});
