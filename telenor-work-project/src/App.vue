<template>
  <div class="header-component">header</div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.header-component {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  color: #181818;
  background-color: aqua;
}
</style>
