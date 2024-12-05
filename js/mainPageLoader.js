export const mainPageLoader = () => {
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
};
