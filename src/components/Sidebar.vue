<script setup lang="ts">
import router from "@/router";

const names = [
  "General",
  "Business",
  "Entertainment",
  "Science",
  "Sports",
  "Technology",
];

const onSwitch = (name: string) => {
  router.replace({
    path: `/page/1`,
    name: "home",
    query: { category: name.toLowerCase() },
  });
};
</script>

<template>
  <nav>
    <ul class="list">
      <li v-for="name in names" @click="onSwitch(name)">{{ name }}</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  font-size: 2rem;
  background-color: #7048e8;
  height: calc(100vh - 6.5rem);
  min-width: 25rem;
  position: sticky;
  left: 0;
  top: 6.5rem;
}

.list {
  display: flex;

  color: #fff;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  margin-right: -1px;
  border: 1px #111 solid;
  border-top: none;
  width: 100%;
  cursor: pointer;
}

@media only screen and (max-width: 50rem) {
  nav {
    display: none;
    position: relative;
  }
}
</style>
