import { addItemToFooterList } from "./createItem.js";
import { getData } from "./getData.js";

export const loadProducts = (page, itemsPerPage) => {
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
