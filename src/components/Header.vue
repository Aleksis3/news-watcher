<script setup lang="ts"></script>

<template>
  <header>
    <router-link class="logo" to="/">news-watcher</router-link>
  </header>
</template>

<style scoped>
header {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--purple-1);
  color: #fff;
  border-bottom: #111 1px solid;
  font-size: 2rem;
  align-items: center;
  padding: 0 4rem;
  height: 6.5rem;
}

.logo {
  cursor: pointer;
}
</style>
