"use strict";

import { menuOpening } from "./js/burger.js";
import { handleScroll } from "./js/handleScroll.js";
import { loadProducts } from "./js/loadProducts.js";
import { openModal } from "./js/openModal.js";

menuOpening();
openModal();

document.addEventListener("DOMContentLoaded", () => {
  const selectedItems = document.querySelector("#items-select");
  const footerList = document.querySelector(".footer-list");

  let itemsPerPage = parseInt(selectedItems.value);
  let currentPage = 1;

  loadProducts(currentPage, itemsPerPage);

  selectedItems.addEventListener("change", (event) => {
    itemsPerPage = parseInt(event.target.value);
    footerList.innerHTML = "";
    currentPage = 1;
    loadProducts(currentPage, itemsPerPage);
  });

  window.addEventListener("scroll", () => {
    handleScroll(currentPage, itemsPerPage, loadProducts);
  });
});
