import { defineStore } from "pinia";
import type { CartState, Products, Product } from "~/types";
import { storeToLocal, removeItemFromLocal } from "~/utils/localStorage";
export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    cart_items: [],
    cart_popup: false,
  }),

  getters: {
    getCartItems: (state): Products => state.cart_items,
    getCartPopup: (state): boolean => state.cart_popup,
  },

  actions: {
    removeItemFromCart(product: Product) {
      const product_id = product.id;
      const exists = this.getCartItems?.findIndex(
        (prod) => prod.id === product_id
      );

      if (exists >= 0) {
        removeItemFromLocal(product);
        const filtered = this.getCartItems?.filter(
          (prod) => prod.id !== product.id
        );
        this.$patch({
          cart_items: [...filtered],
        });
        return;
      }
    },
    addItemToCart(product: Product) {
      const product_id = product.id;
      // CHECK IF EXISTS
      const exists = this.getCartItems?.findIndex(
        (prod) => prod.id === product_id
      );

      if (exists >= 0) {
        const filtered = this.getCartItems?.filter(
          (prod) => prod.id !== product.id
        );
        removeItemFromLocal(product);
        this.$patch({
          cart_items: [...filtered],
        });
        return;
      }
      if (!this.getCartPopup) {
        this.$state.cart_popup = true;
      }
      storeToLocal(product);
      this.$patch({
        cart_items: [...this.getCartItems, product],
      });
    },
    loadAll(products: Products) {
      this.$patch({
        cart_items: [...products],
      });
    },

    handlePopup(payload: boolean) {
      this.$state.cart_popup = payload;
    },
  },
});
