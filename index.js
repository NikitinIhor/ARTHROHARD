"use strict";

window.addEventListener("load", () => {
  const bigWrapper = document.querySelector(".big-wrapper");
  const loader = document.querySelector(".loader");
  const dog = document.querySelector(".loader-dog");

  setTimeout(() => {
    dog.style.opacity = 0;
    loader.style.opacity = 0;
    dog.style.transition = "opacity 1s ease, visibility 0s linear 1s";
    loader.style.transition = "opacity 1s ease, visibility 0s linear 1s";

    setTimeout(() => {
      dog.style.display = "none";
      loader.style.display = "none";
      bigWrapper.style.display = "block";
      bigWrapper.style.transition = "opacity 1s ease";
      bigWrapper.style.opacity = 1;
    }, 1500);
  }, 4000);
});

import { menuOpening } from "./js/burger.js";
import { addItemToFooterList } from "./js/createItem.js";
import { getData } from "./js/getData.js";
import { openModal } from "./js/openModal.js";

document.addEventListener("DOMContentLoaded", () => {
  menuOpening();
  openModal();

  const selectedItems = document.querySelector("#items-select");
  const footerList = document.querySelector(".footer-list");

  let itemsPerPage = parseInt(selectedItems.value);

  getData(1, itemsPerPage)
    .then((res) => {
      if (res.data) {
        res.data.map((item) => {
          addItemToFooterList(item.id, item.text);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });

  selectedItems.addEventListener("change", (event) => {
    itemsPerPage = parseInt(event.target.value);

    footerList.innerHTML = "";

    getData(1, itemsPerPage)
      .then((res) => {
        if (res && res.data) {
          res.data.map((item) => {
            addItemToFooterList(item.id, item.text);
          });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  });
});
