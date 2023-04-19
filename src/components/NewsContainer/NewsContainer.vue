<script setup lang="ts">
import Paginator from "primevue/paginator";
import NewsCard from "./NewsEl/NewsCard.vue";
import NewsList from "./NewsEl/NewsList.vue";
import { reactive, ref, watchEffect } from "vue";
import router from "../../router";
import { useRoute } from "vue-router";
import type { newsInterface as news } from "../../types/newsType";

const props = defineProps(["userSearch"]);
const route = useRoute();
// set the default mode of showing the data
const displayCard = ref(true);

interface Istatus {
  loading: boolean;
  error: null | string;
}

const status = reactive<Istatus>({
  loading: false,
  error: null,
});

const query = reactive({
  rows: route.query.limit ? +route.query.limit : 20,
  offset:
    route.params.page && route.query.limit
      ? (+route.params.page - 1) * +route.query.limit
      : 0,
  category: route?.query?.category,
  userSearch: props.userSearch,
});

const data = ref(<news>{});

watchEffect(async () => {
  try {
    status.loading = true;
    const response = await fetch(
      `/message?limit=${query.rows}&offset=${query.offset}${
        query.category ? `&category=${query.category}` : ""
      }${props.userSearch ? `&query=${props.userSearch}` : ""}`
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error);
    }
    const parsedResponse = await response.json();
    data.value = <news>parsedResponse.news;
  } catch (e) {
    if (e instanceof Error) {
      status.error = e.message;
    }
  } finally {
    status.loading = false;
  }
});

const onPaginate = (e: any) => {
  router.push({
    path: `/page/${e.page + 1}`,
    query: { limit: e.rows, category: query.category },
  });
  query.offset = e.rows * e.page;
};
</script>

<template>
  <div class="container">
    <div class="header-container">
      <h1 class="header">News</h1>
      <div class="display-modes">
        <p>Display:</p>
        <p class="display-mode" @click="displayCard = true">Card</p>
        <p class="display-mode" @click="displayCard = false">List</p>
      </div>
    </div>
    <p v-if="status.error">
      There was some error when fetching the data - {{ status.error }}
    </p>
    <div v-if="!status.loading && !status.error" class="news">
      <div v-for="(item, index) in data.data">
        <NewsCard
          v-if="displayCard"
          :title="item.title"
          :desc="item.description"
          :image="item.image || undefined"
          :category="item.category"
          :url="item.url"
        />
        <NewsList
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

.display-modes {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.display-mode {
  cursor: pointer;
}

.paginator {
  margin-top: 5rem;
}

.header-container {
  display: flex;
  flex-direction: column;
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
