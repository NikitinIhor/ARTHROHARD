const footerList = document.querySelector(".footer-list");

export const addItemToFooterList = (ID) => {
  const listItem = document.createElement("li");
  const button = document.createElement("button");

  listItem.classList.add("footer-item");
  button.classList.add("footer-btn");
  button.type = "button";
  button.innerHTML = `ID : ${ID}`;
  button.setAttribute("data-id", ID);

  listItem.append(button);
  footerList.append(listItem);
};
