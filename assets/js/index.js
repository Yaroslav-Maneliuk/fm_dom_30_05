"use strict";

//create DB with image: квадратная, портретная, альбомная
const imagesDB = [
  "https://www.alessandromichelazzi.com/wp-content/uploads/2018/09/OnePlus-6-Portrait-Session-professional-photographer-15.jpg",
  "https://besthqwallpapers.com/Uploads/22-11-2017/29941/thumb2-sea-landscape-waves-beach-sand-clouds.jpg",
  "https://www.424salt.com/wp/wp-content/uploads/2017/03/dead-sea-1x1.jpg",
];

//create slider
const slider = new Slider(imagesDB);

//img
const image = document.querySelector(".slide>img");

//prev,next
const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container>button"
);

const btnSliderHandler =
  (direction = "next") =>
  () => {
    // slider.currentIndex = ;
    updateView();
  };

// prevBtn.addEventListener("click", f);
// nextBtn.addEventListener("click", f);

// prevBtn.addEventListener("click", () => {
//   slider.currentIndex = slider.prevIndex;
//   updateView();
// });

// nextBtn.addEventListener("click", () => {
//   slider.currentIndex = slider.nextIndex;
//   updateView();
// });

//утсановить путь в атрибут src
function updateView() {
  image.setAttribute("src", slider.currentSlide);
}
updateView();

/*-----------------------------------------*/

const unique = document.getElementById("unique");

function btnUniqueHandler(event) {
  console.log('target:', event.target);
  console.log('currentTarget:', event.currentTarget);
  // unique.removeEventListener("click", btnUniqueHandler);
  // unique.disabled = true;
}

unique.addEventListener("click", btnUniqueHandler);

// unique.dispatchEvent(new MouseEvent("click"));

window.addEventListener("click", btnUniqueHandler);
document.addEventListener("click", btnUniqueHandler);
document.body.addEventListener("click", btnUniqueHandler);



