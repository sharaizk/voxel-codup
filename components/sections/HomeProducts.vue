<template>
  <div class="d-flex-column justify-start home_products_container">
    <div class="content_container">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="tsx">
import ProductCard from "../custom/ProductCard.vue";
import type { Products } from "~/types";

const props = defineProps({
  activeCategory: {
    default: "all",
  },
});

const { data: products, error } = await useAsyncData<Products>("products", () =>
  $fetch("https://fakestoreapi.com/products")
);
const filteredProducts = computed(() => {
  if (!products?.value) return;
  if (products.value?.length <= 0) return [];

  if (props.activeCategory === "all") return products?.value;
  return products?.value?.filter(
    (prod) => prod.category === props.activeCategory
  );
});
</script>
