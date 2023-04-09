<script setup lang="ts">
import Paginator from "primevue/paginator";

import Card from "./NewsEl/Wrappers/Card.vue";
import NewsEl from "./NewsEl/NewsEl.vue";

import { ref, watchEffect } from "vue";
import router from "@/router";

const displayCard = ref(true);
const offset = ref(1);
const data = ref({ data: [] });

watchEffect(async () => {
  const response = await fetch("/message?limit=20&offset=10");
  const parsedResponse = await response.json();
  data.value = parsedResponse.news;
  console.log(data.value);
});
console.log(data.value);

const onPaginate = (e: any) => {
  offset.value = e.rows * (e.page + 1);
  router.replace({ path: `/${e.page + 1}` });
  console.log(offset.value);
};
</script>

<template>
  <div class="container">
    <div class="header-container">
      <h1 class="header">News</h1>
      <p>Display:</p>
      <p @click="displayCard = true">Card</p>
      <p @click="displayCard = false">List</p>
    </div>
    <div class="news">
      <div v-for="(item, index) in data.data">
        <Card
          v-if="displayCard"
          :title="item.title"
          :desc="item.description"
          :image="item.image || undefined"
          :category="item.category"
          :url="item.url"
        />
        <NewsEl
          v-else
          :title="item.title"
          :desc="item.description"
          :image="item.image || undefined"
          :category="item.category"
          :url="item.url"
        />
      </div>
    </div>

    <Paginator
      v-model:first="offset"
      @page="onPaginate"
      :rows="15"
      :totalRecords="120"
      :rowsPerPageOptions="[15, 25, 35]"
      class="paginator"
    ></Paginator>
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
  gap: 3rem;
}

/* :deep(.p-paginator-page) {
  font-size: 5rem;
} */

:deep(.p-paginator > * > *) {
  font-size: 3rem;
}

.paginator {
  margin-top: 5rem;
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
