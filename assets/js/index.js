"use strict";

const cardsList = document.getElementById("cards-list");
const HTMLCards = actors.map((actor) => createCard(actor));

function createCard(actor) {
  const card = document.createElement("li");
  card.classList.add("card-wrapper");

  const container = document.createElement("article");
  container.classList.add("card-container");

  const photo = document.createElement("img");
  photo.classList.add("card-photo");
  photo.setAttribute('src', actor.photo);
  photo.setAttribute('alt', actor.name);

  const fullName = document.createElement("h2");
  fullName.classList.add("card-fullName");
  fullName.append(document.createTextNode(actor.name));

  const description = document.createElement("p");
  description.classList.add("card-description");
  description.append(document.createTextNode(actor.birthdate));

  container.append(photo, fullName, description);

  card.append(container);
  return card;
}

// cardsList.append(...HTMLCards);
