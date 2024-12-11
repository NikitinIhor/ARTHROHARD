export const menuOpening = () => {
  const openBurger = document.querySelector(".burger-icon ");
  const overlay = document.querySelector(".overlay ");
  const menu = document.querySelector(".menu-toggle ");
  const menuList = document.querySelectorAll(".nav-menu li a");
  // const menuContainer = document.querySelector(".burger-container");

  const handleToggleBurger = () => {
    overlay.classList.toggle("isOpen");
    openBurger.classList.toggle("fixed-position");
  };
  const handleCloseBurger = () => {
    overlay.classList.remove("isOpen");
    menu.checked = false;
    openBurger.classList.remove("fixed-position");
  };
  const handleClickOutsideMenu = (e) => {
    if (overlay.contains(e.target)) {
      handleCloseBurger();
    }
  };

  menuList.forEach((el) => el.addEventListener("click", handleCloseBurger));
  openBurger.addEventListener("click", handleToggleBurger);
  document.addEventListener("click", handleClickOutsideMenu);
};
