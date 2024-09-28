<template>
    <div>
    <div v-for="(review, index) in paginatedReviews" :key="index">
        <ReviewCard :review="review" />
    </div>
    <Pagination :totalPages="totalPages" @changePage="handlePageChange" />
    </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue';
import Pagination from './Pagination.vue';

export default {
    components: {
    ReviewCard,
    Pagination
    },
    data() {
    return {
        currentPage: 1,
        reviewsPerPage: 5,
        reviews: [
        { name: "Sophia Martinez", date: "18/07/2024", rating: 4, description: "A fusion of food cultures around the world." },
        { name: "Lucy Thompson", date: "04/09/2024", rating: 5, description: "Learning methods that shape young minds." },
          // Add other reviews here...
        ]
    };
    },
    computed: {
    paginatedReviews() {
        const start = (this.currentPage - 1) * this.reviewsPerPage;
        const end = start + this.reviewsPerPage;
        return this.reviews.slice(start, end);
    },
    totalPages() {
        return Math.ceil(this.reviews.length / this.reviewsPerPage);
    }
    },
    methods: {
    handlePageChange(page) {
        this.currentPage = page;
    }
    }
}
</script>
