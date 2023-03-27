<script setup lang="ts">
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
const props = defineProps({
  title: String,
  desc: String,
  image: String,
  category: String,
  url: String,
});
const showModal = ref(false);
</script>

<template>
  <Fragment>
    <Teleport to="body">
      <modal :show="showModal" @close="showModal = false">
        <template #body>
          <iframe class="xd" :src="props.url"></iframe>
        </template>
      </modal>
    </Teleport>
    <div class="container">
      <div class="info" @click="showModal = true">
        <h2 class="header">{{ props.title }}</h2>
        <p class="category">{{ props.category }}</p>
        <p class="desc">{{ props.desc }}</p>
      </div>
      <img v-if="props.image" :src="props.image" alt="news image" />
    </div>
  </Fragment>
</template>

<style scoped>
.container {
  display: flex;
  height: fit-content;
  padding: 3rem 0;
  width: 90rem;
  max-width: 95vw;
  border-bottom: 1px black solid;
}

.header {
  font-size: 2rem;
}

.info {
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 1rem;
}

.desc {
  color: black;
  font-size: 1.6rem;
  letter-spacing: 0.2px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.category {
  background-color: orange;
  display: inline-block;
  width: fit-content;
  border-radius: 10px;
  padding: 0.5rem 0.4rem;
  text-transform: uppercase;
  color: #111;
  font-weight: bold;
  font-size: 1.3rem;
}

img {
  object-fit: fill;
  height: 15rem;
  width: 20rem;
  padding: 1rem;
  margin-left: 5rem;
}

.xd {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 40rem) {
  img {
    display: none;
  }
}
</style>
