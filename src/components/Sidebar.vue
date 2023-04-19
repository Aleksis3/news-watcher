<script setup lang="ts">
import router from "../router";
import { ref } from "vue";

const openOnMobile = ref(false);
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

const switchOpenOnMobile = () => {
  openOnMobile.value = !openOnMobile.value;
};
</script>

<template>
  <i
    class="pi"
    :class="openOnMobile ? `pi-times` : `pi-bars`"
    @click="switchOpenOnMobile"
  ></i>
  <nav :class="openOnMobile && `visible`">
    <ul class="list">
      <li class="category" v-for="name in names" @click="onSwitch(name)">
        {{ name }}
      </li>
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

.category {
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

.category:hover {
  background-color: #8048e8;
}

.mobile-open-icon,
.pi {
  display: none;
}

@media only screen and (max-width: 65rem) {
  .pi {
    display: block;
  }

  .pi-bars,
  .pi-times {
    cursor: pointer;
    z-index: 99999;
    border: #111 1px solid;
    background-color: var(--purple-1);
    font-size: 3rem;
    position: absolute;
    top: 1rem;
    right: 2rem;
    border-radius: 10px;
    padding: 0.7rem;
  }

  .pi-bars {
    color: #eee;
  }

  .pi-times {
    color: #ff8787;
  }

  nav {
    display: none;
    position: absolute;
    left: 0;
    height: 30vh;
    top: 0;
    min-width: 0;
    width: 60vw;
    overflow: hidden;
    z-index: 99000;
  }

  .visible {
    display: block;
  }

  .list {
    justify-content: space-around;
  }
  .category {
    height: 100%;
    border-top: 1px #111 solid;
    margin-right: 0;
  }

  .category:last-child {
    border-bottom: 2px #111 solid;
  }

  .category:first-child {
    border-top: 2px #111 solid;
  }
}
</style>
