<script setup lang="ts">
const props = defineProps({
  title: String,
  desc: String,
  image: String,
  category: String,
  url: String,
});
</script>

<template>
  <Fragment>
    <div class="container">
      <!-- <iframe
        :src="props.url"
        width="680"
        height="480"
        allowfullscreen
      ></iframe> -->
      <div class="info">
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
  height: 18rem;
  gap: 15rem;

  border-bottom: 1px black solid;
  padding: 1rem 0;
}

.info {
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}

.desc {
  color: black;
  font-size: 1.4rem;
  letter-spacing: 0.2px;
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
}

img {
  object-fit: cover;
  height: 100%;
  width: auto;
  padding: 1rem;
}
</style>
