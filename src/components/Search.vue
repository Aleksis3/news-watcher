<script setup lang="ts">
const emit = defineEmits(["changeUserSearch"]);
const emitChange = (e: any) => {
  emit("changeUserSearch", e.target.elements.search.value);
};
</script>
<template>
  <form @submit.prevent="(e) => emitChange(e)" class="container">
    <label for="search">Search for specific news</label>
    <div>
      <input id="search" name="search" class="search-bar" type="text" />
      <button type="submit" class="search-btn">Search</button>
    </div>
  </form>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  margin: 2rem 0;
  justify-content: center;
  width: 100%;
  margin-left: 5rem;
}

.search-bar,
.search-btn {
  font-size: 2rem;
}

.search-btn {
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 0.3rem 0.5rem;
  background-color: var(--purple-1);
  margin-left: 0.5rem;
}

@media only screen and (max-width: 40rem) {
  .container {
    margin-left: 0;
  }
}
</style>
