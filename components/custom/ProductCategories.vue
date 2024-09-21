<template>
  <div class="d-flex-row product_categories_container max-height-content">
    <div class="d-flex-row justify-start content_container">
      <button
        class="category_btn font-size-14 f-w-500"
        @click.stop="selectCategory('all')"
        :class="[activeCategory === 'all' && 'active']"
      >
        all
      </button>
      <button
        v-for="category in categories"
        :key="category"
        class="category_btn font-size-14 f-w-500"
        @click.stop="selectCategory(category)"
        :class="[activeCategory === category && 'active']"
      >
        {{ category }}
      </button>
    </div>
  </div>

  <div
    class="product_categories_container_drop d-flex-row space-between max-height-content"
  >
    <button class="drop_button" @click="toggleOpen" :class="[isOpen && 'open']">
      <label class="font-size-14 t-text-black f-w-600">{{
        activeCategory
      }}</label>
      <ChevBottom />
    </button>
    <Transition name="slide-fade-top">
      <div class="category_list_container" v-if="isOpen">
        <button
          class="category_drop_btn font-size-14 f-w-500"
          @click.stop="selectCategoryDrop('all')"
        >
          all
        </button>
        <button
          v-for="category in categories"
          :key="category"
          class="category_drop_btn font-size-14 f-w-500"
          @click.stop="selectCategoryDrop(category)"
          :class="[activeCategory === category && 'active']"
        >
          {{ category }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="tsx">
import type { Categories } from "~/types";
import ChevBottom from "../icons/ChevBottom.vue";

const isOpen = ref<boolean>(false);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
const props = defineProps({
  activeCategory: {
    default: "all",
  },
});

const emit = defineEmits<{
  (e: "set-category", category: string): void;
}>();

const { data: categories, error } = await useFetch<Categories>(
  "https://fakestoreapi.com/products/categories"
);

const selectCategory = (category: string) => {
  emit("set-category", category);
};

const selectCategoryDrop = (category: string) => {
  emit("set-category", category);
  isOpen.value = false;
};
</script>
