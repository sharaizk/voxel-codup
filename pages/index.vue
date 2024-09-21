<template>
  <div class="d-flex-column justify-start align-start gap-0">
    <HomeHero />
    <ProductCategories
      :active-category="activeCategory"
      @set-category="setActiveCategory"
    />
    <HomeProducts :active-category="activeCategory" />
  </div>
</template>

<script lang="tsx" setup>
import HomeHero from "~/components/sections/HomeHero.vue";
import ProductCategories from "~/components/custom/ProductCategories.vue";
import HomeProducts from "~/components/sections/HomeProducts.vue";

const activeCategory = ref<string>("all");

const setActiveCategory = (category: string): void => {
  activeCategory.value = category;
};
</script>
