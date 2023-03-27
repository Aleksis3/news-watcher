<script setup lang="ts"></script>

<template>
  <div class="container">
    <label for="search">Search for specific news</label>
    <div>
      <input id="search" class="search-bar" type="text" />
      <button class="search-btn">Search</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  padding: 3rem;
  justify-content: center;

  width: 100%;
}

.search-bar,
.search-btn {
  font-size: 2rem;
}
</style>
