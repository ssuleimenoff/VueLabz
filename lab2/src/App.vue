<template>
  <div class="app-container">
    <div class="header">
      <p class="date">26.09.2024</p>
      <div class="filter-section">
        <button class="filter-button">All</button>
        <select v-model="selectedFilter" class="rating-filter">
          <option value="rating">Rating</option>
        </select>
      </div>
      <ReviewPagination /> <!-- Use Pagination component -->
    </div>
    
    <ReviewFilter /> <!-- Use Filter component -->
    
    <div class="reviews-container">
      <ReviewCard
        v-for="(review, index) in reviews"
        :key="index"
        :review="review"
      />
    </div>
  </div>
</template>

<script>
import ReviewCard from './components/ReviewCard.vue';
import ReviewPagination from './components/ReviewPagination.vue'; // Renamed Pagination
import ReviewFilter from './components/ReviewFilter.vue'; // Renamed Filter

export default {
  components: {
    ReviewCard,
    ReviewPagination,
    ReviewFilter,
  },
  data() {
    return {
      selectedFilter: 'rating',
      reviews: [
        { name: "Sophia Martinez", date: "18/07/2024", rating: 4, description: "A fusion of food cultures around the world.", liked: false },
        { name: "Lucy Thompson", date: "04/09/2024", rating: 5, description: "Learning methods that shape young minds.", liked: false },
        { name: "Mia Harris", date: "03/09/2024", rating: 4, description: "Innovative classroom techniques for teachers.", liked: false },
        { name: "Markus James", date: "15/08/2024", rating: 4, description: "Exploring the wonders of world travel.", liked: false },
      ],
    };
  },
};
</script>

<style scoped>
.app-container {
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.date {
  font-size: 24px;
}
.filter-section {
  display: flex;
  align-items: center;
}
.filter-button {
  margin-right: 10px;
}
.rating-filter {
  padding: 5px;
}
.reviews-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
