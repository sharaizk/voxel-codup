<template>
  <div class="d-flex-column space-between gap-32 product_card">
    <div class="d-flex-row flex-4">
      <NuxtImg :src="product.image" alt="product_image" class="product_image" />
    </div>
    <div class="d-flex-column space-between align-start gap-18 flex-6">
      <div class="d-flex-column justify-start align-start gap-6">
        <label class="t-text-black f-w-500 font-size-16">{{
          product.title
        }}</label>
        <p class="t-text-black-opace f-w-500">
          ${{ product.price?.toFixed(2) }}
        </p>
      </div>

      <button
        class="add_to_cart_btn gap-6 font-size-16"
        @click.stop="cartStore.addItemToCart(product)"
      >
        <template v-if="!isProductInCart">
          <PlusIcon />
          Add to Cart
        </template>

        <template v-else-if="isProductInCart">
          <MinusIcon />
          Remove from Cart
        </template>
      </button>
    </div>
  </div>
</template>

<script setup lang="tsx">
import type { Product } from "~/types";
import PlusIcon from "../icons/PlusIcon.vue";
import MinusIcon from "../icons/MinusIcon.vue";
import { useCartStore } from "~/store/cart";

const cartStore = useCartStore();

const props = defineProps<{
  product: Product;
}>();

const isProductInCart = computed(() => {
  const exists = cartStore.getCartItems?.findIndex(
    (prod) => prod.id === props.product.id
  );
  if (exists >= 0) return true;
  return false;
});
</script>
