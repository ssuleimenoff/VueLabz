<template>
    <div class="review-card">
    <div class="review-header">
        <p class="review-name">{{ review.name }}</p>
        <p class="review-date">{{ review.date }}</p>
    </div>
    <p class="review-description">{{ review.description }}</p>
    <div class="review-rating">
        <i v-for="n in 5" :key="n" class="fa" :class="n <= review.rating ? 'fa-star' : 'fa-star-o'"></i>
    </div>
    <button class="like-button" @click="toggleLike">{{ localLiked ? 'Liked' : 'Like' }}</button>
    </div>
</template>

<script>
export default {
    props: ['review'],
    data() {
    return {
        localLiked: this.review.liked, // Local copy of liked state
    };
    },
    methods: {
    toggleLike() {
        this.localLiked = !this.localLiked; // Modify local copy
    },
    },
};
</script>

<style scoped>
.review-card {
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 10px;
}
.review-header {
    display: flex;
    justify-content: space-between;
}
.review-name {
    font-weight: bold;
}
.review-rating {
    color: gold;
}
.like-button {
    background-color: lightgreen;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}
</style>