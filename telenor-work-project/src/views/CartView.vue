<template>
  <div class="container">
    <div class="content">
      <Table :cart-items="cart.getCart()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from '@/components/CartViewComponents/Table.vue';
import { injectShoppingCartStore } from '@/stores/ShoppingCartStore';

const cart = injectShoppingCartStore();
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem;

  color: rgba(60, 60, 60, 0.66);
  background-color: #f8f8f8;
  border-style: solid;
  border-width: thin;
  border-color: #f8f8f8;
  border-radius: 5%;
}
</style>
