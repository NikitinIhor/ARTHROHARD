export const menuOpening = () => {
  const openBurger = document.querySelector(".burger-icon ");
  const closeBurger = document.querySelector(".close");
  const overlay = document.querySelector(".overlay ");
  const menu = document.querySelector(".menu-toggle ");
  const menuList = document.querySelectorAll(".nav-menu li a");

  const handleOpenBurger = () => {
    overlay.classList.add("isOpen");
    openBurger.style.display = "none";
  };
  const handleCloseBurger = () => {
    overlay.classList.remove("isOpen");
    menu.checked = false;
    openBurger.style.display = "flex";
  };

  menuList.forEach((el) => el.addEventListener("click", handleCloseBurger));
  openBurger.addEventListener("click", handleOpenBurger);
  closeBurger.addEventListener("click", handleCloseBurger);
};
