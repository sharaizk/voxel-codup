<template>
  <div class="d-flex-row height-max-content cart_item space-between">
    <div class="d-flex-row image_container">
      <NuxtImg :src="product.image" alt="product_image" class="product_image" />
    </div>
    <div class="d-flex-column justify-start align-start gap-12">
      <label class="t-text-black font-size-16 f-w-500">{{
        product.title
      }}</label>
      <div class="d-flex-row space-between">
        <label class="font-size-16 t-text-black-opace">${{ product.price }}</label>
        <button
          class="cursor-pointer font-size-16 t-text-black-opace"
          @click.stop="cartStore.removeItemFromCart(product)"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { useCartStore } from "~/store/cart";
import type { Product } from "~/types";
const props = defineProps<{
  product: Product;
}>();
const cartStore = useCartStore();
</script>
