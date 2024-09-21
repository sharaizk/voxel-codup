<template>
  <header class="d-flex-row height-max-content header_container">
    <div class="d-flex-row space-between content_container">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <button @click.stop="togglePop"><CartBag /></button>
    </div>
  </header>
  <Transition name="cart-popup">
    <CartPopup v-if="cartStore.getCartPopup" @close-popup="closePopup" />
  </Transition>
</template>

<script lang="tsx" setup>
import { useCartStore } from "~/store/cart";
import Logo from "../custom/Logo.vue";
import CartBag from "../icons/CartBag.vue";
import CartPopup from "./CartPopup.vue";

const cartStore = useCartStore();
const togglePop = (): void => {
  cartStore.handlePopup(!cartStore.getCartPopup);
};

const closePopup = (): void => {
  cartStore.handlePopup(false);
};
</script>
