<script setup lang="ts">
import NewsContainer from "@/components/NewsContainer/NewsContainer.vue";
import Categories from "@/components/Sidebar.vue";
import Search from "@/components/Search.vue";
</script>

<template>
  <div class="grid-container">
    <Categories />
    <main class="a">
      <Search />
      <NewsContainer />
    </main>
  </div>
</template>

<style scoped>
.grid-container {
  display: flex;
  flex: 1;
  width: 100%;
}
main {
  width: 130rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
</style>
