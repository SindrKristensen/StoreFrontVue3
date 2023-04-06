<template>
  <div class="container">
    <div class="content">
      <div class="top_content">
        <img :src="itemData?.image" class="img-thumbnail right_side" />
        <div class="left_side">
          <h3>
            {{ itemData?.title }}
          </h3>
          <div class="action_bar">
            <h4>{{ itemData?.price }},-</h4>
            <button type="button" class="btn btn-default button">Buy</button>
          </div>
          <div>
            {{ itemData?.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useFetchSingleItem } from '@/utils/useFetchSingleItem';
import { computed, ref } from 'vue';
import type { StoreItem } from '@/types';

const route = useRoute();
const { fetchSingleItem } = useFetchSingleItem();

const itemData = ref<StoreItem>();

const id = computed(() => route.params.id as string);

fetchSingleItem(id.value).then((item) => (itemData.value = item));
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

.top_content {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.right_side {
  max-height: 600px;
  max-width: 800px;
}

.left_side {
  display: flex;
  flex-direction: column;
  padding: 5rem;
  gap: 2rem;
}

.action_bar {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.button {
  background-color: hsla(160, 100%, 37%, 1);
}
.button:hover {
  opacity: 50%;
  background-color: hsla(160, 100%, 37%, 1);
}
</style>
