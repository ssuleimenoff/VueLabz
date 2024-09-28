<template>
    <div class="pagination">
    <button @click="prevPage">Previous</button>
    <p>{{ currentPage }} / {{ totalPages }}</p>
    <button @click="nextPage">Next</button>
    </div>
</template>

<script>
export default {
    data() {
    return {
        currentPage: 1,
        totalPages: 5,
    };
    },
    methods: {
    nextPage() {
        if (this.currentPage < this.totalPages) {
        this.currentPage++;
        }
    },
    prevPage() {
        if (this.currentPage > 1) {
        this.currentPage--;
        }
    },
    },
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
button {
    background-color: lightblue;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}
</style>