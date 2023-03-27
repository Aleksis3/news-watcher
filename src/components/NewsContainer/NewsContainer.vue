<script setup lang="ts">
import json from "../../mock.json";
import NewsEl from "./NewsEl/NewsEl.vue";
const names = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];
console.log(json);
const a = json.data;
</script>

<template>
  <div class="container">
    <h1 class="header">News</h1>
    <div class="news">
      <NewsEl
        v-for="item in a"
        :title="item.title"
        :desc="item.description"
        :image="item.image || undefined"
        :category="item.category"
        :url="item.url"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 5rem;
  margin-left: 5rem;
}

.news {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header {
  font-size: 3.2rem;
  margin-bottom: 1rem;
  color: #1c7ed6;
  text-decoration: underline;
}
</style>
