<template>
  <li class="list-group-item cart-item">
    <div class="cart-details">
      <strong>{{ cartItem.item.title }}</strong>
      <div>Prize: {{ cartItem.item.price }},-</div>
      <div>Quantity: {{ cartItem.quantity }}</div>
    </div>

    <div class="cart-actions">
      <button
        type="button"
        class="btn btn-danger btn-sm"
        @click="$emit('deleteItem', cartItem.item)"
      >
        <font-awesome-icon class="icon_color" icon="minus" size="xl" />
      </button>
      <button type="button" class="btn btn-success btn-sm" @click="$emit('addItem', cartItem.item)">
        <font-awesome-icon class="icon_color" icon="plus" size="xl" />
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { CartItem } from '@/types';

defineProps({
  cartItem: {
    type: Object as PropType<CartItem>,
    required: true
  }
});

defineEmits(['deleteItem', 'addItem']);
</script>

<style scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.cart-details {
  display: flex;
  flex-direction: column;
}

.cart-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
</style>
