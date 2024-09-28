<template>
  <div class="filter-container">
    <button @click="filterBy('all')">All</button>
    <button @click="filterBy('rating')">Rating</button>
  </div>
</template>

<script>
export default {
  methods: {
    filterBy(type) {
      this.$emit('filter', type); // Emit event to parent
    },
  },
};
</script>

<style scoped>
.filter-container {
  display: flex;
  gap: 10px;
}
button {
  padding: 5px;
  cursor: pointer;
}
</style>
