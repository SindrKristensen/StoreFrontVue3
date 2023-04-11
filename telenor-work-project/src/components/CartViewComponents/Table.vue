<template>
  <div class="cart">
    <ul class="list-group">
      <li v-if="!cartItems.length" class="list-group-item list-group-item-info">
        <p>Add some items to the cart!</p>
      </li>

      <li v-if="cartItems.length" class="list-group-item list-group-item-info">
        <h5 class="list-group-item-heading">Cart:</h5>
      </li>

      <li class="list-group-item" v-for="cartItem in cartItems" :key="cartItem.item.id">
        <!--        <CartListItem :cartItem="cartItem" />-->
        {{ cartItem }}
      </li>

      <li class="list-group-item list-group-item-success">
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>

        <p>
          Total Price:
          <span class="has-text-weight-bold">{{ totalCartCost }},-</span>
        </p>
      </li>
    </ul>

    <div class="action-row">
      <button :disabled="!cartItems.length" class="btn btn-danger">
        Checkout (<span class="has-text-weight-bold">{{ totalCartCost }},-</span>)
      </button>

      <button class="btn btn-danger" @click="cart.emptyCart()">
        <span>Delete All items</span>
        <span class="icon is-small">
          <i class="fas fa-times"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { CartItem } from '@/types';
import { computed } from 'vue';
import { injectShoppingCartStore } from '@/stores/ShoppingCartStore';

const props = defineProps({
  cartItems: {
    type: Array as PropType<Array<CartItem>>,
    required: true
  }
});

const cart = injectShoppingCartStore();

const cartQuantity = computed(() => {
  let total = 0;

  props.cartItems?.forEach((item) => {
    total = total + item.quantity;
  });

  return total;
});
const totalCartCost = computed(() => {
  let total = 0;

  props.cartItems?.forEach((item) => {
    total = total + item.totalPrice;
  });

  return total.toFixed(2);
});
</script>

<style scoped>
.cart {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 100%;
}

.action-row {
  display: flex;
  gap: 2rem;
}
</style>
