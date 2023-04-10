<script setup lang="ts">
import Paginator from "primevue/paginator";
import Card from "./NewsEl/Wrappers/Card.vue";
import NewsEl from "./NewsEl/NewsEl.vue";
import { reactive, ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";

const displayCard = ref(true);
const route = useRoute();

const query = reactive({
  rows: route.query.limit ? +route.query.limit : 20,
  offset:
    route.params.page && route.query.limit
      ? (+route.params.page - 1) * +route.query.limit
      : 0,
  category: route?.query?.category,
});

const data = ref(<news>{});

watchEffect(async () => {
  const response = await fetch(
    `/message?limit=${query.rows}&offset=${query.offset}${
      query.category ? `&category=${query.category}` : ""
    }`
  );
  const parsedResponse = await response.json();
  data.value = <news>parsedResponse.news;
  console.log(data.value);
});

const onPaginate = (e: any) => {
  router.push({
    path: `/page/${e.page + 1}`,
    query: { limit: e.rows, category: query.category },
  });
  query.offset = e.rows * e.page;
};

console.log(route.query);

interface news {
  pagination: {
    total: number;
  };
  data: [
    {
      author: string;
      title: string;
      image: string;
      description: string;
      category: string;
      url: string;
    }
  ];
}
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
      v-model:first="query.offset"
      @page="onPaginate"
      v-model:rows="query.rows"
      :totalRecords="data?.pagination?.total"
      :rowsPerPageOptions="[15, 20, 25, 35]"
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
  align-items: center;
  justify-content: center;
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
