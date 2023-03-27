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
      <img v-if="props.image" :src="props.image" alt="news image" />
      <div class="info" @click="showModal = true">
        <h2 class="header">{{ props.title }}</h2>

        <p class="category">{{ props.category }}</p>
        <p class="desc">{{ props.desc }}</p>
      </div>
      <div class="die"></div>
    </div>
  </Fragment>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 50rem;
  width: 35rem;
  border: 1px black solid;
}

.header {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 2rem;
}

.info {
  display: flex;
  padding: 3rem;
  cursor: pointer;
  flex-direction: column;
  gap: 1rem;
}

.desc {
  color: black;
  font-size: 1.6rem;
  letter-spacing: 0.2px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
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
  width: 100%;
  height: 18rem;
  border-bottom: 1px #000 solid;
  align-self: center;
  object-fit: cover;
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
