<script setup lang="ts">
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <div class="modal-body">
        <slot name="body"></slot>
        <button class="close-btn" @click="$emit(`close`)">X</button>
      </div>
    </div>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 5rem;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 80vw;
  height: 90vh;
  margin: 3rem auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  max-width: 90vw;
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
}

.close-btn {
  padding: 2rem 3rem;
  position: absolute;
  transform: translateX(-100%);
  cursor: pointer;
}

.next {
  right: 3rem;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
