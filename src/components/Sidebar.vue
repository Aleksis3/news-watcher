<script setup lang="ts">
const names = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];
</script>

<template>
  <nav>
    <ul class="list">
      <li v-for="name in names">{{ name }}</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  font-size: 2rem;
  background-color: #7048e8;
  height: calc(100vh - 6.5rem);
  max-width: 28rem;
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
</style>
