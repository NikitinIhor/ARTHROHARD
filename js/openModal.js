import { getData } from "./getData.js";

export const openModal = () => {
  const modal = document.querySelector(".footer-modal");
  const overlay = document.querySelector(".footer-overlay");
  const closeModal = document.querySelector(".modal-close-btn");
  const footerList = document.querySelector(".footer-list");

  const handleOpenmodal = async (e) => {
    const item = e.target.closest(".footer-item");
    if (item) {
      overlay.classList.add("showModalOverlay");
      modal.classList.add("modalIsOpen");

      window.location.href = "#modal";

      const footerProducts = modal.querySelector(".footer-products");
      if (footerProducts) {
        footerProducts.innerHTML = "";
      }
    }

    const itemID =
      item.querySelector("[data-id]")?.dataset.id || item.dataset.id;

    if (itemID) {
      const itemData = await getData(1, itemID);

      const item = itemData.data[itemID - 1];
      const itemId = item.id;
      const itemText = item.text;
      const itemPrice = `${
        Math.floor(Math.random() * (500 - 99 + 1)) + 10
      } zl.`;

      displayItemData(itemId, itemText, itemPrice);
    }
  };

  const displayItemData = (itemId, itemText, itemPrice) => {
    const footerProducts = modal.querySelector(".footer-products");
    if (footerProducts) {
      footerProducts.innerHTML = `
   <div class="products-title">ID <span id="id">${itemId}</span></div>
             <div class="products-title">Nazwa: <span id="name">${itemText}</span></div>
              <div class="products-title">Wartość: <span id="count">${itemPrice}</span></div>
      `;
    }
  };

  const handleCloseModal = () => {
    overlay.classList.remove("showModalOverlay");
    modal.classList.remove("modalIsOpen");
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlay) {
      handleCloseModal();
    }
  };

  const handleEscapeClick = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  if (footerList) {
    footerList.addEventListener("click", handleOpenmodal);
  }
  closeModal.addEventListener("click", handleCloseModal);
  overlay.addEventListener("click", handleOverlayClick);
  document.addEventListener("keydown", handleEscapeClick);
};
