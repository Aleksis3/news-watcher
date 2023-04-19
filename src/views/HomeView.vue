<script setup lang="ts">
import NewsContainer from "@/components/NewsContainer/NewsContainer.vue";
import Categories from "@/components/Sidebar.vue";
import Search from "@/components/Search.vue";
import { ref } from "vue";

const userSearch = ref();
</script>

<template>
  <div class="flex-container">
    <Categories />
    <main>
      <Search @changeUserSearch="(value:string) => (userSearch = value)" />
      <NewsContainer :userSearch="userSearch" />
    </main>
  </div>
</template>

<style scoped>
.flex-container {
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
