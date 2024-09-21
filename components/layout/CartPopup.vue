<template>
  <div class="cart_popup_container d-flex-column justify-start align-start">
    <div class="d-flex-row space-between height-max-content head">
      <h5 class="t-text-black f-w-600 font-size-22">
        Your Cart ({{ cartStore?.getCartItems?.length }})
      </h5>
      <button @click.stop="handleClose">
        <CrossIcon />
      </button>
    </div>

    <!-- CART ITEMS -->
    <div
      class="d-flex-column justify-start align-start gap-16 cart_items"
      v-if="cartStore.getCartItems?.length > 0"
    >
      <CartItem
        v-for="product in cartStore.getCartItems"
        :product="product"
        :key="product.id"
      />
    </div>
    <div
      class="d-flex-column gap-16 cart_items"
      v-if="cartStore.getCartItems?.length <= 0"
    >
      <h5 class="f-w-400 font-size-18">No Items in Cart :(</h5>
    </div>
    <div class="d-flex-column justify-start align-start gap-0">
      <div class="d-flex-row height max-content space-between total_container">
        <label class="t-text-black f-w-600 font-size-22">Total</label>
        <label class="t-text-black f-w-600 font-size-22"
          >${{ totalPrice?.toFixed(2) }}</label
        >
      </div>
      <button class="checkout_btn font-size-16">Continue to Checkout</button>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { useCartStore } from "~/store/cart";
import CrossIcon from "../icons/CrossIcon.vue";
import CartItem from "../custom/CartItem.vue";

const cartStore = useCartStore();

const emit = defineEmits<{
  (e: "close-popup"): void;
}>();

const totalPrice = computed(() => {
  if (cartStore?.getCartItems?.length > 0) {
    const products = cartStore?.getCartItems;
    return products.reduce((sum, product) => sum + product.price, 0);
  }
  return 0;
});
const handleClose = () => {
  emit("close-popup");
};
</script>
