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
  let currentPage = 1;

  const loadProducts = (page, itemsPerPage) => {
    getData(page, itemsPerPage)
      .then((res) => {
        if (res) {
          res.data.forEach((item) => {
            addItemToFooterList(item.id, item.text);
          });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  loadProducts(currentPage, itemsPerPage);

  selectedItems.addEventListener("change", (event) => {
    itemsPerPage = parseInt(event.target.value);
    footerList.innerHTML = "";
    currentPage = 1;
    loadProducts(currentPage, itemsPerPage);
  });

  const handleScroll = () => {
    const pageBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (pageBottom) {
      currentPage++;
      loadProducts(currentPage, itemsPerPage);
    }
  };

  window.addEventListener("scroll", handleScroll);
});
