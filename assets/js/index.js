"use strict";

const cardsList = document.getElementById("cards-list");
const HTMLCards = actors
  .filter(({ name, photo }) => name || photo)
  .map((actor) => createCard(actor));

function createCard(actor) {
  const card = document.createElement("li");
  card.classList.add("card-wrapper");

  const container = document.createElement("article");
  container.classList.add("card-container");

  // const photoWrapper = document.createElement("div");
  // photoWrapper.classList.add("card-photo-wrapper");

  // const initials = document.createElement("div");
  // initials.classList.add("card-initials");
  // initials.style.backgroundColor = stringToColour(actor.name);
  // initials.append(
  //   document.createTextNode(actor.name[0] || "NN")
  // ); /* homework */

  // photoWrapper.append(initials, createImage(actor));

  const fullName = document.createElement("h2");
  fullName.classList.add("card-fullName");
  fullName.append(document.createTextNode(actor.name || "No name"));

  const description = document.createElement("p");
  description.classList.add("card-description");
  description.append(
    document.createTextNode(actor.birthdate || "Month d,YYYY")
  );

  container.append(photoWrapper, fullName, description);

  card.append(container);
  return card;
}

cardsList.append(...HTMLCards);

function createImage({photo, name}){
  const img = document.createElement("img");
  img.classList.add("card-photo");
  img.setAttribute("src", photo);
  img.setAttribute("alt", name);
  img.addEventListener("error", photoErrorHandler);
  return img;
}

function createWrapper(actor){
  const photoWrapper = document.createElement("div");
  photoWrapper.classList.add("card-photo-wrapper");

  const initials = document.createElement("div");
  initials.classList.add("card-initials");
  initials.style.backgroundColor = stringToColour(actor.name);
  initials.append(
    document.createTextNode(actor.name[0] || "NN")
  ); /* homework */

  photoWrapper.append(initials, createImage(actor));
}



/* handler */

function photoErrorHandler({ target }) {
  target.remove();
}

/* utilits */

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).slice(-2);
  }
  return colour;
}
