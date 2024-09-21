import type { Products, Product } from "~/types";

export const storeToLocal = (product: Product): void => {
  try {
    const storedItems: Products | undefined = getItemsFromLocal();
    if (!storedItems) return;

    const itemIndex = storedItems.findIndex((prod) => prod.id === product.id);
    if (itemIndex < 0) {
      storedItems.push(product);
    }

    localStorage.setItem("cartItems", JSON.stringify(storedItems));
  } catch (error) {
    console.log("SOMETHING WENT WRONG");
  }
};

export const getItemsFromLocal = (): Products | [] | undefined => {
  try {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  } catch (error) {
    console.log(error);
  }
};

export const removeItemFromLocal = (product: Product): void => {
  try {
    const storedItems: Products | undefined = getItemsFromLocal();
    if (!storedItems) return;

    const filteredProducts = storedItems?.filter(
      (prod) => prod.id !== product.id
    );
    localStorage.setItem("cartItems", JSON.stringify(filteredProducts));
  } catch (error) {
    console.log(error);
  }
};
