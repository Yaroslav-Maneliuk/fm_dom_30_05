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

prevBtn.addEventListener("click", () => {
  slider.currentIndex = slider.prevIndex;
  updateView();
});

nextBtn.addEventListener("click", () => {
  slider.currentIndex = slider.nextIndex;
  updateView();
});

//утсановить путь в атрибут src
function updateView() {
  image.setAttribute("src", slider.currentSlide);
}
updateView();

/*-----------------------------------------*/

const myButton = document.querySelectorAll("div>button");
const container = document.getElementById("container");

for (const btn of myButton) {
  btn.addEventListener(
    "click",
    ({
      target: {
        dataset: { color },
      },
      target,
    }) => {
      container.style.backgroundColor = color;
    }
  );
}
