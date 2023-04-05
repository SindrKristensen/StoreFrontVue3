<template>
  <div class="container">
    <SearchAndFilter v-model:search="searchValue" :categories="categories" />

    <ItemOverview :items="items" />
  </div>
</template>

<script setup lang="ts">
import ItemOverview from '@/components/ItemOverview.vue'
import { useFetchData } from '@/utils/useFetchData'
import { computed, ref } from 'vue'
import type { StoreItem } from '@/types'
import SearchAndFilter from '@/components/SearchAndFilter.vue'
import { searchAndFilter } from '@/utils/searchAndFilter'
import { useFetchCategories } from '@/utils/useFetchCategories'

const { fetchData } = useFetchData()
const { fetchCategories } = useFetchCategories()

const storeItems = ref<Array<StoreItem>>([])
const categories = ref<Array<string>>([])
const searchValue = ref(undefined)
const filterValue = ref(undefined)

const { performSearch } = searchAndFilter()

const items = computed(() => {
  if (searchValue) {
    return performSearch(storeItems, searchValue.value)
  } else {
    return storeItems.value
  }
})

fetchData().then((json) => (storeItems.value = json))
fetchCategories().then((json) => (categories.value = json))
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
