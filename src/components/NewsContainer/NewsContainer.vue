<script setup lang="ts">
import json from "../mock2.json";
import Card from "./NewsEl/Wrappers/Card.vue";
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
    <div class="header-container">
      <h1 class="header">News</h1>
      <p>Display:</p>
      <p>Card</p>
      <p>List</p>
    </div>
    <div class="news">
      <div v-for="(item, index) in a">
        <Card
          :title="item.title"
          :desc="item.description"
          :image="item.image || undefined"
          :category="item.category"
          :url="item.url"
        />
      </div>
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
  flex-wrap: wrap;
  width: 100%;
  /* grid-auto-flow: row; */
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  gap: 2rem;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.header {
  color: #1c7ed6;
  text-decoration: underline;
}

@media only screen and (max-width: 50rem) {
  .container {
    margin-left: 0;
    padding: 2rem;
  }
}
</style>
