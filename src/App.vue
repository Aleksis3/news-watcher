<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import "primeicons/primeicons.css";

const route = useRoute();
</script>

<template>
  <Header />
  <RouterView :key="route.fullPath" />
</template>

<style scoped></style>
