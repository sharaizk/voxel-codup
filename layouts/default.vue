<template>
  <section class="main_layout">
    <Header />
    <slot />
    <Footer />
  </section>
</template>
<script setup lang="tsx">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
