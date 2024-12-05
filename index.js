"use strict";

import { menuOpening } from "./js/burger.js";
import { addItemToFooterList } from "./js/createItem.js";
import { getData } from "./js/getData.js";
import { mainPageLoader } from "./js/mainPageLoader.js";
import { openModal } from "./js/openModal.js";

mainPageLoader();
menuOpening();
openModal();

document.addEventListener("DOMContentLoaded", () => {
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
