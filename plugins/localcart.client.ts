import { useCartStore } from "~/store/cart";
import { getItemsFromLocal } from "~/utils/localStorage";
export default defineNuxtPlugin((nuxtApp) => {
  const cartStore = useCartStore();
  const items = getItemsFromLocal();
  if (!items) return;
  if (items?.length > 0) {
    cartStore.loadAll(items);
  }
});
