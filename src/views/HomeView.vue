<script setup lang="ts">
import NewsContainer from "@/components/NewsContainer/NewsContainer.vue";
import Categories from "@/components/Sidebar.vue";
</script>

<template>
  <div class="grid-container">
    <Categories />
    <main>
      <NewsContainer />
    </main>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 25rem 1fr;
}
</style>
