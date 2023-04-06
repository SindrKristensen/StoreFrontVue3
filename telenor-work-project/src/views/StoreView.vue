<template>
  <div class="container">
    <SearchAndFilter
      v-model:search="searchValue"
      :categories="categories"
      v-model:filter="filterValue"
    />

    <ItemOverview :items="items" />
  </div>
</template>

<script setup lang="ts">
import ItemOverview from '@/components/ItemOverview.vue';
import { useFetchData } from '@/utils/useFetchData';
import { computed, ref } from 'vue';
import type { StoreItem } from '@/types';
import SearchAndFilter from '@/components/SearchAndFilter.vue';
import { searchAndFilter } from '@/utils/searchAndFilter';
import { useFetchCategories } from '@/utils/useFetchCategories';

const { fetchData } = useFetchData();
const { fetchCategories } = useFetchCategories();
const { performSearch, preformFilter } = searchAndFilter();

const storeItems = ref<Array<StoreItem>>([]);
const categories = ref<Array<string>>([]);
const searchValue = ref('');
const filterValue = ref('Select Category');

const items = computed(() => {
  let newItems = storeItems.value;

  if (searchValue) {
    newItems = performSearch(newItems, searchValue.value);
  }

  if (filterValue.value !== 'Select Category') {
    newItems = preformFilter(newItems, filterValue.value);
  }

  return newItems;
});

fetchData().then((json) => (storeItems.value = json));
fetchCategories().then((json) => (categories.value = json));
</script>

<style>
.container {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 2rem;
}
</style>
