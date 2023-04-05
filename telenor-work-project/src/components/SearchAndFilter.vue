<template>
  <div class="searchBar">
    <div class="input-group-btn drop-down">
      <select v-model="filterQuery" class="form-select">
        <option v-for="category in categories" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <div class="input-group">
      <input
        type="search"
        class="form-control"
        v-model="searchQuery"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
    </div>
  </div>
  {{ filterQuery }}
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { ref } from 'vue'

const props = defineProps({
  search: {
    type: String,
    default: ''
  },
  filter: {
    type: String,
    default: ''
  },
  categories: {
    type: Array<String>,
    default: []
  }
})

const emits = defineEmits(['update:search', 'update:filter'])

const searchQuery = useVModel(props, 'search', emits)
const filterQuery = ref('')
</script>

<style scoped>
.searchBar {
  display: flex;
  flex-direction: row;
  gap: 2rem;

  padding: 0.5rem;

  background-color: #f8f8f8;
  border-style: solid;
  border-width: thin;
  border-color: #f8f8f8;
  border-radius: 5%;
}

.drop-down {
  width: 30%;
}
</style>
